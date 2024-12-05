let num1 = parseInt(prompt("Ingresa un número"));
let num2 = parseInt(prompt("Ingresa un número"));

//función que sume 2 números
function sumar(){
    document.write(`La suma de los números es: ${num1 + num2}`);
}

//función que reste 2 números
function restar(){
    document.write(`La resta de los números es: ${num1-num2}`);
}

//función que multiplique 2 números
function multiplicar(){
    document.write(`La multiplicación de los números es: ${num1 * num2}`);
}

//función para dividir 2 numeros
function dividir(){
    document.write(`La división de los números es: ${num1 / num2}`);
}

sumar();
restar();
multiplicar();
dividir();

function calculadora(x, y, op){
    switch(oper){
        case 'sumar':
            return sumar(x, y);
        case  'restar':
            return restar(x, y);
        case 'multiplicar':
            return multiplicar(x, y);
        case 'dividir':
            return dividir(x, y);
        default:
            alert("Operación invalida!");
    }
}   
let oper = prompt("Indique la operación: "); 
calculadora(num1, num2, oper);
