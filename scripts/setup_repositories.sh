#!/bin/bash

# Setup Repositories Feature
# This script sets up the repositories feature for your Jekyll site

echo "Setting up Repositories feature..."

# Check if GitHub username is configured
GITHUB_USERNAME=$(grep "^  github" _config.yml | sed 's/.*github.*: *"\([^"]*\)".*/\1/')

if [ -z "$GITHUB_USERNAME" ]; then
    echo "❌ Error: GitHub username not found in _config.yml"
    echo "Please add your GitHub username to the author section:"
    echo "  github: \"your-github-username\""
    exit 1
fi

echo "✅ Found GitHub username: $GITHUB_USERNAME"

# Check if required files exist
if [ ! -f "scripts/github_stats.py" ]; then
    echo "❌ Error: scripts/github_stats.py not found"
    exit 1
fi

if [ ! -f "scripts/update_github_stats.sh" ]; then
    echo "❌ Error: scripts/update_github_stats.sh not found"
    exit 1
fi

if [ ! -f "_pages/repositories.html" ]; then
    echo "❌ Error: _pages/repositories.html not found"
    exit 1
fi

echo "✅ All required files found"

# Make scripts executable
chmod +x scripts/github_stats.py scripts/update_github_stats.sh

# Install Python dependencies
echo "Installing Python dependencies..."
if ! python3 -c "import requests" 2>/dev/null; then
    pip3 install requests
    echo "✅ Installed requests library"
else
    echo "✅ requests library already installed"
fi

# Generate initial GitHub statistics
echo "Generating initial GitHub statistics..."
./scripts/update_github_stats.sh

if [ $? -eq 0 ]; then
    echo "✅ Initial GitHub statistics generated"
else
    echo "❌ Failed to generate GitHub statistics"
    exit 1
fi

# Test Jekyll build
echo "Testing Jekyll build..."
bundle exec jekyll build --quiet

if [ $? -eq 0 ]; then
    echo "✅ Jekyll build successful"
else
    echo "❌ Jekyll build failed"
    exit 1
fi

echo ""
echo "🎉 Repositories feature setup complete!"
echo ""
echo "Your repositories page is now available at: /repositories/"
echo ""
echo "To update GitHub statistics in the future, run:"
echo "  ./scripts/update_github_stats.sh"
echo ""
echo "For more information, see: REPOSITORIES_README.md" 