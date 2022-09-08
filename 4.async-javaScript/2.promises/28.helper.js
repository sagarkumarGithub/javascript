const lib = require("./28.promises-over-callbacks");

let amount = 2000;
let tocut = 200;

function chargeDebitCard() {
  amount = amount - tocut;
  console.log(`Remaining amount is ${amount}`);
}

// lib.updateAccount("tv", chargeDebitCard);
let promiseObj = lib.productUpdate("mobile").then(chargeDebitCard);
