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
    let range = dist - blockRange

    return range > 0 ? range + " blocks out of range" : "within range by " + Math.abs(range)
    
  }
}

function produceTipCalculator(rate){
  return (tip) => {
    return tip * rate 
  }
}

class Driver{
  constructor(name, id){ this.name = name || "NAME NOT ASSIGNED";  }
  _assignId(){ this.id = Driver.__proto.id; Driver.__proto__.id++; }
}
Driver.__proto__.id = 0

function createDriver(){
   return  Driver;  
}