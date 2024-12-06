function isArmstrongNumber(num) { 
    let sum = 0; 
    let temp = num; 
    const numberOfDigits = num.toString().length; 
  
    while (temp > 0) { 
        let digit = temp % 10; 
        sum += Math.pow(digit, numberOfDigits); 
        temp = Math.floor(temp / 10); 
    } 
  
    return sum === num; 
} 
  
// function displayArmstrongNumbers(start, end) { 
//     for (let i = start; i <= end; i++) { 
//         if (isArmstrongNumber(i)) { 
//             console.log(i); 
//         } 
//     } 
// } 
  
// displayArmstrongNumbers(100, 1000);
const isArmstrong = isArmstrongNumber(111)
if(isArmstrong){
    console.log('Given number is armstrong')
}else{
    console.log('Given number is not armstrong')
}