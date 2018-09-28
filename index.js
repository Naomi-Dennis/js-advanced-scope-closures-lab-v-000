function produceDrivingRange(blockRange){
  return (start, finish) => { 
  
    start = start.split('')
    finish = finish.split('')

    start.pop()
    start.pop()
    finish.pop()
    finish.pop()
  console.log(start, finish)
    
    start = Number(start)
    finish = Number(finish)
    
   
    let dist = finish - start 
    
    return (dist <= blockRange ? dist + " blocks out of range" : 0)
    
  }
}