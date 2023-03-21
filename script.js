// Get the form and input elements
const form = document.querySelector('form');
const amountInput = document.getElementById('amount');

// Get the waste log element
const wasteLog = document.getElementById('waste-log');

// Initialize an empty array to store waste records
let wasteRecords = [];

// Function to add a waste record to the waste log
function addWasteRecord(record) {
    const li = document.createElement('li');
    li.textContent = `${record.amount} kg on ${record.date}`;
    wasteLog.appendChild(li);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();
    const amount = parseFloat(amountInput.value);
    const date = new Date().toLocaleString();
    const record = { amount, date };
    wasteRecords.push(record);
    addWasteRecord(record);
    amountInput.value = '';
}

// Add event listener to form submit button
form.addEventListener('submit', handleSubmit);
