axios.get('https://jsonplaceholder.typicode.com/')
.then(response => response.json())
.then(data => { 
 
  console.log(getUsers(data));
  
  
});

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data=>console.log(data.title));

axios.get('https://jsonplaceholder.typicode.com/')
.then(response => response.json())
.then(data=>console.log(data));

const getUsers = (users) => {
  users.forEach(element => {
     
     console.log(element.username);
  });
  return users;
}
