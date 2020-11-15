// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(Math.max(drivers.length - 2, 0))
}

let selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

function createFareMultiplier(int){
    return function fareMultiplier(fare) {
         return fare * int
    }
        
    
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, getDrivers) {
    return getDrivers(drivers)
}


