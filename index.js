function produceDrivingRange(blockRange){
  return (start, finish) => { 
  
    start = start.split('')
    finish = finish.split('')

    start.pop()
    start.pop()
    finish.pop()
    finish.pop()
 
    
    start = Number(start.join(''))
    finish = Number(finish.join(''))
    
    console.log(start, finish)
    let dist = finish - start 
    
    return (dist <= blockRange ? dist + " blocks out of range" : 0)
    
  }
}