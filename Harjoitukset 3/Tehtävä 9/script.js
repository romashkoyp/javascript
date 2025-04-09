// Create Elevator class
class Elevator {
  constructor(currentFloor) {
    this.currentFloor = currentFloor;
  };

  // Validate input for the floor
  set currentFloor(value) {
    const floor = Number(value);
    
    // If floor is not valid, return
    if (!isValidFloor(floor)) {
      return;
    }

    this._currentFloor = floor;
  };

  // Get current floor
  get currentFloor() {
    return this._currentFloor;
  }

  // Function to show moving message
  moving() {
      return `<p>The elevator is moving to floor ${this.currentFloor}...</p>`;
  };

  // Function to show on place message
  onPlace() {
    return `<p>The elevator is on the floor ${this.currentFloor}</p>`;
  };

};

// Function to validate floor
function isValidFloor(floor) {
  const floorNum = Number(floor);
  return !isNaN(floorNum) && floorNum > 0 && floorNum < 100;
}

// For default elevator is on the first floor
document.getElementById('message').innerHTML = new Elevator(1).onPlace();

// Function to add value to the display when user presses buttons
const addValue = (value) => {document.getElementById('display').value += value};

// Function to clear display
const clearDisplay = () => {document.getElementById('display').value = ''};

// Function to show message
const showMessage = (message) => {document.getElementById('display').value = message};

// Start process when button Go is pressed
const result = (currentFloor) => {

  // Verify input as non-empty number
  if (currentFloor === '') {
    showMessage('Please enter a number');
    setTimeout(() => {clearDisplay()}, 3000);
    return;
  }

  // Verify input as valid floor
  if (!isValidFloor(currentFloor)) {
    showMessage('Wrong floor');
    setTimeout(() => {clearDisplay()}, 3000);
    return;
  }

  // Clear display after pressing Go
  clearDisplay();

  // Disable buttons and display while elevator is moving
  document.getElementById('display').disabled = true;
  const keyButtons = document.querySelectorAll('.key');
  keyButtons.forEach(button => button.disabled = true);

  // Create elevator object and show moving message
  document.getElementById('message').innerHTML = new Elevator(currentFloor).moving();

  // Show on place message after 3 seconds and activate buttons
  setTimeout(() => {
    document.getElementById('message').innerHTML = new Elevator(currentFloor).onPlace();
    document.getElementById('display').disabled = false;
    keyButtons.forEach(button => button.disabled = false);
  }, 3000);
};



