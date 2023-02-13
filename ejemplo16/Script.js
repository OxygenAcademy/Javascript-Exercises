
function calculateYear(esBisiesto) {

    if ((esBisiesto % 400) === 0){
        alert(`${esBisiesto} es un año Bisiesto`)
    }
    
    else if ((esBisiesto % 100) === 0){
        alert(`${esBisiesto} no es un año Bisiesto`)
    }
    
    else if ((esBisiesto % 4) === 0){
        alert(`${esBisiesto} es un año Bisiesto`)
    }
    
    else{
        alert(`${esBisiesto} no es un año Bisiesto`)
    }
}

let esBisiesto =  prompt("Introduce el año" , "Escribe aquí..."); // devuelve un dato de tipo String

calculateYear(esBisiesto);


