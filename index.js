// Code your solution in this file!
// return the first two drivers in the array.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

// return the last two drivers in the array.
const returnLastTwoDrivers = function(drivers) {return drivers.slice(-2)}

// an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int
    }

}
    
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}

