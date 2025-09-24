// Demo script for taking screenshots
// Copy and paste this into browser console for quick demo setup

// For Main Page (Seat Plan Checker)
function demoSeatPlan() {
    const rollInput = document.getElementById('rollInput');
    if (rollInput) {
        rollInput.value = '10009';
        rollInput.focus();
        // Automatically trigger search after a delay for screenshot timing
        setTimeout(() => {
            if (typeof findSeat === 'function') {
                findSeat();
            }
        }, 1000);
    }
}

// For Result Page
function demoResult() {
    const rollInput = document.getElementById('rollInput');
    if (rollInput) {
        rollInput.value = '10009';
        rollInput.focus();
        // Automatically trigger search after a delay for screenshot timing
        setTimeout(() => {
            if (typeof find_result === 'function') {
                find_result();
            }
        }, 1000);
    }
}

// Show success result
function showSuccessResult() {
    const rollInput = document.getElementById('rollInput');
    if (rollInput) {
        rollInput.value = '10009'; // Provisionally selected student
        setTimeout(() => {
            if (typeof find_result === 'function') {
                find_result();
            }
        }, 500);
    }
}

// Show waiting list result
function showWaitingResult() {
    const rollInput = document.getElementById('rollInput');
    if (rollInput) {
        rollInput.value = '10201'; // Waiting list student
        setTimeout(() => {
            if (typeof find_result === 'function') {
                find_result();
            }
        }, 500);
    }
}

// Add visual indicators for screenshot purposes
function highlightFeatures() {
    const style = document.createElement('style');
    style.textContent = `
        .demo-highlight {
            box-shadow: 0 0 20px #00ff00 !important;
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% { box-shadow: 0 0 20px #00ff00; }
            50% { box-shadow: 0 0 30px #00ff00; }
            100% { box-shadow: 0 0 20px #00ff00; }
        }
    `;
    document.head.appendChild(style);
}

console.log(`
🎯 Demo Functions Available:
- demoSeatPlan() - Setup seat plan demo
- demoResult() - Setup result demo  
- showSuccessResult() - Show success result
- showWaitingResult() - Show waiting list result
- highlightFeatures() - Add visual highlights

📸 Screenshot Tips:
1. Call demo functions
2. Wait for animations to complete
3. Capture at the right moment
4. Try different viewport sizes
`);