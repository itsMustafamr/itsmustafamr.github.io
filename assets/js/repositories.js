// GitHub statistics page script extracted from _pages/repositories.html to avoid inline-script CSP issues.
// -------------------------------------------------------------
// Load GitHub statistics from JSON file
async function loadGitHubStats() {
  try {
    const response = await fetch('/assets/data/github_stats.json?' + new Date().getTime()); // Cache busting
    if (!response.ok) {
      throw new Error('Failed to load GitHub statistics');
    }
    const data = await response.json();
    updateStats(data.statistics);
    updateAchievements(data.achievements);
    updateContributionCalendar(data.contributions);
  } catch (error) {
    console.error('Error loading GitHub statistics:', error);
    showError();
  }
}

function updateStats(statistics) {
  document.getElementById('total-stars').textContent = statistics.total_stars;
  document.getElementById('total-commits').textContent = statistics.total_commits;
  document.getElementById('total-prs').textContent = statistics.total_prs;
  document.getElementById('total-issues').textContent = statistics.total_issues;
  document.getElementById('contributed-repos').textContent = statistics.contributed_repos;
  document.getElementById('github-grade').textContent = statistics.grade;
}

function updateAchievements(achievements) {
  const badgesContainer = document.querySelector('.badges-grid');
  const badgesHTML = Object.values(achievements).map(achievement => `
    <div class="badge-card">
      <div class="badge-icon">🏆</div>
      <div class="badge-title">${achievement.title}</div>
      <div class="badge-subtitle">${achievement.subtitle}</div>
      <div class="badge-points">${achievement.points}pt</div>
    </div>
  `).join('');
  badgesContainer.innerHTML = badgesHTML;
}

function updateContributionCalendar(contributions) {
  const totalContributions = contributions.totalContributions || 0;
  document.getElementById('total-contributions').textContent = totalContributions;

  let allCounts = [];
  contributions.weeks.forEach(week => {
    week.contributionDays.forEach(day => allCounts.push(day.contributionCount));
  });
  const minCount = Math.min(...allCounts.filter(x => x > 0));
  const maxCount = Math.max(...allCounts);

  const monthLabelsContainer = document.getElementById('month-labels');
  const calendarContainer = document.getElementById('contribution-calendar');
  if (!contributions.weeks || contributions.weeks.length === 0) {
    calendarContainer.innerHTML = '<div class="loading">Contribution data not available</div>';
    return;
  }

  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthLabels = [];
  let currentMonth = -1;
  let currentYear  = null;
  contributions.weeks.forEach((week, idx) => {
    const d = new Date(week.contributionDays[0].date);
    const m = d.getMonth();
    const y = d.getFullYear();
    if (m !== currentMonth || y !== currentYear) {
      currentMonth = m; currentYear = y;
      monthLabels.push({ month: months[m], weekIndex: idx });
    }
  });

  let mlHTML = '';
  let lastIdx = 0;
  monthLabels.forEach(({month,weekIndex}) => {
    const spacing = (weekIndex - lastIdx) * 10;
    mlHTML += `<div class="month-label-container" style="margin-left:${spacing}px;"><div class="month-label">${month}</div></div>`;
    lastIdx = weekIndex;
  });
  monthLabelsContainer.innerHTML = mlHTML;

  const calHTML = contributions.weeks.map(week => `
    <div class="calendar-week">
      ${week.contributionDays.map(day => {
        const level = getContributionLevelDynamic(day.contributionCount, minCount, maxCount);
        const formattedDate = day.date;
        return `<div class="calendar-day level-${level} ${day.contributionCount>0?'has-tooltip':''}" 
                     data-date="${formattedDate}" 
                     data-count="${day.contributionCount}"
                     onmouseenter="showTooltip(event, '${day.contributionCount} contribution${day.contributionCount !== 1 ? 's' : ''} on ${formattedDate}')"
                     onmouseleave="hideTooltip()"></div>`;
      }).join('')}
    </div>`).join('');
  calendarContainer.innerHTML = calHTML;
}

function getContributionLevelDynamic(count, min, max) {
  if (count === 0) return 0;
  if (max === min) return 4;
  const t1 = min + (max-min)*0.25;
  const t2 = min + (max-min)*0.5;
  const t3 = min + (max-min)*0.75;
  if (count < t1) return 1;
  if (count < t2) return 2;
  if (count < t3) return 3;
  return 4;
}

// Tooltip logic with position: fixed and high z-index
function showTooltip(e, text) {
  let tooltip = document.getElementById('calendar-tooltip');
  if (!tooltip) {
    tooltip = document.createElement('div');
    tooltip.id = 'calendar-tooltip';
    tooltip.style.position = 'fixed';
    tooltip.style.zIndex = '9999';
    tooltip.style.background = '#000';
    tooltip.style.color = '#fff';
    tooltip.style.padding = '8px 12px';
    tooltip.style.borderRadius = '6px';
    tooltip.style.fontSize = '0.8rem';
    tooltip.style.pointerEvents = 'none';
    tooltip.style.whiteSpace = 'nowrap';
    tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.3)';
    tooltip.style.transition = 'opacity 0.2s';
    document.body.appendChild(tooltip);
  }
  tooltip.textContent = text;
  tooltip.style.opacity = '1';
  
  // Position tooltip above the day square
  const rect = e.target.getBoundingClientRect();
  const tooltipWidth = tooltip.offsetWidth || 200;
  const tooltipHeight = tooltip.offsetHeight || 40;
  
  let x = rect.left + rect.width / 2 - tooltipWidth / 2;
  let y = rect.top - tooltipHeight - 8;
  
  // Ensure tooltip doesn't go off screen
  if (x < 10) x = 10;
  if (x + tooltipWidth > window.innerWidth - 10) {
    x = window.innerWidth - tooltipWidth - 10;
  }
  if (y < 10) {
    // If tooltip would go above screen, show it below
    y = rect.bottom + 8;
  }
  
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function hideTooltip() {
  const tooltip = document.getElementById('calendar-tooltip');
  if (tooltip) tooltip.style.opacity = 0;
}

function showError() {
  const el = document.getElementById('featured-repos');
  if (el) el.innerHTML = '<div class="loading">Unable to load repositories.</div>';
}

function initGitHubStats() {
  document.getElementById('current-year').textContent = new Date().getFullYear();
  loadGitHubStats();
  setInterval(loadGitHubStats, 2*60*1000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initGitHubStats);
} else {
  initGitHubStats();
} 