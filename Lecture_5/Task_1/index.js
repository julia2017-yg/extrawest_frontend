const urlProduct = ('https://fakestoreapi.com/products');
 
const getData = async(endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};


const sorted = async() => {

  const product = await getData(urlProduct);

  product.sort((a,b) => a.category.localeCompare(b.category) || b.price - a.price);

  return product;
  
};

export {sorted};



// const sorted = async() => {
   
//   fetch('https://fakestoreapi.com/products')

//     .then(function(response) {

//       return response.json();

//     })
//     .then((data) => {
//       data.sort((a,b) => a.category.localeCompare(b.category) || b.price - a.price);

//       return data;
//     })
//     .catch(error => error);
  
// };
// export {sorted}
// const base_product = ('https://fakestoreapi.com/products');
 
// const base_product = ('https://fakestoreapi.com/products');

// export const sorted = async() => {

//   const data = await fetch(base_product); 

//   const result = data.sort((a,b) => a.category.localeCompare(b.category) || b.price - a.price);
  
//   return result;
// };
