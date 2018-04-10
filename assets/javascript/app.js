
    
    var productSearch = 'MacBook Air'
    
    var walmart_query = productSearch;
    var walmart_apiKey = 'wymapcqzkbzwruabx9t3cefx';
    var walmart_logo = '<td><img class="vendor-logo" src="assets/images/walmart-logo-transparent.png" alt="walmart"></td>'


    $.ajax({
        url: "https://mighty-river-19291.herokuapp.com/cors",
        data: {
            url:'http://api.walmartlabs.com/v1/search?apiKey=' + walmart_apiKey + '&query=' + walmart_query,
            key:"8b5dcaf7cdfb9c46221d492eec6560c571d6ec218b2485c54075ab7840fa77f9"
        },
        method: "POST"
      }).then(function(walmart_response) {
        // Get reference to existing tbody element, create a new table row element
          //console.log("walmart", walmart_response);
          console.log("walmart items", walmart_response.items);
          const{items} = walmart_response; 
         
         for (i = 0; i < 5; i++) {
            console.log("item " + i +":  "+ items[i].name, "sales price:  " + items[i].salePrice, "medium image:   " + items[i].mediumImage)
            $('#customers').append('<tr><td>'+items[i].name + '<img class="result-thumbnail" src="'+ items[i].mediumImage +'" alt = "product" width="140" height="100"></td>' + walmart_logo + '<td>$'+items[i].salePrice+'</td></tr>');
        }
      });

      var bestbuy_query = productSearch;
      var bestbuy_apiKey = 'N45Lkw1tBElVvgFZZmAYoPaw';
      var bestbuy_queryURL = 'https://api.bestbuy.com/v1/products((search=' + bestbuy_query + '))?apiKey=' + bestbuy_apiKey + '&format=json';
      var bestbuy_logo = '<td><img class="vendor-logo" src="assets/images/best-buy-logo-transparent.png" alt="bestbuy"></td>'
  
      $.ajax({
        url: bestbuy_queryURL,
        method: 'GET'
      }).then(function(bestbuy_response) {
        // Get reference to existing tbody element, create a new table row element
          //console.log("best buy", bestbuy_response);
          //console.log("best buy products", bestbuy_response.products);

          const{products} = bestbuy_response; 

          
          
          for (i = 0; i < 5; i++) {
            console.log("item " + i +":  "+ products[i].name, "sales price:  " + products[i].salePrice, "medium image:   " + products[i].image)
            $('#customers').append('<tr><td>'+products[i].name + '<img class="result-thumbnail" src="'+ products[i].image +'" alt = "product" width="140" height="100"></td>' + bestbuy_logo + '<td>$'+products[i].salePrice+'</td></tr>');

          }
      });




