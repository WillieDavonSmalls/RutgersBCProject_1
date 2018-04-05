
    var walmart_query = 'ipod';
    var walmart_apiKey = 'wymapcqzkbzwruabx9t3cefx';


    $.ajax({
        url: "https://mighty-river-19291.herokuapp.com/cors",
        data: {
            url:'http://api.walmartlabs.com/v1/search?apiKey=' + walmart_apiKey + '&query=' + walmart_query,
            key:"8b5dcaf7cdfb9c46221d492eec6560c571d6ec218b2485c54075ab7840fa77f9"
        },
        method: "POST"
      }).then(function(response) {
        // Get reference to existing tbody element, create a new table row element
          console.log(response)
      });