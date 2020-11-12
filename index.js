// Code your solution in this file!

// returnFirstTwoDrivers

const returnFirstTwoDrivers = (arr) => {return arr.slice(0, 2)};

// returnLastTwoDrivers

const returnLastTwoDrivers = (arr) => {return arr.slice(Math.max(arr.length - 2, 0))};

// selectingDrivers

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier

function createFareMultiplier(multiplier) {
   function fareMultiplier(fare){
      return fare * multiplier;
   };
   return fareMultiplier;
};

// fareDoubler

const fareDoubler = createFareMultiplier(2);

// fareTripler

const fareTripler  = createFareMultiplier(3);

// selectDifferentDrivers

function selectDifferentDrivers(arrayOfDrivers, sliceFunction) {
   return sliceFunction(arrayOfDrivers);
}