/*
pedir nombre, edad y si es esudiante por pantalla

guardar todos los valores en variables

creat una variable objeto que contenga como propiedades las variables anteriores

mostrar todo en pantalla concatenado con un alert usando backtip 
*/

/*
let nombre = prompt("Por favor ingresa tu nombre:", "Tu nombre aquí");
let edad = prompt("ingrese su eded");
let ifStudent = confirm("eres estudiante ?")

let student = 
{
    nombre: nombre,
    edad: edad,
    ifStudent: ifStudent
};

alert(`Hola ${nombre}. 
Edad: ${student.edad}. 
Estudia: ${student.ifStudent}`);
*/

// pablo
let nombre = prompt("Por favor, ingrese su nombre:", "Tu nombre aqui");
let edad = prompt("Escribe tu edad aqui", "Tu edad aqui");
let ifStudent = confirm("¿Eres estudiante?");

let student = {
    nombre: nombre,
    edad: edad,
    ifStudent: ifStudent
};

alert(`Nombre: ${student.nombre}. Edad: ${student.edad}. Estudiante: ${student.ifStudent}`);

