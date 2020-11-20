const returnFirstTwoDrivers = function(drivers) {
        return drivers.slice(0, 2)
};

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

createFareMultiplier = (integer) => {
    return function() {
        return (integer * 5)
    }
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3
}

function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers)
}