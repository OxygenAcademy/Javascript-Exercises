//switch 
//let diaSemana = "martes";

/*
switch (diaSemana) {
    case ("lunes"):
        console.log("Hoy es lunes");
        break;

    case "martes":
        console.log("Hoy es martes");
        break;

    case "miercoles":
        console.log("Hoy es miercoles");
        break;
        
    default:
        console.log("Hoy es otro día");
}

let diaSemana = "Lunes  ";

if(diaSemana.toLowerCase() == "lunes")
{
    console.log("es lunes");
}
else if(diaSemana == "martes")
{
    console.log("martes");
}
else if(diaSemana == "miercoles")
{
    console.log("miercoles");
}
else
{
    console.log("es otro dia");
}
*/
// .toLowerCase() es un método que devcuelve la misma cadena pero todo en minuscula.
// .trim() saca los espacios de sobra adelante y atras de la cadena


let hola = "  hola  ";

let sinEspacios = hola.trim();

console.log(sinEspacios);

sinEspacios = sinEspacios.toUpperCase();

console.log(sinEspacios);