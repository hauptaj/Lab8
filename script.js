var total = 0;

var condiment = {
    name: "Chipotle Mayo",
    price: 3.89,
};

var protein = {
    name: "Spicy Chik'n Patty",
    price: 3.33,
};

var produce = {
    name: "Cilantro",
    price: 1.15,
};

var dessert = {
    name: "Dark Chocolate Bar",
    price: 2
};

var shoppingCart = [condiment, protein, produce, dessert];

var total = 0;

// create and style the main container in HTML
var receiptContainer = document.createElement('div');
receiptContainer.id = "receiptContainer";
document.body.appendChild(receiptContainer);

//function to list each item and price in array
shoppingCart.forEach(function(list) {
    total += list.price;

    //creates a row to place paragraphs in
    var row = document.createElement('div');
    row.className = "row";
    receiptContainer.appendChild(row);

    // create and style the item p in HTML
    var productName = document.createElement('div');
    productName.id = "productName";
    productName.className = "products";
    row.appendChild(productName);
    // productName.style = "padding-left: 20px; padding-right: 20px;";
    productName.textContent = list.name;

    // create and style the price p in HTML
    var productPrice = document.createElement('div');
    productPrice.id = "productPrice";
    productPrice.className = "products";
    row.appendChild(productPrice);
    // productPrice.style = "padding-left: 20px; padding-right: 20px;";
    productPrice.textContent = "$" + list.price.toFixed(2);
});


// create and style the total container in HTML
var totalCost = document.createElement('p');
totalCost.id = 'totalCost';
receiptContainer.appendChild(totalCost);
totalCost.textContent = "Your total is $" + total.toFixed(2);
