import { sorted } from './index';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  }),
);

beforeEach(() => {
  fetch.mockClear();
});

describe('sorted', () => {
  beforeEach(() => {
    fetch.mockImplementationOnce(() => Promise.resolve({
      json: () => Promise.resolve([{category: 'b'}, {category: 'a'}],[{price: 'b'}, {price: 'a'}]),
    }));
  });
  
  test('sorted', async() => {
    const result = await sorted();
  
    expect(result).toEqual([{'category': 'a'}, {'category': 'b'}],[{price: 'a'}, {price: 'b'}]);
  });
  
  test('fetch should be called once with https://fakestoreapi.com/products', async() => {
    await sorted();
  
    expect(fetch).toHaveBeenCalledTimes(1);
  
    expect(fetch).toHaveBeenCalledWith(
      'https://fakestoreapi.com/products');
  });
});