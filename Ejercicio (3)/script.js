
function parametrosYargumentos(parametro1, parametro2) {

    console.log(`estos son parametros: ${parametro1} y ${parametro2}`);

    for (var i in arguments) {
        console.log(`estos son argumentos: ${arguments[i]}`);
    }

}

parametrosYargumentos("parametro 1", "parametro 2", "argumento 1", "argumento 2", 5, 6);

//salida por consola:
//estos son parametros: parametro 1 y parametro 2
// estos son argumentos: parametro 1
// estos son argumentos: parametro 2
// estos son argumentos: argumento 1
// estos son argumentos: argumento 2
// estos son argumentos: 5
// estos son argumentos: 6

// exprecion == o ===
function compararNumeros (numero1, numero2)
{
    if(numero1 === numero2)
    {
        return "son iguales";
    }

    return "no son iguales";
}

compararNumeros(5, 5) //output "son iguales";
compararNumeros(5, "5") //output "no son iguales";

/*
do 
do while

if
else if
else

switch

for

-for in
-for on
*/

function condicionales()
{
    // si?  - if nos decide un camio U otro , dependiendo si una expresion es verdadera o falsa
    if(a>b)
    {
        return "a es mayor que b";
    }
    else if(b>a)
    {
        return "b es mayor que a"
    }
    else // sino
    {
        return "a y b son iguales"
    }
}


function condicionales()
{
    let color = "rojo";
    let resultado = "";

    // es una condicional que nos permite analizar cual es el camino correcto de varias opciones para una variable o expresion
    // tiene un valor por defecto que utilizara si ninguna opcion es correcta
    switch(color){
        case "rojo": {
            resultado = "color rojo";
            break;
        }
        case "azul":
        {
            resultado = "color azul";
            break;
        }
        case "negro":
        {
            resultado = "color negro";
            break;
        }
        case "violeta":
        {
            resultado = "color violeta";
            break;
        }
        default:
        {
            resultado = "color blanco";
            break;
        }
    }

    return resultado;
}

//condicional for
function condicionalFor()
{
    let numeroDeVueltas = 0;

    //se inicializa una variable, para utilizar de contador
    //se da la condicion de salida, cuando la condicion de salida es falsa, sale del for
    //se incrementa o decrementta el contador ( ++ / -- )
    for(var i = 0; i < 10; i++)
    {
        //este codigo se va a repetir tantas veces comoel for lo permita
        console.log(numeroDeVueltas++);
    }

    return numeroDeVueltas;
}


function ejemplo(numeroDeVueltas)
{

    if (typeof(numeroDeVueltas) == "number") {

        if (numeroDeVueltas > 0) {

            //for(iniciar la variable; condicion de entrada si es verdadero entra sino sale; iterador)
            for (var i = 0; (i => numeroDeVueltas); i++) {

                console.log(numeroDeVueltas);
                numeroDeVueltas++;
            }

        } else {

            return "numero de vueltas es menor o igual a 0";
        }
    }
    else {

        return "no es un numero";
    }
}

ejemplo("fer");  // output no es un numero;
ejemplo(0);  // output numero de vueltas es menor o igual a 0;
ejemplo(5);  // 1,2,3,4,5;