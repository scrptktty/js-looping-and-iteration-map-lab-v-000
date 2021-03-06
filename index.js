// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  return drivers.map(driver => driver.toLowerCase())
}

function nameToAttributes(drivers) {
  const names = drivers.map(function (driver) {
    return Object.assign({}, { firstName: driver.split(" ")[0] }, { lastName: driver.split(" ")[1] })
   })
   return names
}

function attributesToPhrase(drivers) {
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
}
