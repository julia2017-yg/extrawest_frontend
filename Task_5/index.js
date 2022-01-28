export function getTime(str) {

  const arrWords = str.replace(/[, ]+/g, " ").trim().split(' ');
  for(let i = 0; i < arrWords.length; i++) {
    const arrItem = arrWords[i].split(':');
    if(arrItem.length == 2 
       && parseInt(arrItem[0]) >= 0 && parseInt(arrItem[0]) < 24 
       && parseInt(arrItem[1]) >= 0 && parseInt(arrItem[1]) <= 59) {
        
       return arrWords[i];
       
    } 
  }
  return '';
  
}

