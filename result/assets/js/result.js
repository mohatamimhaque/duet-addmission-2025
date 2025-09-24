let data = {};

async function loadData() {
  try {
    const response = await fetch('result.json');
    if (!response.ok) throw new Error('Could not load JSON');
    data = await response.json();
  } catch (err) {
    console.error('Error loading department data:', err);
  }
}



loadData().then(() => {
  console.log('Data loaded successfully');
  // Initialize visitor counter from localStorage
  let visitorCount = parseInt(localStorage.getItem('visitorCount') || '0');
  updateVisitorDisplay(visitorCount);

const rollInput = document.getElementById('rollInput');
const errorMsg = document.getElementById('errorMsg');
const result = document.getElementById('result');
const nameDiv = document.getElementById('name');
const IDSpan = document.getElementById('ID');
const departmentSpan = document.getElementById('department');
const statusSpan = document.getElementById('status');


// Simple result finder using JSON data

function updateVisitorCount() {
  let count = parseInt(localStorage.getItem('visitorCount') || '0');
  count++;
  localStorage.setItem('visitorCount', count.toString());
  updateVisitorDisplay(count);
}

function updateVisitorDisplay(count) {
  const counters = document.querySelectorAll('.counter');
  const countStr = count.toString().padStart(5, '0');
  
  counters.forEach((counter, index) => {
    const digit = countStr[index];
    const span = counter.querySelector('span');
    if (span && span.textContent !== digit) {
      // Add animation class
      counter.classList.add('animate');
      span.textContent = digit;
      
      // Remove animation class after animation completes
      setTimeout(() => {
        counter.classList.remove('animate');
      }, 800);
    }
  });
}

function incrementSearchCount() {
  let count = parseInt(localStorage.getItem('searchCount') || '0');
  count++;
  localStorage.setItem('searchCount', count.toString());
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

  // Update counts using localStorage
  updateVisitorCount();
  incrementSearchCount();

  // Set applicant information
  nameDiv.innerHTML = `<span style="color: #667eea; font-weight: bold;">Applicant ID: ${found.id}</span>`;

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



// Initialize counter display on page load
document.addEventListener('DOMContentLoaded', () => {
  const visitorCount = parseInt(localStorage.getItem('visitorCount') || '1000');
  updateVisitorDisplay(visitorCount);
});


});

setTimeout(() => {
  console.clear();
}, 2000);
