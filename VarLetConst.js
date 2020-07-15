/*Var
The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable.

Example: var a =10;

Variable declarations are processed before the execution of the code.
The scope of a JavaScript variable declared with var is its current execution context.
The scope of a JavaScript variable declared outside the function is global.*/


function exampleVar(){

    var a=10;
    console.log(a);  //output a=10
    if(true){

        var a=20;
        console.log(a);// output a=20
    }
    console.log(a);  //output a =20
    
}

/* In the above code, you can find, when the variable is updated inside the if loop, 
that the value of variable "a" updated 20 globally, hence outside the if loop the value persists. */

//LET
/*

The let statement declares a local variable in a block scope. It is similar to var, in that we can optionally initialize the variable.
The let statement allows you to create a variable with the scope limited to the block on which it is used.*/


function letExample(){

    let a=10;  
    console.log(a);  //output a=10
    if(true){

        let a=20;
        console.log(a) //output a=20
    }

    let a=20    // throws syntax error: Error Message: Uncaught SyntaxError: Identifier 'a' has already been declared.
    console.log(a)
}

//But same work with var type

function varExample(){

    var a=10;
    console.log(a);  //output a=10
    var a=20;
    console.log(a);   // output a=20
}

//CONST
/*const statement values can be assigned once and they cannot be reassigned. 
The scope of const statement works similar to let statements.*/

function constExample(){

    const a=10;
    console.log(a)  // output a=10
    
    const a=20     // //throws type error: Error Message : Uncaught TypeError: Assignment to constant variable.
    console.log(a)
}

