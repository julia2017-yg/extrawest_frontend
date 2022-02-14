
fetch("https://fakestoreapi.com/products")
.then(response => response.json())
.then(data => { 
  console.log(data)  
  console.log(sortCategory(data)+sortPrice(data));
  
  // for(let i = 0; i < data.length; i++){
  //   console.log(data[i])
  //   if(array[data[i].category]===undefined && array[data[i].price]===undefined){
  //     array = [data[i].category] + [data[i].price];
  //   }
  //   array = [data[i].category] + ' ' + [data[i].price];
  // }
 
 
  
});

function sortPrice(array){
  array.sort((a,b) => a.price < b.price ? 1 : -1);
  array.forEach(element => {
     
     console.log(element.price);
  });
}
 
function sortCategory(array){
  
  array.sort((a,b) => a.category > b.category ? 1 : -1);
  array.forEach(element => {
     
     console.log(element.category);
  });
}
