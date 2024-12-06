console.log('0')
console.log('1')
let count = 2
let c = 0
fabonacciRecurssion(0, 1, 10);

function fabonacciRecurssion(a, b, n){
    if(n > count){
        c = a+b
        console.log(c+' ')
        count++
        fabonacciRecurssion(b, c, n);
    }
}