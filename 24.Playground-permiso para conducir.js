/*
En este desafío vas a recibir un objeto car como parámetro de la función solution.

Este objeto puede contener diferentes propiedades. Debes asegurarte de que tenga la propiedad licensePlate (la placa del auto). Si sí la tiene, devuelve el objeto original con la propiedad drivingLicense como true. Si no la tiene, devuelve el objeto original con la propiedad drivingLicense como false.

Input

// Prueba 1
solution({
  color: 'red',
  brand: 'Kia',
});

// Prueba 2
solution({
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
});

// Prueba 3
solution({ licensePlate: 'RGB255'  });

Output

// Prueba 1
{
  color: 'red',
  brand: 'Kia',
  drivingLicense: false,
}

// Prueba 2
{
  color: 'gray',
  brand: 'Chevrolet',
  licensePlate: 'AAA111',
  drivingLicense: true,
}

// Prueba 3
{
  licensePlate: 'RGB255',
  drivingLicense: true,
}
*/

export function solution(car) {
    // Tu código aquí 👈
    if (car.licensePlate)
    {
      car.drivingLicense = true;
    }
    else
    {
      car.drivingLicense = false;
    }
    return car;
  }
  