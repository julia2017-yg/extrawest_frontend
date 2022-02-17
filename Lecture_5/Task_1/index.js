
fetch('https://fakestoreapi.com/products')

  .then(function(response) {

    return response.json();

  })
  .then(function(data) {

    console.log(sortPrice(data));
    console.log(sortCategory(data));
  })
  .catch(function(err) {
    console.log('error: ' + err);
  });

const sortPrice = (price) => {
  price.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
  
  return price;
};

const sortCategory = (product) => {
  
  product.sort((a,b) => a.category > b.category ? 1 : -1);
  
  return product;
};
