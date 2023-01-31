/*
El método .push() nos permite agregar uno o más elementos al final de un array. A continuación veremos un ejemplo aplicado con un array que contiene números:

Imagen 1.png
Como podemos ver, al momento de ejecutar la función se agregan los números 6 y 7 al array. Ahora revisemos un ejemplo con strings:

Imagen 2.png
Como podemos ver, agregamos dos cadenas de strings al ejecutar la función donde tenemos txtArray.push(). Es decir, indico el array al que voy agregar elementos, uso el método .push(), y dentro de .push() indico los elementos que quiero agregar al string. Finalmente, el console.log() lo uso para revisar en la consola si esto sucedió o no.

.shift()
Ahora pasemos a la otra cara de la moneda donde necesitamos eliminar un elemento del array. .shift() eliminar el primer elemento de un array, es decir, elimina el elemento que esté en el índice 0.

Imagen 3.png
Como vemos, luego de aplicar .shift() se eliminó exitosamente el primer elemento del array. ¿Y si quisiéramos eliminar el último elemento? Pasemos al bonus track de esta clase 🙌🏼.

Bonus Track
Si ya entendiste cómo funciona .shift() aplicar .pop() te será pan comido 🍞. El método .pop() eliminará el último elemento de un array. En este sentido, si tenemos un array de 5 elementos, pop() eliminará el elemento en el índice 4. Utilicemos el mismo ejemplo pero usando este método.

Imagen 4.png
¡Y listo! Ahora que ya conoces todos estos métodos te recomiendo comenzar a experimentar 💪🏼

👉🏾 Link al repositorio de esta clase: https://github.com/aaronpaulgz/push-shift
*/

// Array de números

let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
}

newNum()

// --- SHIFT ---

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
console.log(array)

// --- POP ---

//Creamos el array
let array = [1,2,3,4,5]
console.log(array)

// Aplicamos .shift()
let shiftArray = array.pop()

//Revisamos. El output debe de ser [1,2,3,4]
console.log(array)