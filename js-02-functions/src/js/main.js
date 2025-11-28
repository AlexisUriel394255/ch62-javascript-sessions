



/**
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @returns 
 */
const printFullName = function (firstName, lastName){
    return `${firstName} ${lastName} estudiante de la ch62`;
};
console.log(printFullName("Johan","Gonzalez"));

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una sola instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
sintaxis:
    const nombreVariable = (parametros) => instrucción;
    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/
// Convertir la funcion printFullName a funcion flecha
const FullName = (firstName, lastName) => `${firstName} ${lastName} estudiante de la ch62`;


const makeCoffe =(type = "Americano") => `Preparando un cafe ${type}`;

console.log(makeCoffe("latte"));//Preparando un cafe Latte
console.log(makeCoffe());//Preparando un cafe Americano


// TODO: generar una función que calcule el área de un rectángulo
// usando parámetros por defecto para largo y ancho.
const AreaRetangulo = (largo, ancho) => largo * ancho;
console.log(AreaRetangulo(10,5));

//Ejemplo de uso de default parametres

console.log(`Valor 1000, estoy diciendo que vales:${parseInt("1000",10)}`);//1000
console.log(`Valor 1000 base 2, estoy diciendo que vales:${parseInt("1000",2)}`);//8


 /*
  Pase de datos:
    - Por valor: Se crea una copia independiente del dato. 
      Si modificas la copia, el original NO cambia.
    - Por referencia: Se pasa la dirección de memoria (referencia), 
      no el dato en sí. Si modificas algo a través de esa referencia, el original SÍ cambia.
 */
/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 // Mal diseño: Cada vez que quieras una operación nueva, modificas esta función.
const calculateBad = (a, b, type) => {
    if (type === "sum") return a + b;
    if (type === "subtract") return a - b;
    // Si quiero dividir, tengo que editar este archivo y agregar otro if...
};
console.log( calculateBad(5, 3, "sum") ); // 8
console.log( calculateBad(5, 3, "subtract") ); // 2

// Aplicando funciones de callback
// 1. La función principal está "Cerrada" (no la tocamos más)
const calculate = (a, b, operationFunction) => {
    return operationFunction(a, b);
};
//console.log(`Usando incorrectamente la funcion: ${calculate(5,3,"sum")}`);//operacionFunction is not a
const subract = (a,b) => a - b;
const multiply = (a,b) => a*b;
//Crear una funcion que sume dos numeros
const lasuma = (a,b) => a+b;
const divise = (a,b) => a/b;

console.log(`Realizando una resta: ${calculate(5,3, subract)}`);
console.log(`Realizando una multiplicacion: ${calculate(5,3,multiply)}`);
//Aplicar ala funcion calculate la funcion suma
console.log(`Realizando una suma: ${calculate(5,3,lasuma)}`);
console.log(`Realizando una division: ${calculate(6,3,divise)}`);

// Aplicar una funcion que calcule la potencia de un numero
console.log(`Realizando una potencia: ${calculate(6,3,(a,b) => a**b)}`)//Math.pow(a,b)
//Aplicar la funcion que calcule el residuo de una division para saber si 6 es divisible entre 3
console.log(`Realizando un resultado con residuo: ${calculate(6,3,(a,b) => a&b)}`)//Residuo

var a = 10;
var b = 20;
const c = 30;
const d = 40;
const e = 50;
const f = 60;
const g = 70;

const cambiarValores = (a,b,c) => {
/*

Muchas instrucciones

*/
 a=100;
 b=200;
 c=300;
 var d=400;
 let e=500;
 const f = 600;
 console.log(a,b,c);
}
