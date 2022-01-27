export function getOperands(str) {
    
    const arr = str.split(' ');
    arr.splice(1,1);
    return 'a:'+' '+arr[0]+','+' '+'b:'+' '+arr[1];

}
