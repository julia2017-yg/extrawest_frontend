export const transformStateWithClones = (state, transform) => {
  const array = [];
  let copyState = {...state};

  transform.forEach(value => {

    if (value.operation === 'addProperties') {
      const res = addProperties(copyState, value.properties);
      
      array.push({...res});
    }

    if (value.operation === 'clear') {
      const res = clearProperties(copyState, value.properties);

      array.push({...res});
    }

    if (value.operation === 'removeProperties'){

      const res = removeProperties(copyState, value.properties);
      
      array.push({...res});
    }

  });

  return array;
};

const addProperties = (state, prop) => {
  return Object.assign(state, prop);
};

const clearProperties = (state) => {
  Object.keys(state).forEach(key => delete state[key]);

  return state;
};

const removeProperties = (state, prop) => {
  for (const array of prop) {
    delete state[array];
  }

  return state;

};