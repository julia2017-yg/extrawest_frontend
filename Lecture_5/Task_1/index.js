
fetch('https://fakestoreapi.com/products')

  .then(function(response) {

    return response.json();

  })
  .then((data) => {
   data.sort((a,b) => a.category.localeCompare(b.category) || b.price - a.price)
    return data;
  })
  .catch(function(err) {
    console.log('error: ' + err);
  });