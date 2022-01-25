export function getOperands(str) {
    let arr = str.split(' ');
    let myArr = arr.splice(1,1);
    let res = arr;
    return 'a:'+' '+res[0]+','+' '+'b:'+' '+res[1];
}
