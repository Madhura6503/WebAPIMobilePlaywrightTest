const prompt = require('prompt-sync')();
const originalString = prompt('Enter the string:')
const isPalindrom = findPalindromString(originalString);
if(isPalindrom){
    console.log('The given string is a palindrom')
}else{
    console.log('The given string is not a palindrom')
}

function findPalindromString(originalString){
    let revString = '';
    for(let i=originalString.length-1; i>=0; i--){
        revString += originalString.charAt(i);
    }
    console.log('revString:'+revString)
    if(originalString === revString){
        return true;
    }else{
        return false;
    }
}