#!/bin/bash
# Simple script to start a local web server
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR" || exit 1

echo "========================================"
echo "Starting FlexiGenAI Release 6 microsite..."
echo "========================================"
PORT=8765
echo ""
echo "Current directory: $(pwd)"
echo ""

# Verify we're in the right directory
if [ ! -f "index.html" ]; then
    echo "ERROR: index.html not found in current directory!"
    echo "Please run this script from the project folder."
    echo ""
    exit 1
fi

# Check for Python
echo "Checking for Python..."
if command -v python3 &> /dev/null; then
    PYTHON_CMD=python3
    echo "Found: python3"
elif command -v python &> /dev/null; then
    PYTHON_CMD=python
    echo "Found: python"
else
    echo ""
    echo "ERROR: Python not found!"
    echo "Please install Python from https://www.python.org/"
    echo ""
    exit 1
fi

echo ""
echo "========================================"
echo "Using: $PYTHON_CMD"
echo "Port: $PORT"
echo "URL: http://localhost:$PORT"
echo "========================================"
echo ""
echo "Opening browser in 2 seconds..."
echo "Press Ctrl+C to stop the server"
echo ""

# Try to open browser automatically (works on macOS)
sleep 2
open "http://localhost:$PORT" 2>/dev/null &

echo "Starting server..."
echo ""

# Start Python server
$PYTHON_CMD -m http.server $PORT

