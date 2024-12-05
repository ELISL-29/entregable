//Verificar calificaciones
let calificacion = prompt("Ingrese una calificación: ");
let respuesta = "";

if(calificacion >= 90){
    respuesta = "Aprovado con honores!";
}
else if(calificacion >= 70 && calificacion < 90){
    respuesta = "Aprobado";
}  
else if(calificacion < 70){
    respuesta = "reprobado";
}

console.log(respuesta, " con una calificación de: ", calificacion);   

//comprobar si un número es par o impar
let numero = prompt("Ingresa un número: ");
let resp = "";

if((numero % 2) == 0){
    resp = "Es par";
}
else{
    resp = "Es impar";
}

console.log(resp);

//Evaluación de descuentos
let valor = prompt("Ingrese el total de su compra: ");
resultado = "";

if(valor > 100){
    resultado = valor - (valor * 0,1);
}
else if (valor <= 100){
    resultado = valor;
}

console.log("El valor a pagar es: ", resultado);

//Juego adivinanzas
let num = (Math.random()*10)+1;
console.log(num);

let x = prompt("Ingresa un número entre 1 y 10: ");
let res = "";
if(x == num){
    res = "¡Felicidades, adivinaste el número!";
}
else{
    res = "Lo siento, el número era:", x;
}

console.log(res);