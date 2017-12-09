// Code your solution in this file!
function distanceFromHqInBlocks(location){
  if (location > 42){
    return location - 42
  }
  else {
    return 42 - location
  }
}


function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}


function distanceTravelledInFeet(start, end){
  if (end > start) {
    return (end - start) * 264;
  }
  else {
    return (start - end) * 264;
  }
}

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    total = 0
    switch (true) {
      case distance <= 400:
        total += 0;
        break;
      case distance < 2000:
        total += (distance * .02)
        break;
      case distance > 2000:
        if (distance < 2500){
          total += 25
          break;}
        else {return 'cannot travel that far';}
    }
    return total
}
