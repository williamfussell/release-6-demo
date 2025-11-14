# FlexiGenAI Release 6 - Scrollytelling Microsite

A sleek, cutting-edge scrollytelling microsite showcasing FlexiGenAI Release 6 with strong parallax effects and EY-styled visuals.

## Features

- **Parallax Scrolling**: Multiple layers of parallax effects for depth and immersion
- **EY-Styled Design**: Professional design with EY brand colors (yellow primary, dark backgrounds)
- **Smooth Animations**: Scroll-triggered fade-ins and counter animations
- **Responsive Design**: Fully responsive across all device sizes
- **Interactive Navigation**: Fixed navigation with active section highlighting
- **Performance Optimized**: Throttled scroll events and optimized animations

## Sections

1. **Overview** - Hero section with key metrics
2. **Product Quality** - Enterprise-grade reliability highlights
3. **Agentic AI** - Advanced agentic framework capabilities
4. **Ingestion & Tax Navigator** - Production-scale integration
5. **UI/UX** - FlexiGen 1.1 and 2.0 design vision
6. **Admin** - Enterprise governance, multi-tenancy, and license management

## Usage

### Option 1: Quick Start (Recommended)
1. **macOS/Linux**: Double-click `start-server.sh` or run `./start-server.sh` in terminal
2. **Windows**: Double-click `start-server.bat`
3. The site will open automatically in your browser at `http://localhost:8000`

### Option 2: Manual Server
Run a local web server from this directory:
```bash
python3 -m http.server 8000
# or
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 3: Direct File Open
Simply open `index.html` in a modern web browser. Note: Some features may be limited when opening directly from the file system.

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## File Structure

```
flexigen-release6/
├── index.html          # Main HTML structure
├── quality.html        # Product Quality page
├── agentic.html        # Agentic AI page
├── ingestion.html      # Ingestion & Tax Navigator page
├── uiux.html           # UI/UX page
├── admin.html          # Admin page
├── styles.css          # EY-styled design system and animations
├── script.js           # Parallax and scroll effects
├── ey-logo.png         # EY logo
├── start-server.sh     # Server startup script (macOS/Linux)
├── start-server.bat    # Server startup script (Windows)
└── README.md           # This file
```

## Sharing

To share this site with others:

1. **Zip the entire folder** (including all HTML, CSS, JS, and image files)
2. **Send the zip file** to the recipient
3. **Recipient instructions**: Unzip the folder and run `start-server.sh` (macOS/Linux) or `start-server.bat` (Windows), or use Option 2 above

**Note**: The recipient needs Python installed to run the local server. Python comes pre-installed on macOS and most Linux distributions. For Windows, download from [python.org](https://www.python.org/downloads/).

## Design Notes

- **Color Scheme**: EY yellow (#FFE000) as primary, dark backgrounds (#0A0A0A, #212121)
- **Typography**: Inter font family for modern, professional look
- **Effects**: Parallax backgrounds, fade-in animations, counter animations
- **Layout**: Max-width container (1400px) with responsive grid systems
