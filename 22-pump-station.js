"use strict"


// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   // TODO
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if(distanceToPump <= mpg * fuelLeft){
    return true;
  } else {
    return false;
  }
};