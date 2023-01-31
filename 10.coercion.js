/*
Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.
*/

//coerción implicita:
4 + "7"; //47
4* "7"; //28
2 + true //3
false - 3 //-3


//coerción explicita:

var a = 20;
a = String(a);
a = Number(a);

