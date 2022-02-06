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

function addProperties(state, prop){
 
  return Object.assign(state, prop);

}

function clearProperties(state){

  Object.keys(state).forEach(key => delete state[key]);

  return state;
}

function removeProperties(state, prop){ 
  for(const array of prop){   
    Reflect.deleteProperty(state, array); 
  }
  
  return state;
}
