#!/bin/bash
# Simple script to start a local web server
echo "Starting FlexiGenAI Release 6 microsite..."
PORT=8765
echo "Opening browser at http://localhost:$PORT"
echo "Press Ctrl+C to stop the server"
echo ""

# Try to open browser automatically (works on macOS)
sleep 1 && open http://localhost:$PORT 2>/dev/null &

# Start Python server
python3 -m http.server $PORT

