/*

   * Hoisting
   -----------

  -> Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration. 
      ex:- using test before declaring
           var test;
           console.log(test); // undefined

        -> The default initialization of the var is undefined.

  -> JavaScript Hoisting refers to the process whereby the interpreter moves the declaration of functions, variables or classes to the top of their scope, 
     prior to execution of the code.

      ex:- program to display value
           a = 5;
           console.log(a);
           var a; // 5   

   -> let and const hoisting
     -------------------------

     * Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. 
       An exception will be thrown if a variable declared with let or const is read before it is initialized.

      ex:- console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
           let num = 6;      // Initialization

*/