axios.get('https://jsonplaceholder.typicode.com/')
.then(response => response.json())
.then(data => { 
 
  console.log(data.username);
  
  
});

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(data=>console.log(data.title));
axios.get('https://jsonplaceholder.typicode.com/')
.then(data=>console.log(data));

function sortPrice(users){
 
  users.forEach(element => {
     
     console.log(element.username);
  });
}