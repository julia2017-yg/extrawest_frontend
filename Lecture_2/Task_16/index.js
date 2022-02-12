export const fearNotLetter = (str) => {
  let lastLetter = str.charCodeAt(0);
  let missingLetter;

  for(let i = 1; i < str.length; i++){
    const currentLetter = str.charCodeAt(i);
  
    if ((lastLetter+1) < currentLetter) {
      missingLetter = String.fromCharCode(currentLetter-1);
      break;
    }else {
      lastLetter=currentLetter;
    }
  }

  return missingLetter;
  
};