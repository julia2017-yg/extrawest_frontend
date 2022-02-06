export const invertObject = (object) => {
  const retobj = {};

  for (const key in object) {
    if (retobj[object[key]] !== undefined) {
      return null;
    } else {
      retobj[object[key]] = key;
    }
  }

  return retobj;
};