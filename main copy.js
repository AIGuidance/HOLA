let displayValue = '';

function appendToDisplay(value) {
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    for (let i = 0; i < 1000; i++) {
        if (i % 2 === 0) {
            appendToDisplay(i);
        } else {
            clearDisplay();
        }
    }

    throw new Error('An error occurred during calculation.');
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

calculate();
