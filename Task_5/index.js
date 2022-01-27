export function getTime(str) {

  const arr = str.replace(/[, ]+/g, " ").trim().split(' ');
  for(let i = 0; i < arr.length; i++) {
    const arrItem = arr[i].split(':');
    if(arrItem.length == 2 
       && parseInt(arrItem[0]) >= 0 && parseInt(arrItem[0]) < 24 
       && parseInt(arrItem[1]) >= 0 && parseInt(arrItem[1]) <= 59) {
        
       return arr[i];
       
    } 
  }
  return '';
  
}

