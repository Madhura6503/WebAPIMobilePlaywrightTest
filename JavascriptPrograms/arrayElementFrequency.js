const arr = [8, 4, 6, 8, 10, 3, 3, 2, 2, 10, 10, 4, 6, 4]
const keyValue = new Map()
for(let i=0; i<arr.length; i++){
  const elementCount = isRedundantElement(arr, arr[i], i)
    keyValue.set(arr[i], elementCount)
  }
  console.log(keyValue)

function isRedundantElement(arr, element, index){
  let count = 1
    for(let j=0; j<arr.length; j++){
      if(j == index){
        continue
      }else{
        if(arr[j] == element){
        count++
      }
  }
      }return count
}
