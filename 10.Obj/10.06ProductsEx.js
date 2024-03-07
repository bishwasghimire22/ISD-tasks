// JSON form
let json = '[{"number": 1, "name": "Samsung Smart LED-TV", "price": 449.00, "description": "HD-digi ready"},' + '{"number": 2, "name": "Samsung 2.1 SoundBar Home Theater", "price": 198.00, "description": "Connect to TV and stream music wireless"},' + '{"number": 3, "name": "Dilog CI+/CA module for pay-tv-cards", "price": 63.90, "description": "CI+ module for the table televisions"}]';


// todo: Parse the JSON text into Javascript objects (1 array, 3 'product' objects)
let products = JSON.parse(json);

function listProducts() {

    for (i = 0; i < products.length; i++) {
        let outputText = `<p>Number: ${products[i].number}<br>
                     Name: ${products[i].name}<br>
                     Price: ${products[i].price.toFixed(2)}<br>
                    Description: ${products[i].description}</p>`;

        document.getElementById("productList").innerHTML += outputText;

    }
    // Handle the product objects from the array. Use i to index the array.


    // Write the output text to the web page (=to the DOM that browser then shows) 

}