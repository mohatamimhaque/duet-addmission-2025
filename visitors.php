<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Visitor Counter</title>
  <style>
    body {
      background: #f9f9f9;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Arial, sans-serif;
    }
    #count {
      font-size: 5rem;
      font-weight: bold;
      color: #333;
    }
  </style>
</head>
<body>

<div id="count">0</div>

<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
  import { getDatabase, ref, onValue, runTransaction } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

  const firebaseConfig = {
    apiKey: "AIzaSyA2JVIU5pAz7X2XILLR2Pbi_MhbeKHnimY",
    authDomain: "seat-plan-40c62.firebaseapp.com",
    databaseURL: "https://seat-plan-40c62-default-rtdb.firebaseio.com",
    projectId: "seat-plan-40c62",
    storageBucket: "seat-plan-40c62.firebasestorage.app",
    messagingSenderId: "274242756368",
    appId: "1:274242756368:web:9ce231aa977202e63ccf95",
    measurementId: "G-GGEZDZQZLL"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const countRef = ref(db, "visitors");

  runTransaction(countRef, (current) => {
    return (current || 0) + 0;
  });

  onValue(countRef, (snapshot) => {
    document.getElementById("count").innerText = snapshot.val() || 0;
  });
</script>

</body>
</html>
