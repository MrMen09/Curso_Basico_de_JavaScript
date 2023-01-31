// Se usan generalmente para generar condicionales

//El 0 es un valor falso
Boolean(0)

//El 1 es un valor verdadero
Boolean(1)

//null es un valor falso
Boolean(null)

//NaN es un valor falso
Boolean(NaN)

//undefined es un valor falso
Boolean(undefined)

//Un string vacio, tambien es falso
Boolean("")

//Por otro lado si el String tiene al menos un caracter, es verdadero.
Boolean("a")

//Si tenemos un numero diferente de 0, el valor es verdadero
Boolean(4)

//Si tenemos un array, es verdadero
Boolean([])

//Si tenemos un objeto, aun si esta vacio, es verdadero.
Boolean({})

//Igualmete, cualquier función es verdadera
Boolean(function(){})

//Y de manera logica, tenemos que True es verdadero y False es falso
Boolean(true)
Boolean(false)