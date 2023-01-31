/*
Hoisting es cuando las variables y funciones se declaran antes de que se procese cualquier tipo de codigo 

Solo sucede con las palabras clave var y function

Solo pasa con versiones antiguas de JavaScript exactamente con la version 5 o anterior

Luego de la version 6 se introdujeron las palabras claves const y let

*/



//Ejemplo con variables
console.log(miNombre);

var miNombre;

miNombre = "Diego";

var miNombre1 = "Diego1";


//Ejemplo con Funci
hey();

function hey()
{
    console.log("Hola " + miNombre)
}
