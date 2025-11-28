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
