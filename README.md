# 🎓 DUET Admission Test 2025 - Seat Plan & Result Checker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

> A beautiful, modern web application for checking DUET (Dhaka University of Engineering & Technology) admission test seat plans and results with stunning glass morphism design.

## 📸 Screenshots

### 🏠 Main Seat Plan Checker
*[Screenshot: Show the main page with glass morphism design, search input, and animated counter]*

### 📊 Result Checker Interface  
*[Screenshot: Show the result page with the search functionality and result display]*

### 🎯 Search Results Display
*[Screenshot: Show an example of search results with the beautiful card design]*

### 📱 Mobile Responsive Design
*[Screenshot: Show mobile view of the application]*

## ✨ Features

### 🎨 **Modern Glass Morphism UI**
- Stunning translucent glass effects with backdrop blur
- Animated gradient backgrounds with floating particles
- Smooth transitions and micro-interactions
- Professional glassmorphism aesthetic

### 🔍 **Dual Functionality**
- **Seat Plan Checker**: Find your examination seat details
- **Result Checker**: Check admission test results by ID
- Interactive map integration for building locations
- Real-time search with instant results

### 🚀 **Performance & Features**
- **Zero Dependencies**: Pure vanilla JavaScript implementation
- **Offline Capable**: Works without internet after initial load
- **Lightning Fast**: No external API calls or databases
- **Privacy First**: All data processed locally
- **Mobile Optimized**: Fully responsive design

### 🎭 **Visual Effects**
- Animated visitor counter with flip effects
- Floating star particles and ambient lighting
- Shimmer effects and magical borders
- Smooth hover animations and transformations

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS with advanced glassmorphism effects
- **Data**: Static JSON files for fast local processing
- **Maps**: Leaflet.js integration for location display
- **Storage**: LocalStorage for visitor counting
- **Icons**: Unicode emojis and custom CSS animations

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/duet-admission-2025.git
   cd duet-admission-2025
   ```

2. **Option A: Open directly in browser**
   - Simply open `index.html` in your web browser

3. **Option B: Use local server (recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```

4. **Access the application**
   - Main app: `http://localhost:8000`
   - Result checker: `http://localhost:8000/result/`

## 📁 Project Structure

```
duet-admission-2025/
├── 📄 index.html              # Main seat plan checker
├── 📁 assets/
│   ├── 🎨 css/
│   │   └── style.css          # Glass morphism styles
│   └── 📜 js/
│       └── script.js          # Main application logic
├── 📁 result/
│   ├── 📄 index.html          # Result checker page
│   ├── 📊 result.json         # Student data
│   └── 📁 assets/
│       └── 📜 js/
│           └── result.js      # Result checker logic
├── 📁 img/                    # Image assets
├── 📄 README.md               # Project documentation
└── 📄 FIREBASE_REMOVAL_SUMMARY.md
```

## 🎯 Usage

### Seat Plan Checker
1. Visit the main page
2. Enter your roll number (e.g., 10001)
3. Click "Search" or press Enter
4. View your seat details with interactive map

### Result Checker
1. Navigate to `/result/` page
2. Enter your application ID
3. Get instant results showing:
   - Department assigned
   - Selection status (Selected/Waiting List)
   - Application details

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

### Result Data (result.json)
```json
{
  "Civil Engineering": {
    "provisionally_selected": [10009, 10011, ...],
    "waiting_list": [10201, 10166, ...]
  }
}
```

## 🌟 Key Highlights

- ✅ **No Backend Required**: Pure frontend application
- ✅ **No Database**: Fast JSON-based data processing  
- ✅ **Privacy Focused**: No external tracking or data collection
- ✅ **Mobile First**: Responsive design for all devices
- ✅ **Accessible**: Keyboard navigation and screen reader friendly
- ✅ **Fast Loading**: Optimized assets and minimal dependencies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **DUET**: Dhaka University of Engineering & Technology for the inspiration
- **Glassmorphism**: Modern UI design trend for the aesthetic inspiration
- **Leaflet.js**: For the interactive map functionality
- **Open Source Community**: For the tools and libraries used

## 📞 Contact

**Mohatamim Haque**
- 📧 Email: [your-email@example.com]
- 🌐 Facebook: [facebook.com/mohatamim44](https://facebook.com/mohatamim44)
- 💼 LinkedIn: [Your LinkedIn Profile]

---

<div align="center">

### ⭐ If you found this project helpful, please give it a star! ⭐

**Made with ❤️ for DUET students**

</div>