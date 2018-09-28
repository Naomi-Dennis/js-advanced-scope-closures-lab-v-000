function produceDrivingRange(blockRange){
  return (start, finish) => { 
  
    start = start.split()
    finish = finish.split()
    start.pop()
    start.pop()
    finish.pop()
    finish.pop()
 
    
    start = Number(start)
    finish = Number(finish)
    
       
    let dist = finish - start 
    
    return (dist <= blockRange ? dist + " out of range" : 0)
    
  }
}