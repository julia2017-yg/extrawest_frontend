
import * as axios from 'axios';
import { userPostsComments } from  './index.js';

jest.mock('axios');

beforeEach(() => {
  axios.mockClear();
});

describe('userPostsComments', () => {
  const users = [
    {
      id: 1, name: 'John',
    },
  ];
  
  const posts = [
    {
      userId: 1, title: 'Test post', id: 1,
    },
  ];
  
  const comments = [
    {
      postId: 1, body: 'Comment test', id: 1,
    },
  ];
  
  test('axios should be called three times', async() => {
    axios.get.mockResolvedValueOnce({data: users});
    axios.get.mockResolvedValueOnce({data: posts});
    axios.get.mockResolvedValueOnce({data: comments});
  
    await userPostsComments();
  
    expect(axios.get).toHaveBeenCalledTimes(3);
  
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );
  
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/posts',
    );
  
    expect(axios.get).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/comments',
    );
  });
  
  test('should return merged array', async() => {
    axios.get.mockImplementationOnce(() => Promise.resolve({data: users}));
    axios.get.mockImplementationOnce(() => Promise.resolve({data: posts}));
    axios.get.mockImplementationOnce(() => Promise.resolve({data: comments}));
  
    const result = await userPostsComments();
  
    expect(result).toEqual([
      {
        id: 1, name: 'John', 
        posts: [
          { 
            userId: 1, 
            title: 'Test post', 
            id: 1, 
            comments: [
              {
                postId: 1, 
                body: 'Comment test', 
                id: 1,
              },
            ],
          },
        ],
      },
    ]);

  });

});