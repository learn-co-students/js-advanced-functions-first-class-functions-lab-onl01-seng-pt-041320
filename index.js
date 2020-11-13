const returnFirstTwoDrivers = function(drivers){
    const demDrivers = drivers.slice(0, 2);
    return demDrivers 
}

const returnLastTwoDrivers = function(drivers){
  const lastDrivers = drivers.slice(drivers.length - 2, drivers.length)
  return lastDrivers
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num){
  return function(fare){
    return fare * num
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, func){
  return func(drivers)
}