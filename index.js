function produceDrivingRange(blockRange){
  return (start, finish) => { 
    start.pop()
    start.pop()
    finish.pop()
    finish.pop()
    start = Number(start)
    finish = Number(finish)
    return (finish - start <= blockRange)
    
  }
}