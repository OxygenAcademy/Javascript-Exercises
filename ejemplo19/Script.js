/*
function saludar(nombre)
{
    condicion.log(arguments[1]);
    console.log(`Hola + ${nombre}`);
}

saludar("fer", "alonso0", 32, 321321, "hola");
*/

/*
function nombreCompleto(nombre, apellido)
{
    console.log("hola");

    return (`${nombre} ${apellido}`);
}
*/

function nombreCompleto()
{
    for(var i = 0; i < arguments.length ; i++)
    {
        console.log(arguments[i]);
    }
}

nombreCompleto("fernando", "alonso");

nombreCompleto();
{
let arguments = [];
}

nombreCompleto("fer", null);
{
let arguments = ["fer", null];
}

nombreCompleto(2,3,4,5,6);
{
let arguments = [2,3,4,5,6];
}

let resultadoFuncion = nombreFuncion("fernando", "alonso"); // resultadoFuncion = "fernando alonso"



