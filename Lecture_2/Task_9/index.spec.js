import {transformStateWithClones} from './index.js';

describe('transformStateWithClones', () => {
  test('Should create a new object with a single added property', () => {
    const state = {};
  
    expect(transformStateWithClones(state, [
      {
        operation: 'addProperties', properties: { name: 'Jim' },
      },
    ]))
      .toEqual([
        { name: 'Jim' },
      ]);
  
    expect(state)
      .toEqual({});
  });
  
  test('Should handle multiple operations', () => {
    const state = {
      foo: 'bar', bar: 'foo',
    };
  
    expect(transformStateWithClones(state, [
      {
        operation: 'addProperties',
        properties: {
          name: 'Jim', hello: 'world',
        },
      },
      {
        operation: 'removeProperties', properties: ['bar', 'hello'],
      },
      {
        operation: 'addProperties', properties: { another: 'one' },
      },
    ]))
      .toEqual([
        {
          foo: 'bar', bar: 'foo', name: 'Jim', hello: 'world',
        },
        {
          foo: 'bar', name: 'Jim',
        },
        {
          foo: 'bar', name: 'Jim', another: 'one',
        },
      ]);
  
    expect(state)
      .toEqual({
        foo: 'bar', bar: 'foo',
      });
  });
  

  test('Should handle a long list of operations', () => {
    const state = {
      foo: 'bar', bar: 'foo',
    };
  
    expect(transformStateWithClones(state, [

      {
        operation: 'addProperties', properties: {yet: 'another property'},
      }, 
      {operation: 'clear'},
      {operation: 'clear'},
      {
        operation: 'addProperties', properties: {
          foo: 'bar', name: 'Jim',
        },
      },
    
    ]))
      .toEqual([
        {
          foo: 'bar', bar: 'foo', yet: 'another property',
        },
        {},
        {},
        {
          foo: 'bar', name: 'Jim',
        },     
      ]);
  
    expect(state)
      .toEqual({
        foo: 'bar', bar: 'foo',
      });
  });
});
