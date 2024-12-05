//Bucle for
let num = [1, 20, 30, 40, 50, 60];
let acumulador = 0;

alert(num.length);

for (let i = 0; i < num.length;i++){
    acumulador = acumulador + num[i];
}

prom = acumulador/num.length;

document.write("La suma total de los elementos del arreglo es: ", acumulador);
document.write("El promedio de los elementos del arreglo es: ", prom);

//Bucle While
let sw = 0;

while(sw == 0){
    let numero = prompt("Ingresa un número: ")
    if (numero < 0){
        alert("Game Over!!");
        break;
    }
}

//Bucle Do... While
let pw = "example";
let dato = "";
do{
    dato = prompt("Ingrese la contraseña: ");
    if(dato == pw){
        alert("La contraseña es correcta!");
        break;
    }
} while(pw != dato);