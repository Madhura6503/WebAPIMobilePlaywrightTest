const originalStr = 'abcdfertuyiopkjhgfqwlmnvbcxz'
if(panagram(originalStr)){
  console.log('The given string '+originalStr+' is panagram')
}

function panagram(originalStr){
  const set1 = new Set()
  let ch = ''
  const lowerString = originalStr.toLowerCase()
  if(originalStr.length < 24){
    return false
  }else{
    for(let i=0; i<lowerString.length; i++){
      ch = lowerString.charAt(i)
      //console.log('ch:'+ch)
      if(ch > 'a' && ch< 'z'){
        set1.add(ch)
      }
    }
    console.log('set1:'+set1)
    if(set1.size == 24){
      return true
    }
  }
}