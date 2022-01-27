export function vowelCount(str) { 
  let count = 0;
  let vowels = 'aeiou';
  const arr = vowels.split('');
  for(let char of str){
    if(arr.includes(char)){
      count += 1;
    }  
  }
  return count;
}