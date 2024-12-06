const arr1 = [2, 4, 8, 7, 9, 1]
const isPresent = linearSearch(arr1, 5)
if(isPresent){
    console.log('The search element is present in an array')
}else{
    console.log('The search element is not present in an array')
}

function linearSearch(arr1, key){
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] == key){
            return true
        }
    }return false

    // return arr1.includes(key)
}