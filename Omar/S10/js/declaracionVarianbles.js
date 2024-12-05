//Declaración de variables
let nombre = "Juan";
let edad = 25;
let esEstudiante = true;

console.log("Nombre: ", nombre);
console.log("Edad: ", edad);
console.log("Es estudiante: ", esEstudiante);

alert("Nombre: " + nombre);
alert("Edad: " +edad);
alert("Es estudiante: " +esEstudiante);

document.write("Nombre: " +nombre );
document.write("Edad: " +edad);
document.write("Es estudiante: " +esEstudiante);

//Operaciones aritmeticas básicas

let a = 10;
let b = 5;

let suma = a + b;
let resta = a - b;
let multiplicacion = a * b;
let division = a / b;

console.log("Suma: ", suma);
console.log("Resta: ", resta);
console.log("Multiplicación: ", multiplicacion);
console.log("División: ", division);

//Operadores lógicos

let esAdulto = true;
let tienePermiso = false;

let puedeEntrar = esAdulto && tienePermiso;
let puedeSalir = esAdulto || tienePermiso;

console.log("¿Puede entrar? ", puedeEntrar);
console.log("¿puede salir? ", puedeSalir);

//Concatenación de strings y templates literales

let nombre2 = "María";
let apellido = "López";
let saludo = "Hola!, "+nombre2 +apellido;
let saludoTemplate = `Hola, ${nombre2} ${apellido}!`;

console.log(saludo)
console.log(saludoTemplate)