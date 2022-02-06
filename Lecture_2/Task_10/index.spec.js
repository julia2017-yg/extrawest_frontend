import {invertObject} from './index.js';

describe('invertObject', () => {

  test('should return an empty object when pass {}',() => {
    expect(invertObject({})).toEqual({});
  });

  test('should return inverts an object when pass {"foo": "bar"}',() => {
    expect(invertObject({'foo': 'bar'})).toEqual({'bar': 'foo'});
  });

  test('should return inverts an object when pass {"1": 2, "2": 4, "3": 6}',() => {
    expect(invertObject({
      '1': 2, '2': 4, '3': 6,
    }))
      .toEqual({
        '2': '1', '4': '2', '6': '3',
      });
  });

  test('should returns null when more than one property with the same value',() => {
    expect(invertObject({
      'foo': 'bar', 'hello': 'world', 'js': 'bar',
    }))
      .toEqual(null);
  });

});

