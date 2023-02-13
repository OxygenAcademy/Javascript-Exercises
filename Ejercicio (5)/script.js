
let text1 = "";
let cars = ['BMW', 'Volvo', 'Mini'];

//for of recorre un array o una lista 
for (let x of cars) {
    console.log(x);
    text1 += x + " ";
}

console.log("--------------------------")

let person = {fname:"John", lname:"Doe", age:25}; 
let text = "";


//for in recorre las propiedades de un objeto
for (let x in person) {

    console.log(x);
    text += person[x] + " ";
}

console.log(person[fname]);
///"John"

let persona1 = {fname:"marc", lname:"Doe", age:25}; 
let persona2 = {fname:"cesar", lname:"Doe", age:25}; 
let persona3 = {fname:"caro", lname:"Doe", age:25}; 
let persona4 = {fname:"casandra", lname:"Doe", age:25}; 
let persona5 = {fname:"pablo", lname:"Doe", age:25}; 

let listaDePersonas = [persona1, persona2m, persona3, persona4, persona5];

for(listaDePersonas of listaDePersonas)
{
    
}

//foreach
let fruits = ["apple", "orange", "cherry"];

fruits.forEach(myFunction);

function myFunction(item){

    console.log(item);
}


let lista = [1,2,3]

lista.concat(3,4);

console.log(lista);