let person = {
  name: "sagar",
  age: 23,
  sallery: 50000,
  company: "AVIZVA",
};

let personString = JSON.stringify(person);
console.log(personString);

let personObj = JSON.parse(personString);
console.log(personObj);
