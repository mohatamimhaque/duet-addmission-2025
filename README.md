# 🎓 DUET Admission Test 2025 - Seat Plan & Result Checker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat&logo=leaflet&logoColor=white)](https://leafletjs.com/)

> A beautiful, modern web application for checking DUET (Dhaka University of Engineering & Technology) admission test seat plans and results with stunning glass morphism design. Built with pure HTML, CSS, and JavaScript - no backend required!

## 📸 Screenshots

### 🏠 Main Seat Plan Checker
![Main Interface](screenshots/main-interface.png)
*Modern glass morphism design with animated backgrounds, search functionality, and beautiful gradient effects*

### 📊 Result Checker Interface  
![Result Checker](screenshots/result-checker.png)
*Clean and intuitive admission result checking interface with professional styling*

### � Search Results & Features
![Search Results](screenshots/search-results.png)
*Comprehensive result display with detailed information and smooth user experience*

## ✨ Features

### 🎨 **Modern Glass Morphism UI**
- ✅ Stunning translucent glass effects with backdrop blur
- ✅ Animated gradient backgrounds with floating particles
- ✅ Smooth transitions and micro-interactions
- ✅ Professional glassmorphism aesthetic with magical borders

### 🔍 **Dual Functionality**
- ✅ **Seat Plan Checker**: Find your examination seat details by roll number
- ✅ **Result Checker**: Check admission test results by application ID
- ✅ Interactive map integration showing exact building locations
- ✅ Real-time search with instant results and loading animations

### 🚀 **Performance & Architecture**
- ✅ **Zero Backend**: Pure vanilla JavaScript implementation
- ✅ **No Database**: Fast JSON-based data processing
- ✅ **Offline Capable**: Works without internet after initial load
- ✅ **Lightning Fast**: No external API calls or server dependencies
- ✅ **Privacy First**: All data processed locally, no tracking

### 🎭 **Visual Effects & Animations**
- ✅ Animated visitor counter with smooth digit flip effects
- ✅ Floating star particles and ambient lighting effects
- ✅ Shimmer effects and glowing borders
- ✅ Smooth hover animations and 3D transformations
- ✅ Loading states with beautiful transitions

### 📱 **Responsive & Accessible**
- ✅ Mobile-optimized responsive design
- ✅ Keyboard navigation support
- ✅ Touch-friendly interface
- ✅ Cross-browser compatibility

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Custom CSS with advanced glassmorphism effects
- **Maps**: Leaflet.js for interactive building location display
- **Data**: Static JSON files for fast local processing
- **Storage**: LocalStorage for visitor counting
- **Icons**: Unicode emojis and custom CSS animations
- **Fonts**: Google Fonts (Oswald, Inter, DS-Digital)

## 🚀 Quick Start Guide

### 📋 Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for map tiles and fonts)
- Local web server (recommended for full functionality)

### � Local Setup

#### Method 1: Clone & Run
```bash
# Clone the repository
git clone https://github.com/mohatamimhaque/duet-admission-2025.git
cd duet-admission-2025

# Start a local server (choose one):
python -m http.server 8000        # Python 3
python -m SimpleHTTPServer 8000   # Python 2
npx http-server                    # Node.js
php -S localhost:8000             # PHP

# Open your browser
http://localhost:8000
```

#### Method 2: Direct File Access
```bash
# Simply open index.html in your browser
# Double-click index.html OR right-click → Open with → Browser
```

### 🌐 Online Deployment

#### Deploy to Render (Free)
1. Fork this repository to your GitHub account
2. Go to [render.com](https://render.com) and sign up
3. Create a **New Static Site**
4. Connect your GitHub repository
5. Configure:
   - **Build Command**: Leave empty
   - **Publish Directory**: `.` (root)
6. Click **Deploy**
7. Your site will be live at: `https://your-app-name.onrender.com`

#### Deploy to Netlify (Free)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder OR connect GitHub
3. Site will deploy automatically
4. Get your live URL: `https://your-site-name.netlify.app`

#### Deploy to Vercel (Free)
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts
4. Get your live URL: `https://your-project.vercel.app`

#### Deploy to GitHub Pages (Free)
1. Push code to GitHub repository
2. Go to repository **Settings** → **Pages**
3. Select **Source**: Deploy from branch `main`
4. Your site: `https://username.github.io/repository-name`

### 🌐 Access Your Application
- **Main Seat Plan Checker**: `http://localhost:8000/` (or your deployed URL)
- **Result Checker**: `http://localhost:8000/result/`
- **Official PDF**: Available through the app interface

## 📁 Project Structure

```
duet-admission-2025/
├── 📄 index.html                     # Main seat plan checker
├── 📁 assets/
│   ├── 🎨 css/
│   │   └── style.css                 # Glass morphism styles & animations
│   └── 📜 js/
│       └── script.js                 # Main application logic
├── 📁 result/
│   ├── 📄 index.html                 # Result checker page
│   ├── 📊 result.json                # Student result data
│   └── 📁 assets/
│       └── 📜 js/
│           └── result.js             # Result checker logic
├── 📁 img/                           # Image assets & building photos
│   ├── meta_data.jpg                 # Open Graph image
│   ├── oab.jpg                       # Old Academic Building
│   ├── ssniab.jpeg                   # SSNI Academic Building  
│   └── twb.jpg                       # Textile Workshop Building
├── 📁 screenshots/                   # Documentation screenshots
├── 📄 2025-08-09_1754710197_109.pdf  # Official seat plan PDF
├── 📄 README.md                      # This documentation
└── 📄 result.xlsx                    # Result data (Excel format)
```

## 🎯 How to Use

### 🪑 Seat Plan Checker
1. **Open** the main page (`index.html`)
2. **Enter** your roll number (e.g., 10001) 
3. **Click** "Search" or press Enter
4. **View** your seat details:
   - 📅 Examination date and time
   - 🏢 Building name and room number
   - 🗺️ Interactive map with building location
   - 📷 Building photos in map popup

### 📊 Result Checker  
1. **Navigate** to `/result/` page
2. **Enter** your application ID
3. **Get** instant results:
   - 🎯 Department assignment
   - ✅ Selection status (Selected/Waiting List)
   - 📋 Application details
2. Enter your application ID in the search field
3. Get instant results showing:
   - 🎯 Department assigned
   - ✅ Selection status (Selected/Waiting List)
   - 📋 Application details

### ⌨️ Keyboard Shortcuts
- **Enter**: Execute search
- **Backspace**: Clear search (reloads page when emptying input)
- **Tab**: Navigate through interactive elements

## 🎨 Design Features

### Glass Morphism Elements
- **Backdrop Blur**: `backdrop-filter: blur(20px)`
- **Transparency**: `rgba(255, 255, 255, 0.25)`
- **Border Glow**: Animated gradient borders
- **Shadow Depth**: Multi-layer shadow effects

### Animation Highlights
- **Counter Animation**: Smooth digit flip transitions
- **Particle System**: Floating decorative elements
- **Hover Effects**: 3D transformations and scaling
- **Loading States**: Elegant loading animations

## 📊 Data Structure

### Seat Plan Data (script.js)
```javascript
const seatData = {
  "1st_shift": {
    "time": "09:30 AM to 12:00 PM",
    "buildings": {
      "Old Academic Building (OAB)": {
        "departments": ["CE"],
        "seat_ranges": {
          "301": [10001, 10030]
          // ... more rooms
        }
      }
    }
  }
}
```

### Result Data Structure (result.json)
```json
{
  "Civil Engineering": {
    "provisionally_selected": [10009, 10011, 10012],
    "waiting_list": [10201, 10166, 10167]
  },
  "Mechanical Engineering": {
    "provisionally_selected": [20001, 20003],
    "waiting_list": [20055, 20089]
  }
}
```

### Building Coordinates (for maps)
```javascript
const buildingCoords = {
    "Old Academic Building (OAB)": [24.01799580179727, 90.4178142637178],
    "Shahid Syed Nazrul Islam Academic Building (SSNIAB)": [24.017184360247807, 90.4190504720577],
    "Textile Workshop Building (TWB)": [24.01674997397732, 90.41898429609469]
};
```

## � Technical Details

### Key Technologies
- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Advanced CSS with Glass Morphism effects
- **Maps**: Leaflet.js for interactive location display
- **Data**: Static JSON files for fast processing
- **Storage**: LocalStorage for visitor counting

### Features
- ✅ **Glass Morphism UI** - Modern translucent design
- ✅ **Interactive Maps** - Building locations with photos
- ✅ **Real-time Search** - Instant seat/result lookup
- ✅ **Mobile Responsive** - Works on all devices
- ✅ **No Backend Required** - Pure frontend application
- ✅ **Fast & Lightweight** - Optimized performance
```

```bash
# Build and run
docker build -t duet-admission .
docker run -p 8080:80 duet-admission
```

## 🛡️ Privacy & Security

- ✅ **No Data Collection**: No personal information is stored or transmitted
- ✅ **Local Processing**: All searches happen locally in your browser
- ✅ **No Analytics**: No Google Analytics or tracking scripts
- ✅ **HTTPS Ready**: Supports secure connections
- ✅ **Content Security Policy**: Headers configured for security

## 🌟 Key Highlights

- ✅ **Pure Frontend**: No backend server or database required
- ✅ **Fast Loading**: Optimized assets and minimal dependencies
- ✅ **Mobile First**: Responsive design for all screen sizes
- ✅ **Accessible**: ARIA labels and keyboard navigation
- ✅ **SEO Optimized**: Meta tags and semantic HTML
- ✅ **Cross-Browser**: Works on all modern browsers
- ✅ **Offline Capable**: Progressive Web App features

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
## 🤝 Contributing

Feel free to contribute to this project! Here's how:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

**Mohatamim Haque** - Developer  
- 🌐 Facebook: [facebook.com/mohatamim44](https://facebook.com/mohatamim44)
- 💼 GitHub: [@mohatamimhaque](https://github.com/mohatamimhaque)
- � Email: Contact via GitHub Issues

## � License

This project is licensed under the MIT License. Feel free to use, modify, and distribute.

---

<div align="center">

### ⭐ If this project helped you, please give it a star! ⭐

**Made with ❤️ for DUET Students**

*Version 1.0 | Last Updated: September 2025*

</div>