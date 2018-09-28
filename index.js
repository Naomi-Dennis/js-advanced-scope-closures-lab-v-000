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
    

    let dist = Math.abs(finish - start)
    let range = Math.abs(dist - blockRange)

    return (range < blockRange ? range + " blocks within range" : range + " out of range")
    
  }
}