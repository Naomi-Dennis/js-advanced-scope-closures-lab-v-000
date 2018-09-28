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
let driverId = 0

class Driver{
  constructor(name, id){ this.name = name || "NAME NOT ASSIGNED"; this.id = driverId; driverId++ } 
}

function createDriver(){
   return  Driver;  
}