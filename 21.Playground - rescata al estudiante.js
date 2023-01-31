/*
En este desafío tu función solution recibirá 2 parámetros:

estudiantes: un array de strings con varios nombres de estudiantes.
deathCount: un número entero.
nuevo: un string con el nombre de un nuevo estudiante (que no aparecía antes en el array).
Tu función debe retornar un array de elementos con las siguientes indicaciones:

Si el parámetro deathCount es igual a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes y agregando el elemento nuevo al final.

Si el parámetro deathCount es mayor a 0, debes retornar un array con los mismos elementos que tenía el array de estudiantes pero eliminando de atrás para adelante a la cantidad de estudiantes que indica el número deathCount y agregando el elemento nuevo al final.

Input

solution(["Nico", "Zule"], 0, "Santi")
solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
solution(["Nath", "Luisa", "Noru"], 2, "Cami")

Output

["Nico", "Zule", "Santi"] // no desapareció ningún elemento, se agregó Santi al final
["Juan", "Juanita", "Julian"] // desapareció 1 elemento (Daniela), se agregó Julian al final
["Nath", "Cami"] // desaparecieron 2 elmentos (Luisa y Noru), se agregó Cami al final
*/

export function solution(estudiantes, deathCount, nuevo) {
    // Tu código aquí 👈
    if (deathCount == 0)
    {
      estudiantes.push(nuevo);
      return estudiantes;
    }
    else if(deathCount > 0)
    {
      for (var i = 0; i < deathCount; i++)
      {
        estudiantes.pop(); 
      }
      estudiantes.push(nuevo);
      return estudiantes;
    }
  }
  