#!/bin/bash
# logs.sh - Prints recent Docker logs

echo "=== Fetching Application Logs ==="

# Check if the container is running
if docker ps -a | grep -q residential-app; then
    echo "-> Tailing the last 50 lines of logs for 'residential-app' (Press Ctrl+C to exit)..."
    docker logs --tail 50 -f residential-app
else
    echo "-> Error: Container 'residential-app' is not running."
    echo "-> Please run ./docker-run.sh first."
fi
