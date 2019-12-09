const age = 31;

const isFemale = false;

const driverStatus = "bob";

const name = "Mark";

const totalAmount = 23;

if (age < 18) {
  console.log("Helaas, je mag niet naar binnen");
} else if (age >= 18 && age <= 25) {
  console.log("Je kijgt 50% korting!");
} else {
  console.log("Je mag naar binnen");
}

if (isFemale) {
  console.log("Ja, je mag naar binnen");
} else {
  console.log("helaas, je mag niet naar binnen");
}
if (driverStatus === "bob") {
  console.log("Ja, je mag nog rijden");
} else {
  console.log("Nee, je hebt te veel gedronken, dus je mag niet rijden");
}

if (name === "Sarah" || name === "Bram")
  console.log("Je krijgt een gratis biertje");
else [console.log("Koop je biertje aan de bar")];

if (totalAmount > 25) {
  console.log("Yeah! Je krijgt (vega) bitterballen");
} else if (totalAmount > 50) {
  console.log("Gefeliciteerd! Je krijgt een portie nachos!");
} else if (totalAmount > 100) {
  console.log("Gefeliciteerd! Je krijgt een gratis flesje champagne!");
} else {
  console.log("Helaas, je hebt nog niet genoeg uitgegeven voor een prijs");
}
