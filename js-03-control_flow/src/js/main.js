//-----------------------------Condicional if-else-------
let isActive = true;
if(isActive === true) console.log("El usuario esta activo");
if(isActive === true) console.log("El usuario esta activo");

if(isActive === true){
 console.log("El usuario esta activo");
}

if(isActive){
    console.log("El usuario esta activo");
}
//Bloque de codigo:
//Conjunto de sentencias agrupada entre llaves {...}

{
    let lastName = "perez";
    let firstName = "juan";
    var alias = "juampi";
    let age = 28;
    console.log(firstName,lastName,alias);
    { //Bloque anidado
    let lastName = "Sergio";
    let firstName = "Torres";
    var alias = "serch";
    var alias = "serchmo"
     console.log(firstName,lastName,alias,age);
    }
     console.log(firstName,lastName,alias,age);
}
 //console.log(firstName,lastName,alias,age); firstName is not defined
  console.log(alias);//serchmo

 /*
 Realizar una función (Arrow function) que reciba un número como valor de temperatura.
 Si la temperatura es mayor a 25 grados, retornar "Hace calor".
 En caso contrario, retornar "Hace frío".
 Imprimir el valor del retorno por consola.
*/
const Niveltemperatura = (temperatura) =>{
    if (temperatura => 25) {
        return "Hace calor";
    }else{
         return "Hace frio";
    }
}
console.log(Niveltemperatura(25));



/**
 * Realizar una funcion que reciba el valor booleano si una persona esta feliz o no
 * Si la persona esta feliz, mostrar en la interfaz de usuario la imagen "public/images/dino.jpg"
 * En caso
 */
/*
     Realizar una función que reciba un código(weatherCode) de temperatura.
     De acuerdo al código recibo, retornar un mensaje:
     Code   Description
    0           Clear sky
    1, 2, 3     Mainly clear, partly cloudy, and overcast
    45, 48      Fog and depositing rime fog
    
*/
const weatherCode = (code) =>{
    if (code ===0) {
        return "Clear sky";
    }else if(code === 1 || code === 2 || code==3){
        return"Mainly clear, partly cloudy, and overcast";
    }else if(code === 45 || code === 48){
          return"Fog and depositing rime fog";
    }else{
        return "mensaje no definido";
    }
}
console.log(weatherCode(45));
let img = document.getElementById("imagen");

const estadoAnimo = emocion =>{
    if(emocion===false){
    img.src = "public/images/dino.jpg";
    }else{
         img.src = "./public/images/dino.jpg";
    }
}

//--------------- Condicional Switch-case --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/


const getAccessLevel = ( role ) => {
    let accessLevel;
    switch ( role ) {
        case "admin":
            accessLevel = "Acceso completo al sistema";
            break;
        case "editor":
            accessLevel = "Acceso para editar contenido";
            break;  
        case "viewer":
            accessLevel = "Acceso solo para ver contenido";
            break;
        default:
            accessLevel = "Acceso denegado";
    }
    return accessLevel;
};
console.log( getAccessLevel("admin") ); // Acceso completo al sistema
console.log( getAccessLevel("super_admin") ); // Acceso completo al sistema
console.log( getAccessLevel("editor") ); // Acceso para editar contenido
console.log( getAccessLevel("customer") ); // Acceso denegado
 /*
 Refactorizar la función getWeather usando switch-case
 const getWeather=(codigo)=>{
     let message;
    if(codigo===0){
        message="Clear Sky";
    }else if( codigo===1 ||codigo===2 ||codigo===3  ){
        message="Mainly clear, partly cloudy, and overcast";
    }else if(codigo===45 || codigo===48){
        message="Fog and depositing rime fog";
    }else{
        message="no definido";
    }
    return message;
   
}
*/
const getWeatherSwitch=(codigo)=>{ 
    let message;
    switch(codigo){
        case 0:
       message = "Clear Sky";
       break
       case 1:
       case 2:
       case 3:
      message="Mainly clear, partly cloudy, and overcast";
      break;
      case 45:
      case 48:
      message="Fog and depositing rime fog";
      break;
      default:
      message="no definido";
    }
     return message;
}
console.log(getWeatherSwitch(0));
// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.
 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 
*/

const votingEligibility = (age) =>{
    return age =>18 ? "Puede votar": "No puede votar";
}
console.log(votingEligibility(20));
console.log(votingEligibility(16));

/*
 Realizar una función que reciba un número y retorne
 "Par" si el número es par o "Impar" si el número es impar.
 Usar el operador ternario.
*/
const  sabersiEspar = (numero)=>{
    return numero%2===0 ? "El numero es par": "El numero es impar";
}
console.log(sabersiEspar(3));
