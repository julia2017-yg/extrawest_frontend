export function countOccurrences(str,letter){
  return str.toLowerCase().split(letter).length - 1;
}