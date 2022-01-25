export function getTime(str) {
  let arr = str.split(' ');
  for(var i = 0; i < arr.length; i++) {
    let arrItem = arr[i].split(':');
    if(arrItem.length == 2 
       && parseInt(arrItem[0]) >= 0 && parseInt(arrItem[0]) < 24 
       && parseInt(arrItem[1]) >= 0 && parseInt(arrItem[1]) <= 59) {
       return arr[i];
    }
  }
}
