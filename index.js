// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(driver => driver.toLowerCase());
}

function nameToAttributes(drivers){
  return drivers.map(function(driver){
    firstName = driver.split(" ")[0]
    lastName = driver.split(" ")[1]
    return Object.assign({}, {firstName: firstName, lastName: lastName} )
  });
}

function attributesToPhrase(drivers){
  return drivers.map(driver => `${driver.name} is from ${driver.hometown}`);
}
