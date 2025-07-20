# Repositories Section

This section replaces the old portfolio section with a dynamic GitHub repositories showcase that displays your GitHub statistics, achievements, and featured repositories.

## Features

- **GitHub Statistics**: Shows total stars, commits, PRs, issues, and contributed repositories
- **Grade System**: Calculates a grade (A+, A, B+, B, C+, C, D) based on your GitHub activity
- **Achievement Badges**: Displays various achievement badges based on your GitHub profile
- **Contribution Calendar**: Visual GitHub-style contribution graph showing your activity throughout the year
- **Featured Repositories**: Shows your top repositories sorted by stars
- **Real-time Data**: Fetches data directly from GitHub API

## Setup

### 1. Ensure GitHub Username is Configured

Make sure your GitHub username is set in `_config.yml`:

```yaml
author:
  github: "your-github-username"
```

### 2. Update GitHub Statistics

To update your GitHub statistics, run:

```bash
./scripts/update_github_stats.sh
```

This script will:
- Fetch your GitHub data using the GitHub API
- Calculate statistics and achievements
- Generate a JSON file with all the data
- Display a summary of the results

### 3. Optional: GitHub Token for Better Data

For more accurate data (especially commit counts and contribution history), you can set up a GitHub personal access token:

1. Go to GitHub Settings → Developer settings → Personal access tokens
2. Generate a new token with `public_repo` scope
3. Set it as an environment variable:

```bash
export GITHUB_TOKEN="your-token-here"
```

Then run the update script again.

**Note**: Without a GitHub token, the contribution calendar will show estimated data based on a realistic activity pattern.

## How It Works

### Data Flow

1. **Python Script** (`scripts/github_stats.py`):
   - Fetches data from GitHub API
   - Calculates statistics and achievements
   - Generates contribution calendar data
   - Generates `assets/data/github_stats.json`

2. **Web Page** (`_pages/repositories.html`):
   - Loads data from the JSON file in `assets/data/`
   - Displays statistics, achievements, and repositories
   - Updates dynamically when the JSON file changes

### Achievement System

The system calculates achievements based on:

- **MultiLanguage**: Number of programming languages used
- **Experience**: Total number of repositories
- **Repositories**: Repository creation activity
- **Stars**: Total stars earned across repositories
- **Commits**: Estimated commit activity
- **Followers**: Number of GitHub followers
- **Reviews**: Code review activity (requires GitHub token)

### Grade Calculation

Grades are calculated based on a scoring system:
- **A+**: Score ≥ 100
- **A**: Score ≥ 80
- **B+**: Score ≥ 60
- **B**: Score ≥ 40
- **C+**: Score ≥ 20
- **C**: Score ≥ 10
- **D**: Score < 10

Score = (Repositories × 2) + (Stars × 3)

## Customization

### Modifying Achievement Criteria

Edit the `calculate_achievements()` function in `scripts/github_stats.py` to adjust achievement thresholds and calculations.

### Styling

The styling is contained within the `_pages/repositories.html` file. You can modify the CSS to match your site's theme.

### Adding New Statistics

To add new statistics:

1. Update the Python script to calculate the new metric
2. Add it to the JSON output
3. Update the HTML to display it
4. Update the JavaScript to populate it

## Troubleshooting

### Common Issues

1. **"Could not find GitHub username"**: Ensure your GitHub username is correctly set in `_config.yml`

2. **"Failed to load GitHub statistics"**: Run the update script first to generate the JSON file

3. **Rate limiting**: GitHub API has rate limits. Using a GitHub token increases the limit.

4. **No repositories shown**: Check that your repositories are public and accessible

### Manual Update

If the automatic script fails, you can manually run:

```bash
python3 scripts/github_stats.py your-github-username
```

## Files

- `_pages/repositories.html`: Main repositories page
- `scripts/github_stats.py`: Python script to fetch GitHub data
- `scripts/update_github_stats.sh`: Shell script to update statistics
- `assets/data/github_stats.json`: Generated data file (auto-generated)
- `_data/navigation.yml`: Updated navigation (Portfolio → Repositories)

## Migration from Portfolio

The old portfolio section has been completely replaced:
- `_pages/portfolio.html` → `_pages/repositories.html`
- `_portfolio/` directory contents removed
- Navigation updated to show "Repositories" instead of "Portfolio"

All portfolio content should be moved to the `_projects/` directory if you want to keep it as project showcases. 