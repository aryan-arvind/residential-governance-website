#!/bin/bash
# docker-run.sh - Builds and runs the Docker container

echo "=== Docker Build & Run ==="

echo "-> Building Docker image 'residential-governance'..."
docker build -t residential-governance .

echo "-> Stopping any existing container named 'residential-app'..."
docker rm -f residential-app 2>/dev/null || true

echo "-> Running the container on port 3000..."
docker run -d -p 3000:3000 --name residential-app residential-governance

echo "-> Container is running!"
echo "-> You can view the app at http://localhost:3000"
echo "-> Use ./logs.sh to view the application logs."
