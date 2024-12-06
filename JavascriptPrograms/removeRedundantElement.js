const arr = [8, 4, 6, 8, 10, 3, 3, 2, 2, 10, 10, 4, 6, 4, 11]
const uniqueArray = []
for (let i = 0; i < arr.length; i++) {
    if (isRedundantElement(arr, arr[i], i)) {
        uniqueArray.push(arr[i])
    }
} console.log('uniqueArray:' + uniqueArray)

function isRedundantElement(arr, element, index) {
    for (let j = 0; j < arr.length; j++) {
        if (j == index) {
            continue
        } else {
            if (arr[j] == element) {
                return false
            }
        }
    }
    return true
}
