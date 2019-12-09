// create a random number
console.log("hello");

let name = prompt(" Welkom! Wat is jouw naam?", []);
alert("Hello " + name + " laten we een spelletje spelen");

let numberToBeGuessed = Math.floor(Math.random() * 25) + 1;
let guess = prompt("Vul hier het nummer in dat je in gedachten hebt");
//const min = 0;
//const max = 25;
//console.log("Welkom bij Guess the Number " + name + "!!");

while (guess != numberToBeGuessed || i > 5) {
  guess = console.log("raad een nummer tussen 0 en 25");

  if (guess > numberToBeGuessed) {
    console.log("je gok was te hoog");
  } else if (guess < numberToBeGuessed) {
    console.log("je gok was te laag");
  } else {
    console.log("heel goed, het getal was inderdaad" + numberToBeGuessed);
  }
}

//console.log("Pssst het nummer is: " + numberToBeGuessed);
/*
// onder welke voorwaarde moeten we blijven loopen?
while () {
  // guess = ..vraag om het nummer..
  console.log("Je gok is:" + guess);
  if () {
    console.log("Je gok was te hoog");
  } else if () {
    console.log("Je gok was te laag");
  } else {
    console.log("Goed geraden, het nummer was inderdaad " + guess);
  }
}

console.log(
  "We sluiten de game af. Bedankt voor het spelen, tot de volgende keer!"
); */
