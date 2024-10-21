//Accedemos al parrafo que nos permitira imprimir el resultado
const parrafo = document.querySelector("#idParrafo");
console.log(parrafo);

//Accedemos a cada boton por medio de la API DOM
const btnSumar = document.querySelector("#idBtnSumar");
const btnRestar = document.querySelector("#idBtnRestar");
const btnMultiplicar = document.querySelector("#idBtnMultiplicar");
const btnDividir = document.querySelector("#idBtnDividir");

//Agregamos el evento click a los botones, adicionalmente
//se le asigna la funcion que realizará la operación
btnSumar.addEventListener("click", sumar);
btnRestar.addEventListener("click", restar);
btnMultiplicar.addEventListener("click", multiplicar);
btnDividir.addEventListener("click", dividir);

//Creamos la variable que tendra el valor del resultado de la operación matematica
let resultado;

//Funcion de operaciones
function sumar() {
  let numero1 = prompt("Ingrese el primer numero a sumar");
  let numero2 = prompt("Ingrese el segundo numero a sumar");
  resultado = Number(numero1) + Number(numero2);
  parrafo.innerHTML = `${numero1} + ${numero2} = ${resultado}`;
}

function restar() {
    let numero1 = prompt("Ingrese el primer numero a restar");
    let numero2 = prompt("Ingrese el segundo numero a restar");
    resultado = numero1 - numero2;
    parrafo.innerHTML = `${numero1} - ${numero2} = ${resultado}`;
}
  
function multiplicar() {
    let numero1 = prompt("Ingrese el primer numero a multiplicar");
    let numero2 = prompt("Ingrese el segundo numero a multiplicar");
    resultado = numero1 * numero2;
    parrafo.innerHTML = `${numero1} x ${numero2} = ${resultado}`;
}

function dividir() {
    let numero1 = prompt("Ingrese el primer numero a dividir");
    let numero2 = prompt("Ingrese el segundo numero a dividir");
    let mensaje;
    if (numero2 != 0) {
      let resultado = numero1 / numero2;
      mensaje = `${numero1} / ${numero2} = ${resultado}`;
    } else {
      mensaje = `El valor ${numero1} / ${numero2} no se puede dividir`;
    }
    parrafo.innerHTML = mensaje;
  }