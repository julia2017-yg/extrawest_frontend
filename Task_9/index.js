export function vowelCount(str) { 
  let count = 0;
  let vowels = 'aeiou';
  const arrVowels = vowels.split('');
  for(let char of str){
    if(arrVowels.includes(char)){
      count += 1;
    }  
  }
  return count;
}