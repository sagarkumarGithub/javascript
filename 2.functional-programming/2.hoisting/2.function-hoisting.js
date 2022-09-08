/*
    Function Hoisting
   -------------------- 

-> A function can be called before declaring it. 

   ex:- // program to print the text
           greet();
           function greet() {
              console.log('Hi, there.');
            } 

           output:- Hi, there.
           
    *  the function greet is called before declaring it and the program shows the output. This is due to hoisting.

-> when a function is used as an expression, an error occurs because only declarations are hoisted.           

    ex:- // program to print the text
            greet();
            let greet = function() {
                console.log('Hi, there.');
            }

-> NOTE
  ------
   1. Generally, hoisting is not performed in other programming languages like Python, C, C++, Java.

   2. Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.

   3. In the case of variables, it is better to use let than var.        
*/  