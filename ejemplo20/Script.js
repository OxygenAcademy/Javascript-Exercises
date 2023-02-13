//cesar

//palabra = "hola que tal"
function palindromo(palabra) {
    
    //let cadenaSinEspacios = palabra.toLowerCase().split(" ").join(""); //quitar TODOS los espacios
    
    //pasa todo a minuscula
    let cadenaEnMinuscula = palabra.toLowerCase();

    //palabraDivididaPorEspacios = ["hola" "que" "tal"];
    let palabraDivididaPorEspacios = cadenaEnMinuscula.split(" ");

    //palabraUnida = "holaquetal"
    let palabraUnida = palabraDivididaPorEspacios.join("");

    //let esPalindromo = false;
    
    let stringDer = ""; //Si no inicializas = "undefined" wtf
    
    let stringIzq = "";
    
    for (let i = 0; i < ((palabraUnida.length/2) - 1); i++) {
        stringIzq += palabraUnida[i];
    }
    
    for (let i = (palabraUnida.length - 1); i >= (palabraUnida.length/2); i--) {
        stringDer += palabraUnida[i];
    }
    
    if (stringDer == stringIzq) {
        return true;
    }
    else
    {
        return false;
    }
}

function reverseString(text)
{
    let reversedString = text.split("").reverse().join("");

    if(text === reversedString)
    {
        return true;
    }
    return false;
}