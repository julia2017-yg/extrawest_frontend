 const getData = async (endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
}

const getFetchUser = async () => { 
    try{
      const users = await getData('https://jsonplaceholder.typicode.com/users');
      console.log(getData(users))
    }
    catch(error) {
      return error;
    }
}

const getFetchTodos = async () => { 
  try{
    const todos = await getData('https://jsonplaceholder.typicode.com/todos?completed=true');
    console.log(getData(todos))
  }
  catch(error) {
    return error;
  }
}



// fetch('https://jsonplaceholder.typicode.com/todos?userId=',true)
// .then
// getData('https://jsonplaceholder.typicode.com/users')
//   .then(data => {
      
//     data.map((user) => {

//       fetchToDos('https://jsonplaceholder.typicode.com/todos?userId=',true)
//         .then(todo => {      
//           user.todos = {...todo};
//         });
//       console.log([user]);
//     });
     
//   });