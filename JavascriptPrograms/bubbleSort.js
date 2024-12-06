const originalArray = [2, 7, 8, 3, 9, 7, 8, 5, 4, 4, 1, 0, 6]
bubbleSort(originalArray)

function bubbleSort(originalArray){
    let temp
    for(let x=1; x<(originalArray.length); x++)
    for(let i=0; i<(originalArray.length)-x; i++){
        if(originalArray[i]>originalArray[i+1]){
            temp = originalArray[i]
            originalArray[i] = originalArray[i+1]
            originalArray[i+1] = temp
        }
    }
    console.log('originalArray:'+originalArray)
}