export function swapCase(str){
  return str.replace( /\w/g, function(letter) {
     if (letter === letter.toLowerCase()) {
       return letter.toUpperCase();
     } else {
       return letter.toLowerCase();
     }
   });
 }