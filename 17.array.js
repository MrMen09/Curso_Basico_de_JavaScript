var frutas = ["Manzana", "Platano", "Cereza", "Fresa"];

console.log(frutas);

// el .length nos permite conocer cuantos elementos tiene el arreglo
console.log(frutas.length);

// cuando queremos acceder a un elemento especifico, usamos la siguiente sintaxis
console.log(frutas[0]);

//el metodo push nos permitira añadir uno o mas elementos al final del array
var masFrutas = frutas.push("Uvas")

//el metodo pop elimina el ultimo elemento del array
var ultimo = frutas.pop("Uvas");

//el metodo unshift nos permite añadir un alimento al inicio del array
var nuevaLongitud = frutas.unshift("Uvas");

//El metodo shift nos permite eliminar el primer elemento del array
var borrarFruta = frutas.shift("Uvas");

//El metodo indexOf nos permite saber el indice de un elemento 
var posicion = frutas.indexOf("Cereza");








