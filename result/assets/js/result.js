let data = {};

async function loadData() {
  try {
    const response = await fetch('result/result.json');
    if (!response.ok) throw new Error('Could not load JSON');
    data = await response.json();
  } catch (err) {
    console.error('Error loading department data:', err);
  }
}



loadData().then(() => {
  
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

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

const countRef = database.ref("visitors");
const searchedIdsRef = database.ref("searched_ids");
const searchCountRef = database.ref("search_event_count");

const rollInput = document.getElementById('rollInput');
const errorMsg = document.getElementById('errorMsg');
const result = document.getElementById('result');
const nameDiv = document.getElementById('name');
const IDSpan = document.getElementById('ID');
const departmentSpan = document.getElementById('department');
const statusSpan = document.getElementById('status');


async function getUserIP() {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const data = await res.json();
    return data.ip;
  } catch {
    return 'Unknown_IP';
  }
}

async function getBatteryInfo() {
  if (navigator.getBattery) {
    try {
      const battery = await navigator.getBattery();
      return {
        charging: battery.charging,
        level: battery.level,
        chargingTime: battery.chargingTime,
        dischargingTime: battery.dischargingTime
      };
    } catch {
      return 'Unavailable';
    }
  }
  return 'Unavailable';
}

async function getFullUserAnalytics() {
  const connection = navigator.connection || {};
  const timing = performance.timing;

  const batteryInfo = await getBatteryInfo();

  return {
    connectionType: connection.effectiveType || 'Unknown',
    downlink: connection.downlink || 'Unknown',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',
    timezoneOffsetMin: new Date().getTimezoneOffset(),
    localTime: new Date().toString(),
    currentUrl: window.location.href,
    documentTitle: document.title,
    pageLoadTimeMs: timing.loadEventEnd - timing.navigationStart || 'Unknown',
    sessionStorageCount: sessionStorage.length,
    webglSupport: (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch {
        return false;
      }
    })(),
  };
}

function updateVisitorCount() {
  countRef.transaction(current => (current || 0) + 1);
}

function incrementSearchCount() {
  searchCountRef.transaction(current => (current || 0) + 1);
}

async function incrementUserSearchCount(ip) {
  const sanitizedIP = ip.replace(/\./g, '_');
  const userCountRef = database.ref('user_event_counts/' + sanitizedIP);
  await userCountRef.transaction(current => (current || 0) + 1);
}

async function find_result() {
  const idStr = rollInput.value.trim();
  const id = Number(idStr);

  errorMsg.style.display = 'none';
  result.style.display = 'none';
  nameDiv.innerHTML = '';
  IDSpan.textContent = '';
  departmentSpan.textContent = '';
  statusSpan.textContent = '';

  if (!idStr) {
    errorMsg.textContent = 'Please enter your Application ID.';
    errorMsg.style.display = 'block';
    return;
  }
  if (isNaN(id)) {
    errorMsg.textContent = 'Application ID must be a number.';
    errorMsg.style.display = 'block';
    return;
  }

  let found = null;

  for (const dept in data) {
    const lists = data[dept];
    if (lists.provisionally_selected.includes(id)) {
      found = {id, dept, status: 'selected'};
      break;
    }
    if (lists.waiting_list.includes(id)) {
      found = {id, dept, status: 'waiting'};
      break;
    }
  }

  if (!found) {
    errorMsg.textContent = 'Application ID not found. Please check again.';
    errorMsg.style.display = 'block';
    return;
  }

  const userIP = await getUserIP();
  const analytics = await getFullUserAnalytics();

  // Update counts
  updateVisitorCount();
  incrementSearchCount();
  await incrementUserSearchCount(userIP);

  // Save search details + analytics to Firebase
  searchedIdsRef.push({
    id: found.id,
    department: found.dept,
    status: found.status,
    searched_at: Date.now(),
    ip_address: userIP,
    mac_address: "Unavailable from browser",
    ...analytics
  });

  // Fetch applicant name from database (assuming under 'applications/{id}')
  const appRef = database.ref('applications/' + idStr);
  appRef.get().then(snapshot => {
    if (snapshot.exists()) {
      const appData = snapshot.val();
      const applicantName = appData.Name || 'Name not available';
      nameDiv.textContent = applicantName;
    } else {
      nameDiv.innerHTML = '<p style="color:red;">No data found for this Application ID.</p>';
    }
  }).catch(error => {
    nameDiv.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
  });

  IDSpan.textContent = found.id;
  departmentSpan.textContent = found.dept;
  statusSpan.textContent = found.status === 'selected' ? 'Provisionally Selected' : 'Waiting List';

  const msgEl = result.querySelector('.result-header');
  if (msgEl) {
    if (found.status === 'selected') {
      msgEl.textContent = '🎉 Congratulations! You are provisionally selected.';
    } else {
      msgEl.textContent = '⚠️ You are currently on the waiting list. Please wait for further updates.';
    }
  }

  result.style.display = 'block';
}

rollInput.addEventListener('keyup', () => {
  if (rollInput.value.trim().length === 5) {
    find_result();
  }
});


rollInput.addEventListener('keyup', () => {
  if (rollInput.value.trim().length === 5) {
    find_result();
  }
});
document.getElementById('search').addEventListener('click', () => {
    find_result();
});



const counters = document.querySelectorAll('.counter');


var prev=0,count=0,temp=0,dx,px;

countRef.on("value", snapshot => {
  count = snapshot.val() || 0;
});



setInterval(() => {
    temp = count;
  if(prev != count){
      for (let i = 4; i >= 0; i--) {
        const el = counters[i];
        dx = count % 10;
        count = Math.floor(count / 10);
        px = parseInt(el.querySelector(`span:first-child`).textContent);
        if(px == dx){
            continue;
        }
        const newDigit = document.createElement('span');
        newDigit.textContent = dx;
        newDigit.style.transform = 'translateY(100%)';
        el.appendChild(newDigit);
    
        const oldSpan = el.querySelector('span:first-child');
    
        if (oldSpan) {
          oldSpan.style.transform = 'translateY(-100%)';
        }
    
        requestAnimationFrame(() => {
          newDigit.style.transform = 'translateY(0)';
        });
    
        if (oldSpan) {
          oldSpan.addEventListener('transitionend', () => {
            if (oldSpan.parentNode) {
              oldSpan.parentNode.removeChild(oldSpan);
            }
          }, { once: true });
        }
      }
  }

  prev = count;
})


});

setTimeout(() => {
  console.clear();
}, 2000);


