// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];



function createFareMultiplier(int){
  return function(val){
    return val * int;
  };
};

function fareDoubler(fare){
  return 2 * fare;
}


function fareTripler(fare){
  return 3 * fare;
}

function selectDifferentDrivers(drivers, fn){
  return fn(drivers);
}
