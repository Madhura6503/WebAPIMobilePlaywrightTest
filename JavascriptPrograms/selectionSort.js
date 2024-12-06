const originalArray = [2, 7, 8, 3, 9, 7, 8, 5, 4, 4, 1, 0]
selectionSort(originalArray)

function selectionSort(originalArray){
    let temp
    for(let i=0; i<(originalArray.length)-1; i++){
        let index = i
        for(let j=i+1; j<originalArray.length; j++){
            if(originalArray[index] > originalArray[j]){
                index = j
            }
        }
        temp = originalArray[i]
        originalArray[i] = originalArray[index]
        originalArray[index] = temp
    }
    console.log('finalArray:'+originalArray)
}