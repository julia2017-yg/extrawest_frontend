export function stringMerge(str1,str2,str3) {

  const strNew1 = str1.substring(0,str1.indexOf(str3)+1)
  const from = str2.search(str3)+1;
  const to = str2.length;
  const res = strNew1+str2.substring(to,from);
    return res;
    
}
