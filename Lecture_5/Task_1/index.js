
fetch("https://fakestoreapi.com/products")
.then(function (response) {
  return response.json();
})
.then(function (data) {
  sortPrice(data);
  sortCategory(data);
})
.catch(function (err) {
  console.log('error: ' + err);
});

const result = document.querySelector('.result');
const sortPrice = (price) => {
  price.sort((a,b) => a.price < b.price ? 1 : -1);
  price.forEach(element => {   
    result.innerHTML += `<div>Price:${element.price}</div>`
  });
  return price;
}

const sortCategory = (product) => {
  
  product.sort((a,b) => a.category > b.category ? 1 : -1);
  product.forEach(element => {
    result.innerHTML += `<div>Category:${element.category}</div>`
  });
  return product;
}
