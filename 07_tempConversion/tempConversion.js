const convertToCelsius = function(temp) {
  let converted = (temp - 32)/1.8;
  if (!Number.isInteger(converted))
    converted = +converted.toFixed(1);

  return converted;
};

const convertToFahrenheit = function(temp) {
  let converted = 1.8*temp + 32;
  if (!Number.isInteger(converted))
    converted = +converted.toFixed(1);

  return converted;
};



// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
