#!/bin/bash
# setup.sh - Prepares the environment and starts the application

echo "=== Starting setup process ==="

# 1. Create required folders if missing
echo "-> Ensuring required directories exist..."
mkdir -p logs
mkdir -p data

# 2. Initialize environment variables if needed
if [ ! -f .env ]; then
    echo "-> Creating default .env file..."
    echo "PORT=3000" > .env
    echo "NODE_ENV=development" >> .env
else
    echo "-> .env file already exists."
fi

# 3. Install all dependencies
echo "-> Installing Node.js dependencies..."
npm install

# 4. Start the project
echo "-> Setup complete! Starting the application..."
npm start
