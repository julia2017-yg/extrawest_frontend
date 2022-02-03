export const createUrl = (url, params) => {

  const regEx = /[^{}]+(?=})/g;
  const urlStr = url.match(regEx);
  
  urlStr.map(item => {
    const replace = '{' + item + '}';
    let flag = undefined;

    if(params[item] !== undefined) {
      flag = params[item];
    }
    url = url.replace(replace, flag);
  });
  
  return url;  
};