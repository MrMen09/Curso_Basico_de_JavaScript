var edad = 18

if (edad === 18)
{
    console.log("Puede votar, 1ra vez");
}
else if (edad > 18)
{
    console.log("Puede votar")
}
else
{
    console.log("No puede votar")
}
 
condition ? true: false;

var numero = 1;
var resultado = numero === 1 ? "Si soy un uno": "No soy un uno";


// Reto: Hacer un juego: Piedra, papel o tijera
console.log("Bienvenido, Selecciona tu arma")
console.log("1.Piedra")
console.log("2.Papel")
console.log("3.Tijera")
jugador = prompt()
maquina = Math.random() * 4;
Number(maquina);

switch(jugador)
{
    case 1:
        switch(maquina)
        {
            case 1:
                console.log("Es un empate");
                break;
            case 2:
                console.log("Perdiste");
                break;
            case 3:
                console.log("Ganaste!");
                break;
        }
    case 2:
        switch(maquina)
        {
            case 1:
                console.log("Ganaste!");
                break;
            case 2:
                console.log("Es un empate!");
                break;
            case 3:
                console.log("Perdiste!");
                break;
        }
    case 3:
        switch(maquina)
        {
            case 1:
                console.log("Perdiste!");
                break;
            case 2:
                console.log("Ganaste!");
                break;
            case 3:
                console.log("Es un empate!");
                break;
        }
    default: 
        console.log("Opción invalida")
}
    
