// Function to append numbers or operators to the screen
function appendToScreen(value) {
    document.getElementById('result').value += value;
}

// Function to clear the calculator screen
function clearScreen() {
    document.getElementById('result').value = '';
}

// Function to delete the last character from the screen
function deleteLast() {
    let currentValue = document.getElementById('result').value;
    document.getElementById('result').value = currentValue.slice(0, -1);
}

// Function to perform the calculation
function calculate() {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (e) {
        alert('Invalid Input');
        clearScreen();
    }
}
