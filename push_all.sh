#!/bin/bash

# Array of branches to push
branches=("main" "production" )

# Loop through each branch and push to origin
for branch in "${branches[@]}"; do
  git push origin "$branch"
done
