const celsiusToFahrenheit = function(celsius) {
  let celsiusInF = (celsius * 9) / 5 + 32;
  console.log(celsius + "°C is " + celsiusInF + "°F");
};

const fahrenheitToCelsius = function(fahrenheit) {
  const fahrenheitInC = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit + "°F is " + fahrenheitInC + "°C");
};

fahrenheitToCelsius(50);
celsiusToFahrenheit(50);
