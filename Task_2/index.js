export function stringMerge(str1,str2,str3) {
  const strNew1 = str1.substring(0,str1.indexOf(str3)+1)
  let from = str2.search(str3)+1;
  let to = str2.length;
  let res = strNew1+str2.substring(to,from);
    return res;
}
