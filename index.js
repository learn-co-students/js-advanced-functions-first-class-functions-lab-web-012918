// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
  let newArr = []
  newArr.push(array[0])
  newArr.push(array[1])
  return newArr
}

const returnLastTwoDrivers = function (array) {
  let newArr = []
  newArr.push(array[array.length-2])
  newArr.push(array[array.length-1])
  return newArr
}

const selectingDrivers = function (selection) {

}
selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers

const createFareMultiplier = function(mult) {
  return function (value) {
    return value * mult
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, functionname) {
  return functionname(arrayOfDrivers)
}
