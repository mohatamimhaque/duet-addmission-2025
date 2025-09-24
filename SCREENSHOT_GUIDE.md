# 📸 Screenshot Guide for DUET Admission 2025

## Screenshots to Capture for README

### 1. **Main Page (Seat Plan Checker)**
- URL: `http://localhost:8000`
- **Features to highlight:**
  - Beautiful glass morphism header with DUET logo background
  - Translucent search container with animated floating stars
  - Animated visitor counter in bottom right
  - Note and warning sections with icons
  - Search input field with glass effect

### 2. **Seat Plan Search Results**
- URL: `http://localhost:8000`
- **Steps:**
  1. Enter roll number: `10009` (Civil Engineering student)
  2. Click Search or press Enter
  3. **Capture:** Result card showing seat details with map

### 3. **Result Checker Main Page**
- URL: `http://localhost:8000/result/`
- **Features to highlight:**
  - Similar glass morphism design
  - Application ID input field
  - Clean, modern interface

### 4. **Result Search Demo**
- URL: `http://localhost:8000/result/`
- **Steps:**
  1. Enter Application ID: `10009` (Provisionally Selected)
  2. **Capture:** Success result showing "Congratulations! You are provisionally selected"
  
  **Alternative:**
  1. Enter Application ID: `10201` (Waiting List)
  2. **Capture:** Waiting list result

### 5. **Mobile Responsive View**
- Use browser dev tools or actual mobile device
- **Show:** How the design adapts to smaller screens

### 6. **Interactive Elements**
- **Hover Effects:** Capture buttons and inputs during hover state
- **Animation States:** Counter animation in progress
- **Focus States:** Input fields when focused

## 📝 Screenshot Specifications

### Recommended Settings:
- **Resolution:** 1920x1080 (Full HD) for desktop views
- **Browser:** Chrome or Firefox for best rendering
- **Zoom Level:** 100% for accurate representation
- **Window Size:** Maximized for desktop, responsive for mobile

### File Naming Convention:
```
screenshots/
├── main-page-desktop.png
├── seat-search-results.png
├── result-checker-main.png
├── result-search-success.png
├── result-search-waiting.png
├── mobile-responsive.png
└── interactive-elements.png
```

## 🎯 Key Visual Elements to Capture

1. **Glass Morphism Effects**
   - Translucent containers with backdrop blur
   - Animated gradient backgrounds
   - Floating particles and decorative elements

2. **Interactive Features**
   - Search functionality in action
   - Result displays with beautiful cards
   - Map integration for seat locations

3. **Modern UI Elements**
   - Animated counters with flip effects
   - Hover states and transitions
   - Mobile-responsive layout

4. **Color Scheme & Branding**
   - Purple-blue gradient backgrounds
   - Professional color palette
   - Consistent visual hierarchy

## 📱 Mobile Screenshots

### Breakpoints to Test:
- **Mobile:** 375px width (iPhone SE)
- **Tablet:** 768px width (iPad)
- **Desktop:** 1200px+ width

## 🚀 Quick Demo Data

### For Seat Plan Testing:
```
Roll Numbers to try:
- 10009 (Civil Engineering - Selected)
- 10032 (Civil Engineering - Selected)
- 20024 (Electrical Engineering - Selected)
- 30007 (Mechanical Engineering - Selected)
```

### For Result Testing:
```
Application IDs to try:
- 10009 (Civil Engineering - Provisionally Selected)
- 10201 (Civil Engineering - Waiting List)
- 20024 (Electrical Engineering - Provisionally Selected)
- 90006 (Materials Engineering - Provisionally Selected)
```

---

**Note:** Make sure the local server is running (`python -m http.server 8000`) before taking screenshots!