import {transformState} from './index.js';

describe('transformState', () => {

  test('Should return object with a last added property', () => {
    expect(transformState({
      foo: 'bar', name: 'Jim', another: 'one',
    },
    [
      {
        operation: 'addProperties', properties: {yet: 'another property'},
      },

      {
        operation: 'clear',
      },

      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },

    ],
    ))
      .toEqual(    
        {
          foo: 'bar', name: 'Jim',
        },
      );

  });

  test('Should return object with a single added property', () => {
    expect(transformState(
      {},
      [
        {
          operation: 'addProperties', properties: { name: 'Jim' },
        },
      ],
    ))
      .toEqual({
        name: 'Jim',
      });
  });

  test('Should return an empty state object after clear', () => {
    expect(transformState(
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
      [
        {operation: 'clear'},
      ],
    )).toEqual({});
  });

  test('Should handle a long list of operation', () => {
    expect(transformState(     
      {
        foo: 'bar', name: 'Jim', another: 'one',
      },
      [
        {
          operation: 'removeProperties', properties: ['another'],
        },
        { operation: 'clear' },
        { operation: 'clear' },
        { operation: 'clear' },
        {
          operation: 'addProperties', properties: { yet: 'another property' },
        },
        { operation: 'clear' },
        {
          operation: 'addProperties', properties: { 
            foo: 'bar', name: 'Jim',
          },
        },
        {
          operation: 'removeProperties', properties: ['name', 'hello'],
        },
      ],
    )).toEqual({ foo: 'bar' });
  });
});