export function vowelCount(str) { 
  const regExVowel = str.match(/[aeiou]/g);

  return regExVowel === null ? 0 : regExVowel.length;
}