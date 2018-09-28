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
    

    let dist = finish - start 
    return (dist/5 <= blockRange ? dist + " blocks out of range" : 0)
    
  }
}