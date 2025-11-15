@echo off
cd /d "%~dp0"
REM Simple script to start a local web server on Windows
echo ========================================
echo Starting FlexiGenAI Release 6 microsite...
echo ========================================
set PORT=8765
echo.
echo Current directory: %CD%
echo.

REM Check for Python
echo Checking for Python...
where python >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    set PYTHON_CMD=python
    echo Found: python
    goto :start_server
)

where python3 >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    set PYTHON_CMD=python3
    echo Found: python3
    goto :start_server
)

where py >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    set PYTHON_CMD=py
    echo Found: py
    goto :start_server
)

echo.
echo ERROR: Python not found!
echo Please install Python from https://www.python.org/
echo Or add Python to your system PATH.
echo.
pause
exit /b 1

:start_server
echo.
echo ========================================
echo Using: %PYTHON_CMD%
echo Port: %PORT%
echo URL: http://localhost:%PORT%
echo ========================================
echo.
echo Opening browser in 2 seconds...
echo Press Ctrl+C to stop the server
echo.

REM Try to open browser automatically
timeout /t 2 >nul
start http://localhost:%PORT%

echo Starting server...
echo.

REM Start Python server
%PYTHON_CMD% -m http.server %PORT%

REM If we get here, the server stopped
echo.
echo ========================================
echo Server stopped.
echo ========================================
pause

