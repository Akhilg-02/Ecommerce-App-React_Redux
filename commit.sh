#!/bin/bash
# chmod +x commit.sh
# ./commit.sh

# Add all changes to the staging area
git add --all

git status

# Commit changes with a specified message
git commit -m "login issue resolved and updated readme file"

# Push changes to the remote repository
git push origin main
