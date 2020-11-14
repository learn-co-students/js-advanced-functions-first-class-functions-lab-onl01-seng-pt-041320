// Code your solution in this file!

const returnFirstTwoDrivers = function(arr){
    const new_arr = arr.slice(0, 2);
    return new_arr;
}

const returnLastTwoDrivers = function(arr){
    const new_arr = arr.slice(-2);
    return new_arr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    function faremultiplier(fare){
        return fare * num;
    }
    return faremultiplier;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
    if (func === returnLastTwoDrivers){
        return returnLastTwoDrivers(drivers);
    } else if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(drivers);
    }

}