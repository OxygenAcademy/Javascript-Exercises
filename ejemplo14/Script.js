"use strict"
function Fun1() {
    if (1 == 1) {
        var x = 10;
    }
    console.log("X=" + x);
}
Fun1();



function createStudent(name, age, gender) {
    var obj = { name: name, age: age, gender: gender };
    return obj;
}

var student = createStudent("Shagufta", 21, "Female");
console.log(student);


var arr = [1, 2, 3, 4, 5, 6, 7]; // global scope

function countOccurences(value) {

    var count = 0; // local scope (for the function only)

    for (var i = 0; i < arr.length; i++)

        if (arr[i] == value) count++;

    return count;

}

countOccurences(arr);

console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
console.log(typeof (count)); // undefined




function play() {

    for (var x = 1; x < 5; x++) {
        var y = x * x;
        console.log(x + " " + y);
    }
}

play();

console.log(typeof (x)); // undefined
console.log(typeof (y)); // undefined



for (var x = 1; x < 5; x++) {

    var y = x * x;

    console.log(x + " " + y);

}

console.log("x=" + x + " y=" + y); // x=5 y=16

// Now "x" and "y" are variables in the global scope


function add() {
    var counter = 0;
    function plus() { counter += 1; }
    plus();
    return counter;
}


function printText(number, text) {

    switch (arguments.length) {

        case 1: console.log('Number :' + number); break;

        case 2:

            console.log('Number :' + number);

            console.log('Text :' + text);

            break;

    }

}

printText(5); // Logs 5

printText(5, 'JavaScript Tutorials'); // Logs 5 and JavsScript Tutorials
