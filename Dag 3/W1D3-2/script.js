//Opdracht 2a:
/* makeCheeseSandwich
Get one slice of bread
Add cheese
Put a slice of bread on top 

function makeCheeseSandwich() {
  console.log("Get one slice of bread");
  console.log("Add cheese");
  console.log("Put a slice of bread on top");
}

makeCheeseSandwich();

//Opdracht 2b:

makeSandwichWith = function(topping) {
  console.log("Get one slice of bread");
  console.log("Add " + topping);
  console.log("Put a slice of bread on top");
  console.log("There you go, a sandwich with " + topping);
};

makeSandwichWith("Cheese"); 

//Opdracht 2C:

calculateDiscountedPrice = function(totalAmount, discount) {
  console.log(Math.round(totalAmount - discount));
};

calculateDiscountedPrice(25, 5);*/

const calculatePrice = function(totalAmount, discount) {
  if (totalAmount > 25) {
    console.log(Math.round(totalAmount - discount));
  } else {
    console.log(totalAmount);
  }
};

calculatePrice(35, 5);
calculatePrice(20, 3);
