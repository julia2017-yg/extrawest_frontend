const axios = require('axios');

const getUsersPostComments = async() =>{
  try {
    const users = await axios.get('https://jsonplaceholder.typicode.com/users');
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const comments = await axios.get('https://jsonplaceholder.typicode.com/comments');

    const postCom = posts.map(post => ({
      ...post, comments: comments.filter(comment => post.id === comment.postId),
    }));

    const result = users.map(user => ({
      ...user, post: postCom.filter(post => user.id === post.userId),
    }));

    return result;
  } catch (error) {
    console.error(error);
  }
};

export {getUsersPostComments};