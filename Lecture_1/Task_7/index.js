export function swapCase(str){
  return str.replace( /\w/g, function(letter) {
    return letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
   });
 }