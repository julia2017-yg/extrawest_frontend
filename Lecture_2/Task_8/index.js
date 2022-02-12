export const transformState = (state,transform) => {
  transform.forEach(value => {

    if(value.operation === 'addProperties'){
      state = addProperties(state, value.properties);
    }
    
    if(value.operation === 'clear') {
      state = clearProperties(state, value.properties);
      
    }

    if(value.operation === 'removeProperties') {
      state = removeProperties(state, value.properties);
    
    }
  });

  return state;
};

const addProperties = (state, prop) =>{
 
  return Object.assign(state, prop);

};

const clearProperties = (state) => {

  Object.keys(state).forEach(key => delete state[key]);

  return state;
};

const removeProperties = (state, prop) => { 
  for(const array of prop){   
    delete state[array]; 
  }
  
  return state;
};

