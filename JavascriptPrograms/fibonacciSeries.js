const prompt = require('prompt-sync')();

const size = prompt('Enter the size:');
findFibonacciSeries(size);

function findFibonacciSeries(size){
    let a =0, b=1;
    let c;
    console.log(a+' '+b+' ')
    for(let i=2; i<=size; i++){
        c= a+b;
        console.log(c+' ')
        a=b;
        b=c
    }
    
}