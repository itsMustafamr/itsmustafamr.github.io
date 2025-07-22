// Load GitHub statistics from JSON file and render statistics, achievements, and contribution calendar
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

// ... existing long script (functions updateContributionCalendar, tooltip helpers, initGitHubStats, etc.) ... 