import axios from 'axios';

export const userPostsComments = async() => {
  try {
    const [usersResult, postsResult, commentsResult] = await Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
    ]);
      
    const users = usersResult.data;
    const posts = postsResult.data;
    const comments = commentsResult.data;

    const allUsers = users.map((user) => {
      return {
        ...user,posts: posts.filter((post) => user.id === post.userId)
          .map((post) => (
            {
              ...post,
              comments: comments
                .filter((comment) => post.id === comment.postId),
            })),
      };
    });

    return allUsers;
  } catch (error) {
    return (error);
  }
};