export function vowelCount(str) { 
  const regExVowel = str.match(/[aeiou]/gi);
  return regExVowel === null ? 0 : regExVowel.length;
}