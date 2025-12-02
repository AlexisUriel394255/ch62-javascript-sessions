







const myArray = [true, 42, "Hola", null, {nombre:"Juan"}, [1,2,3]];


const frutas = [];//empty array
const fruits = new Array();// array using constructor (less common)

const numero = [5];//arau with one element
const numbers = new Array(5);// array with empty slots

// --- 2. Acceso a Elementos ---
// Los índices comienzan en 0 (Zero-based indexing).
// [0] -> Primer elemento
// [length - 1] -> Último elemento
const techStack = ["HTML", "CSS", "JavaScript"];
//Acceder al primer elemento
console.log(techStack.length);
console.log(`Accediendo al primer elemento: ${ techStack[0]}`);// "HTML"

// Accediendo al segundo elemento

//Acceder al ultimo elemento (longitud -1);

console.log(`Accediendo al segundo elemento: ${ techStack[1]}`);
console.log(`Accediendo al ultimo elemento: ${ techStack[techStack.length -1]}`);

// Modificar de elementos
techStack[1] = "Sass";
console.log("Despues de la modificacion:",techStack);

//Agregar un nuevo elemento al final
//techStack[3]
techStack[techStack.length] = "TypeScript";




/* ================================================================
   BLOQUE 2: MÉTODOS DE ARRAYS (Add/Remove) 
   ================================================================
   JavaScript nos da métodos para manipular la lista como una pila o cola.
*/
const shoppingList = ["Leche", "Huevos"];
// 1. push(): Agrega al FINAL (El más usado)
// Retorna la nueva longitud del array.
shoppingList.push("Pan"); 
console.log("Push:", shoppingList); // ["Leche", "Huevos", "Pan"]
// 2. unshift(): Agrega al INICIO (Mueve todos los índices, es más lento)
shoppingList.unshift("Café");
console.log("Unshift:", shoppingList); // ["Café", "Leche", "Huevos", "Pan"]


// --- Eliminar Elementos ---
// 3. pop(): Elimina el ÚLTIMO y lo devuelve
const removedItem = shoppingList.pop();
console.log(`Eliminado con pop: ${removedItem}`); // "Pan"
console.log("Lista actual:", shoppingList);
// 4. shift(): Elimina el PRIMERO y lo devuelve
const firstRemoved = shoppingList.shift();
console.log(`Eliminado con shift: ${firstRemoved}`); // "Café"
