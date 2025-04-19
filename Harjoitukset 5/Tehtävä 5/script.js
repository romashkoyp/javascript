// Create empty arrays to hold names and filtered names
let names = [];
let counter = -1;
let currentFilteredNames = [];

// Fetch names from JSON
function getNames() {
  return fetch('names.json').then(response => response.json());
}

// Render names
async function renderNames() {
  names = await getNames();
}
renderNames();

// Arrow down key listener
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' && currentFilteredNames.length > 0) {
    // Reset previous selection if exists
    if (counter >= 0) {
      const prevElement = document.getElementById(counter);
      if (prevElement) {
        prevElement.style.backgroundColor = '';
        prevElement.style.fontWeight = '';
      };
    };
    
    // Limit counter to array length
    if (counter === currentFilteredNames.length - 1) {
      counter = -1;
    };

    counter++;

    // Highlight selected name
    const element = document.getElementById(counter);
    if (element) {
      element.style.backgroundColor = 'yellow';
      element.style.fontWeight = 'bold';
    };
  };
});

// Arrow up key listener
document.addEventListener('keyup', (event) => {
  if (event.key === 'ArrowUp' && currentFilteredNames.length > 0) {
    // Reset previous selection if exists
    if (counter >= 0) {
      const prevElement = document.getElementById(counter);
      if (prevElement) {
        prevElement.style.backgroundColor = '';
        prevElement.style.fontWeight = '';
      };
    };
    
    // Limit counter to array length
    if (counter === 0) {
      counter = currentFilteredNames.length;
    };

    counter--;

    // Highlight selected name
    const element = document.getElementById(counter);
    if (element) {
      element.style.backgroundColor = 'yellow';
      element.style.fontWeight = 'bold';
    };
  };
});

// Escape key listener
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    // Reset input field and results
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
    currentFilteredNames = [];
  };
});

// Input event listener
document.getElementById('searchInput').addEventListener('input', (event) => {
  counter = -1;  // Reset counter on new search
  // If input field is empty, clear results and reset counter
  if (event.target.value === '') {
    counter = -1;
    document.getElementById('results').innerHTML = '';
    currentFilteredNames = [];
    return;
  }

  // Filter names based on input
  const searchValue = event.target.value.toLowerCase();
  currentFilteredNames = names.filter(name => name.toLowerCase().startsWith(searchValue));
  const result = document.getElementById('results');
  result.innerHTML = '';
  
  // Render filtered names
  for (let i = 0; i < currentFilteredNames.length; i++) {
    const name = document.createElement("div");
    name.id = i;
    name.innerHTML = currentFilteredNames[i];
    result.appendChild(name);
  };
});

// Enter key listener
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && currentFilteredNames.length > 0 && counter >= 0) {
    // Prevent form submission
    event.preventDefault();
    const selectedName = currentFilteredNames[counter];
    document.getElementById('searchInput').value = selectedName;
    document.getElementById('results').innerHTML = '';
    currentFilteredNames = [];
  };
});

