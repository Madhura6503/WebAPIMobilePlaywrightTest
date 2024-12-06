const str1 = "integral"
const str2 = "Triangle"
const isAnagram = findAnagramString(str1, str2)
if(isAnagram){
        console.log('The given string is anagram')
    }else{
        console.log('The given string is not anagram')
}

function findAnagramString(str1, str2){
    const n1 = str1.length
    const n2 = str2.length
    if(n1 != n2){
        return false
    }
     str1 = str1.toLowerCase()
     str2 = str2.toLowerCase()
    let string1 = str1.split('')
    let string2 = str2.split('')
    string1 = string1.sort()
    string2 = string2.sort()
    if(string1.join() === string2.join()){
        return true
    }else{
        return false
    }
    
}