//const arr1 = ["Cecilie", "Lone"];
//const arr2 = ["Emil", "Tobias", "Linus"];
//const arr3 = ["Robin"];

const arr1 = [1,2];
const arr2 = [3,4];
const arr3 = [4,5];

const children = arr1.concat(arr2, arr3); 
console.log(children);


let lista1 = [1,2,3, "chau"];

let lista2 = ["hola","chau"];

lista1 = lista1.concat(lista2);

console.log(lista1);

let index = lista1.indexOf("chau");

console.log(index);

console.log("---------------some---------------");

//
const ages = [3, 10, 18, 15, 22, 25, 28];

console.log(ages.some(checkAdult));

function checkAdult(age) {
  return age > 100;
}

console.log("---------------fill---------------");

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

fruits.fill("Kiwi");
console.log(fruits);

console.log("---------------find---------------");
const ages2 = [3, 10, 18, 24];

console.log(ages2.find(checkAge));

function checkAge(age) {
  return age > 18;
}