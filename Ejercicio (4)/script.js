
let text1 = "";
let cars = ['BMW', 'Volvo', 'Mini'];

for (let x of cars) {
    console.log(x);
    text1 += x + " ";
}

console.log("--------------------------")


let person = {fname:"John", lname:"Doe", age:25}; 
let text = "";

for (let x in person) {

    console.log(x);
    text += person[x] + " ";
}


