const BASE_URL = 'https://jsonplaceholder.typicode.com';

const fetchUsers = async() => {
  try {
    return await axios.get(`${BASE_URL}/users`);
  } catch (e) {
    return [];
  }
};

 const getUser = async() => {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

console.log(fetchUsers());