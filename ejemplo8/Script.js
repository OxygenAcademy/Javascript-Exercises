// 1.By function declaration
function printHello(nombre) 
    { 
        alert("Hello " + nombre ) 
    };

printHello("Fernando");

// 2.By function Expression
var printHello1 = function () 
    { 
        console.log("Hello Cesar") 
    };

printHello1();


var printHello2 = function printFunct() 
{ 
    alert("Hello Casandra") 
};

printHello2();

// 3.Using the constructor of the Function object
var printHello3 = new Function('alert("Hello Pablo Feliz cumple")');

printHello3();