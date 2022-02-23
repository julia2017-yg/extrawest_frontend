import { getUserTodo } from './index.js';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('getUserTodo', () => {
  const users = [{
    id: 1,
    name: 'Leanne Graham',
  }];

  const todos = [{
    userId: 1,
    title: 'et porro tempora',
    id: 4,
    comleted: true,
  }];

  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(users),
     
    }));


    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve(todos),
    }));

  });

  test('getUserTodo', async() => {
    const result = await getUserTodo();

    expect(result).toEqual([{
      id: 1,
      name: 'Leanne Graham',
      'todo': [
        {
          'comleted': true,
          'id': 4,
          'title': 'et porro tempora',
          'userId': 1,
        },
      ],
    }]);
  });

  test('fetch should be called twice', async() => {
    fetch.mockResolvedValueOnce({users},{todos});

    await getUserTodo();

    expect(fetch).toHaveBeenCalledTimes(2);

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users',
    );

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/todos?completed=true',
    );
  });
});