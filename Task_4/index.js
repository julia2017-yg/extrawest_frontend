export function getOperands(str) {
    
    const arrayOperands = str.split(' ');
    arrayOperands.splice(1,1);
    return 'a:'+' '+arrayOperands[0]+','+' '+'b:'+' '+arrayOperands[1];

}
