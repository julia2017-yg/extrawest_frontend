async function fetchUsers(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}

async function fetchToDos(endpoint) {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}

fetchUsers('https://jsonplaceholder.typicode.com/users')
  .then(data => {
    data.map(function(user) {

      fetchToDos('https://jsonplaceholder.typicode.com/todos?userId='+user.id)
        .then(todo => {      
          user.todos = {...todo};
        });
      console.log([user]);
    });
     
  });