@echo off
REM Simple script to start a local web server on Windows
echo Starting FlexiGenAI Release 6 microsite...
echo Opening browser at http://localhost:8000
echo Press Ctrl+C to stop the server
echo.

REM Try to open browser automatically
timeout /t 1 >nul
start http://localhost:8000

REM Start Python server
python -m http.server 8000

