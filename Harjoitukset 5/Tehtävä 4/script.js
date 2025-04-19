// Create an array to hold products
let products = [];

// Create a set to hold unique categories
let categories = new Set();

// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        products = await response.json();
        
        // Extract unique categories
        products.forEach(product => categories.add(product.category));
        
        // Populate category filter
        populateCategoryFilter();
        
        // Display all products initially
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    };
};

// Populate category dropdown
function populateCategoryFilter() {
    const select = document.getElementById('categoryFilter');
    categories.forEach(category => {
        select.innerHTML += `<option value="${category}">${category}</option>`;
    });
};

// Filter products based on selected category
function filterProducts() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredProducts = selectedCategory === 'all' 
        ? products 
        : products.filter(product => product.category === selectedCategory);
    
    displayProducts(filteredProducts);
};

// Display products in the grid
function displayProducts(productsToShow) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        productsContainer.appendChild(productCard);
    });
};

// Create a product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <p>${product.description.slice(0, 100)}...</p>
        <p>${product.rating.rate} rates / ${product.rating.count} reviews</p>
    `;

    return card;
};

// Initialize the page
fetchProducts();