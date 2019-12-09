// Opdracht deel een; Objecten
let person = {
  name: "Merel",
  age: 29
};

// test: console.log(person); | console.log(person.age);

person.name = "Qwen";

person["name"] = "Mary";

console.log(person.name);

// Opdracht deel twee; Arrays

let selectedColors = ["groen", "blauw", "rood"];
selectedColors[3] = "geel";

console.log(selectedColors);

console.log(selectedColors[0]);

console.log(selectedColors.push("paars", "oranje"));
console.log(selectedColors);
