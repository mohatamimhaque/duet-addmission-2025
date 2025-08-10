# DUET Admission Test Seat Plan 2025

A responsive web application designed to assist students in quickly locating their seat allocation for the **DUET Admission Test 2025** by entering their roll number.

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Setup & Deployment](#setup--deployment)  
- [Screenshots](#screenshots)  
- [Future Improvements](#future-improvements)  
- [Contact](#contact)  

---

## Project Overview

The Seat Plan web app offers a user-friendly interface to help DUET admission candidates view their exam seating details effortlessly. It incorporates Google Analytics for visitor tracking, Firebase Realtime Database for backend data management, and is hosted via GitHub Pages and Vercel for custom domains.

---

## Tech Stack

| Technology              | Usage                                |
|------------------------|-------------------------------------|
| HTML, CSS, JavaScript  | Frontend development                 |
| Google Analytics       | Visitor analytics and engagement    |
| Firebase Realtime DB   | Real-time database for dynamic data |
| GitHub Pages           | Static site hosting                  |
| Vercel                 | Deployment and custom domain hosting|

---

## Features

- **Roll Number Lookup:** Instant seat plan retrieval by roll number  
- **Responsive Design:** Mobile and desktop friendly  
- **Real-Time Visitor Analytics:** Integrated via Google Analytics  
- **Dynamic Data Management:** Powered by Firebase Realtime Database  
- **Easy Hosting & Deployment:** Using GitHub Pages and Vercel


## Project Structure
```
seat-plan/
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── duet_admission_test_seat_plan_2025.pdf
├── img/
│   ├── meta_data.jpg
│   ├── oab.jpg
│   ├── ssniab.jpeg
│   ├── Screenshot 2025-08-10 154209.png
│   └── twb.jpg
├── IMG_5376.PNG
└── index.html
```


---

## Setup & Deployment

```bash
git clone https://github.com/mohatamimhaque/seat-plan.git
cd seat-plan
```
### Google Analytics Integration
  1. Create a Google Analytics property.
  2. Add your tracking ID (G-XXXXXXXXXX) in index.html:
```
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Firebase Setup
  1. Create a project at Firebase Console.
  2. Enable Realtime Database.
  3. Add Firebase SDK in index.html:
```
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
</script>
```

### Hosting with GitHub Pages
```
    1. Go to your repo’s Settings > Pages.
    2. Select the branch main and root directory.
    3. Access your site at: https://user-name.github.io/seat-plan/
```
### Vercel Deployment & Custom Domain
```
   1. Import the GitHub repo into Vercel.
   2. Deploy the site.
   3. Add a custom domain (e.g., seatplan.vercel.app) in Vercel dashboard.
```

## Screenshots
![Home Screen](img/Screenshot%202025-08-10%20154209.png)


## Future Improvements
```
    1. Add user authentication via Firebase Authentication
    2. Enhance UI with advanced search and filtering options
    3. Develop a mobile application counterpart
```

## Contact
```
Mohatamim Haque
GitHub: https://www.facebook.com/mohatamim44
Email: mohatamimhaque@outlook.com
```
