export const invertObject = (object) => {
  const returnObject = {};

  for (const key in object) {
  
    if(returnObject.hasOwnProperty(object[key])){
      return null;
    }
    returnObject[object[key]] = key;  
  }

  return returnObject;
};