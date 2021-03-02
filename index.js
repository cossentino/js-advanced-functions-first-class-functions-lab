// Code your solution in this file!




function returnFirstTwoDrivers(drivers) {
  const twoDrivers = function(drivers) {
    return drivers.slice(0,2)
  }
  return twoDrivers(drivers)
}



function returnLastTwoDrivers(drivers) {
  const twoDrivers = function(drivers) {
    return drivers.slice(-2)
  }
  return twoDrivers(drivers)
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(mult) {
  return function(fare) {
    return fare * mult
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, driverFunc) {
  return driverFunc(drivers)
}