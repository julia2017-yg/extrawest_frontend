export function transformState(obj, prop, value) {
    if (obj.hasOwnProperty(prop)){throw Error()}
    obj[prop]=value
    return obj
  }