const urlUsers = ('https://jsonplaceholder.typicode.com/users');
const urlTodos = ('https://jsonplaceholder.typicode.com/todos?completed=true');
 
const getData = async(endpoint) => {
  const res = await fetch(endpoint);
  const data = await res.json();

  return data;
};


const getUserTodo = async() => {

  const users = await getData(urlUsers); 
  const todos = await getData(urlTodos);

  const result = users.map(user => ({
    ...user, todo: todos.filter(todo => todo.userId == user.id),
  }));

  return result;
  
};

export {getUserTodo};