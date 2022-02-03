import {createUrl} from './index.js';

describe('createUrl', () => {
  test('should returns a URL when pass string "/api/{id}"',() => {
    expect(createUrl('/api/{id}', {id: 0})).toBe('/api/0');
  });

  test('should return undefined when pass string "/api/{id}"',() => {
    expect(createUrl('/api/{id}', {name: 'Petya'})).toBe('/api/undefined');
  });

  test('should returns a URL when pass "/api/{list}/{id}"',() => {
    expect(createUrl('/api/{list}/{id}', {
      list: 'items', id: 0,
    })).toBe('/api/items/0');
  });

});
