const prompt = require('prompt-sync')();

const originalNumber = prompt('Enter the number:');
const isPalindrom = findPalindromNumber(originalNumber);
if(isPalindrom){
    console.log('The given number is a palindrom')
}else{
    console.log('The given number is not a palindrom')
}

function findPalindromNumber(num){
    const originalNumber = parseInt(num);
    let revNumber = 0;
    while(num > 0){
        revNumber = 10 * revNumber + num%10;
        num = Math.floor(num/10);
    }
    console.log('revNumber:'+revNumber)
    if(originalNumber == revNumber){
        return true
    }else{
        return false
    }
}
