// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (array) => array.slice(-2);

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = (integer1) => {
    return (integer2) => {
        return integer1 * integer2
    };
};
// fareDoubler() — Declare a variable with const 
// and assign a function returned by createFareMultiplier() to it.
// Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// const selectDifferentDrivers = function (drivers, arrayOfDrivers) {
//     return arrayOfDrivers(drivers);
// };
const selectDifferentDrivers = (drivers, arrayOfDrivers) => arrayOfDrivers(drivers);

