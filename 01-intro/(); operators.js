// Assignment operators (=)

    let variable = 'value'; // This variable is saving a pure value, not an object.


// Arithmetic operators  
// + Addition  - Substraction  * Multiplication   / Division  % Modulus, Reminder  ** Exponentiation  ++ Increment  -- Decrement

    let varOne = 'víctor';
    let varTwo = 'cosme';

    console.log(varOne + varTwo);

    let variableOne = 10;
    let variableTwo = 10;

    console.log(variableOne + variableTwo);
    console.log(variableOne - variableTwo);
    console.log(variableOne * variableTwo);
    console.log(variableOne + variableTwo);

    // Exponentiation **
    console.log(variableOne ** variableTwo);
    // Modulus, Reminder % (Módulo, Residual)
    console.log(variableOne % variableTwo);

    // All of this operators above are binaries (two operands are required to resolve the operation)

    
    // Increment ++
    let plus = variableOne++; // 10
    let plus2 = variableOne; // let plus2 = 11
    console.log(plus);
    console.log(plus2);
    console.log(++variableOne); // 12

    // i++ -> first print (or another action), then increment (add one to) its operand
    // ++i -> first increment (add one to) its operand, the print (or another action)

    // Using suffix 

    let x = 3;
    const y = x++; 

    console.log(`x:${x}, y:${y}`);
    // expected output: "x:4, y:3"

    // Using prefix 
    let a = 3;
    const b = ++a;

    console.log(`a:${a}, b:${b}`);
    // expected output: "a:4, b:4"


    // Decremento --
    // Using suffix
    // let x = 3;
    // const y = x--;

    // console.log(`x:${x}, y:${y}`); // expected output: "x:2, y:3"

    // Using prefix 
    // let a = 3;
    // const b = --a;

    // console.log(`a:${a}, b:${b}`); // expected output: "a:2, b:2"


    // Incremental and Decremental operators are unaries (one operand is required to resolve the operation)   


// Logical operators 
// For logical opeartions, the type of value required is boolean

    let logged = null;
    let creditCardOwner = true;

    let randomVariable = undefined;

    // Operand 'and' &&
    console.log(logged && creditCardOwner && randomVariable);

    // Operand 'or' ||
    console.log(logged || creditCardOwner || randomVariable);

    // Operand 'not' !
    console.log(!logged); // true

    // !true = false
    // !false = true


// Comparison operators 

    // > greather than

    // >= greater than or equal to
    console.log(10 >= 5); // true
    console.log(10 >= 10); // true
    console.log(10 >= 11); // false

    // < less than

    // <= less than or equal to
    console.log(8 <= 10); // true
    console.log(9 <= 10); // true
    console.log(13 <= 10); // false

    // == equal to
    
    // let carOne = {}; // Memory direction #ABC
    // let carTwo = {}; // Memory direction #CBA

    // console.log(carOne == carTWo); // Different memory directions, so, the outcome is 'false'

    let carOne = 'Audi';
    let carTwo = 'BMW';

    console.log(carOne == carTwo); // false

        // type cohersion


    // === equal value and equal type

    // != not equal
    // !== not equal value or not equal type





