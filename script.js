// Cargar productos
function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    
    // Simulación de datos de productos
    const products = [
        { id: 1, name: 'Vestido Elegante', price: 89.99, image: 'vestido.jpeg' },
        { id: 2, name: 'Zapatos de Tacón', price: 59.99, image: 'zapato.jpeg' },
        { id: 3, name: 'Bolso de Cuero', price: 79.99, image: 'bolso.jpg' },
        { id: 4, name: 'Collar de Perlas', price: 49.99, image: 'Collar.jpg' },
    ];

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <a href="product.html?id=${product.id}" class="btn-primary">Ver Detalles</a>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}

// Manejar la búsqueda de productos
document.getElementById('search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value;
    // Aquí iría la lógica para buscar productos
    console.log('Buscando:', searchTerm);
});

// Manejar el envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado');
    this.reset();
    alert('Gracias por tu mensaje. Te contactaremos pronto.');
});

// Cargar productos al iniciar la página
window.addEventListener('load', loadProducts);