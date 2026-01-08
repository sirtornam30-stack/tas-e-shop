const products = [
    {id: 1, name: "T-shirt", price: 20.99,image:"image1.jpg"},
    {id: 2, name: "Mug", price: 15.90,image:"image2.jpg"},
    {id: 3, name: "Notebook", price: 10.29,image:"image3.jpg"},
    {id: 4, name: "Wig", price: 200.99,image:"image4.jpg"},
    {id: 5, name: "Pandora necklace", price: 1000.00,image:"image5.jpg"},
    {id: 6, name: "leather boots", price: 120.00,image:"image6.jpg"},
    {id: 7, name: "Sweet goodies", price: 10.19,image:"image7.jpg"},
    {id: 8, name: "Hoodie", price: 16.50,image:"image8.jpg"},
    {id: 9, name: "black heel", price: 50.00,image:"image9.jpg"},
    {id: 10, name: "YSL heel", price: 80.29,image:"image10.jpg"},
    {id: 11, name: "Phone cases", price: 15.20,image:"image11.jpg"},
    {id: 7, name: "Teddy bear", price: 30.59,image:"image12.jpg"},
]; //array to hold product data
const cart = [] //array to hold cart items

function renderProducts() {
 const productcontainer = document.getElementById("products");
 productcontainer.innerHTML = '';
 products.forEach(product => {
    const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image"/>
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}</p>
            <button class="add-to-cart-button" data-id="${product.id}">Add to Cart</button>
        `;
        productcontainer.appendChild(productCard);    
    });
}
renderProducts() ;
