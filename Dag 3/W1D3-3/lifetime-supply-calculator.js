const calculateSupply = function(age, numPerDay) {
  const maxAge = 100;
  const totalNeeded = numPerDay * 365 * (maxAge - age);

  let message =
    "you will need " +
    totalNeeded +
    " cups of tea tot last you until the age of";
  console.log(message);
};

calculateSupply(29, 5);
