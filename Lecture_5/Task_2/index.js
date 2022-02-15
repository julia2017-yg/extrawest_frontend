const resultOfResponse = document.querySelector(".response");

  fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(data => {        
        fetchUserData(data);
      });

      const fetchUserData = (users) => {
        users.forEach(user =>{
          resultOfResponse.innerHTML += `<div>Users:${user.name}</div>`;
        });
       return users;
      }


  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => {        
    fetchUserToDos(data);
  });

  const fetchUserToDos = (todo) => {
    todo.forEach(item => {
      resultOfResponse.innerHTML += `<div>Users:${item.todos}</div>`;
    });
    return todo;
  }
