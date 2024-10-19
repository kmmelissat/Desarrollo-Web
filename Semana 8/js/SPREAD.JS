const numeros = [1,2,3,4,5,6]

const copia= numeros //un solo objeto referenciado por dos variables, si afecta for fucks sake

copia[0]=100

console.log(numeros)

const juan = [1,2,3]
const dani = [4,5,6]

const amor = [...juan, ...dani]

console.log(amor)

const persona = {nombre:"Melissa", apellido: "Torres"}

const empleado={...persona, carnet:20235722}
console.log(empleado)

console.log(Math.max([10,15,7,9,22,8])); //no puede estar dentro de un arreglo