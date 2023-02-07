//POO

// Matriz generadora.
// Agupan caracteristicas y comportamientos de las entidades de nuestro sistema.
class Automovil 
{
    marca;
    nombre;
    año;

encender()
{
    console.log("engine running...");
}

}

// Instacia del objeto
// Representacion logica del objeto en nuestro sistema.
let peugeot = new Automovil("peugeot", "208", "2022");

peugeot.encender();

// Caracteristicas
// Herencia
// polimorfismo
// abstraccion
// encapsulamiento