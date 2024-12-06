const prompt = require('prompt-sync')();
const size = prompt('Please enter the size of prime number:')
for(let i=0; i<size; i++){
    let isPrimeNumber = findPrimeNumber(i);
    if(isPrimeNumber){
        console.log(i+' ')
    }
}

function findPrimeNumber(num){
    if(num == 0 || num == 1){
        return false
    }
    for(let i=2; i<=num/2; i++){
        if(num%i == 0){
            //console.log('Not prime number')
            return false
        }
    }
    return true
}