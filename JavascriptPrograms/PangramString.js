const sentence = 'abc 123 76543 8975 nj 896543 hjsdjfg 6543'
const isPangram = findPangram(sentence)
if(isPangram){
    console.log('Given sentence is pangram')
}else{
    console.log('Given sentence is not a pangram')
}

function findPangram(sentence){
const set1 = new Set()
const senLength = sentence.length;
if(senLength < 26){
    return false
}
const lowercaseSen = sentence.toLowerCase()
console.log('lowercaseSen:'+lowercaseSen)
let ch
for(let i=0; i<senLength; i++){
    ch = lowercaseSen.charAt(i)
    if(ch >= 'a' && ch <= 'z'){
        set1.add(ch)
    }
} 
for(let a of set1){
    console.log('set1:'+a)
}
return set1.size === 26
}
