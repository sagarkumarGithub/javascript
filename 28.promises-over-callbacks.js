/*
     promises over call-back
     -----------------------

     if call back is called more than one times by mistake by developer then it same method
     will be executed more than 1 times.

     ex: amount has be deducted 3 time.

     this thing counld not accure we will do soething using promises.
     
     promise is more secure then callbacks, because we can fix mistake of other library but we can
     fix with .then in our code.
*/

const { resolve } = require("path");

function updateAccount(product, cb) {
  setTimeout(() => {
    console.log(product + " bought");
    cb();
    cb();
    cb();
  }, 2000);
}

function productUpdate(product) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve();
    }, 2000);
  });
}

module.exports = {
  updateAccount: updateAccount,
  productUpdate: productUpdate,
};
