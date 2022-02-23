const urlProduct = ('https://fakestoreapi.com/products');
 
const getData = async(endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};


const sorted = async() => {
  try {
    const product = await getData(urlProduct);
    
    product.sort((a,b) => a.category.localeCompare(b.category) || b.price - a.price);

    return product;

  }catch (error) {
    return (error);
  }
  
  
};

export {sorted};