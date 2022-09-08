/*
    Serial and parallel execution of code with call back ft. event loop
    -------------------------------------------------------------------

    * Taks
      -> serial task
      -> parallel task

    * serial task
      -> tasks are dependent on the output of its previous task.
      -> [create -> edit -> upload -> video] 

    * parallel task
      -> tasks ate independent on the output of its previous task.
      -> [download video-1,download video-2,,download video-3]  
      
*/

// parallel
const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", cb);

function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
}

console.log("after");
