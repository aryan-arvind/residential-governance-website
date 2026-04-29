#!/bin/bash
# test.sh - Runs validation checks

echo "=== Running tests ==="

# Check if npm test is defined and run it, otherwise run standard checks
if grep -q '"test"' package.json; then
    npm test
else
    echo "-> Warning: No custom test script found in package.json."
    echo "-> Running standard syntax checks instead..."
    # Basic validation: ensure the main file parses correctly without running it
    node --check server.js || node --check app.js || echo "Validation failed."
fi

echo "-> Validation checks completed."
