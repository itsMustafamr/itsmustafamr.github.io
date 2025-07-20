#!/bin/bash

# Update GitHub Statistics Script
# This script fetches the latest GitHub statistics and updates the JSON file

# Get the GitHub username from _config.yml
GITHUB_USERNAME=$(grep "^  github" _config.yml | sed 's/.*github.*: *"\([^"]*\)".*/\1/')

if [ -z "$GITHUB_USERNAME" ]; then
    echo "Error: Could not find GitHub username in _config.yml"
    echo "Please make sure you have set the github field in the author section"
    exit 1
fi

echo "Updating GitHub statistics for user: $GITHUB_USERNAME"

# Check if Python script exists
if [ ! -f "scripts/github_stats.py" ]; then
    echo "Error: scripts/github_stats.py not found"
    exit 1
fi

# Install required Python packages if not already installed
if ! python3 -c "import requests" 2>/dev/null; then
    echo "Installing required Python packages..."
    pip3 install requests
fi

# Run the Python script
python3 scripts/github_stats.py "$GITHUB_USERNAME"

if [ $? -eq 0 ]; then
    echo "GitHub statistics updated successfully!"
    echo "You can now build your site to see the updated statistics."
else
    echo "Error: Failed to update GitHub statistics"
    exit 1
fi 