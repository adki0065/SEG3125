	// Array of products, each product is an object with different fieldset
	// A set of ingredients should be added to products		 

	var products = [{
	        name: "milk",
	        lactoseFree: false,
	        nutFree: true,
	        price: 11.99
	    },
	    {
	        name: "peanut butter",
	        lactoseFree: true,
	        nutFree: false,
	        price: 2.35
	    },
	    {
	        name: "salmon",
	        lactoseFree: true,
	        nutFree: true,
	        price: 10.00
	    },
	    {
	        name: "salmon (organic)",
	        lactoseFree: true,
	        nutFree: true,
	        price: 20.00
	    }
	];



	// given restrictions provided, make a reduced list of products
	// prices should be included in this list, as well as a sort based on price

	function restrictListProducts(prods, restriction) {

	    let product_names = [];
	    for (let i = 0; i < prods.length; i += 1) {
	        if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)) {
	            product_names.push(prods[i].name);
	        } else if ((restriction == "NutFree") && (prods[i].nutFree == true)) {
	            product_names.push(prods[i].name);
	        } else if (restriction == "None") {
	            product_names.push(prods[i].name);
	        }
	    }

	    return product_names;
	}

	// Calculate the total price of items, with received parameter being a list of products
	function getTotalPrice(chosenProducts) {
	    totalPrice = 0;
	    for (let i = 0; i < products.length; i += 1) {
	        if (chosenProducts.indexOf(products[i].name) > -1) {
	            totalPrice += products[i].price;
	        }
	    }
	    return totalPrice;
	}

	function compare(a, b) {
	    if (a.price < b.price) {
	        return -1;
	    }
	    if (a.price > b.price) {
	        return 1;
	    }
	    return 0;
	}