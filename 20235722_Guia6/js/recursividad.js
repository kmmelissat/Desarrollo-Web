//Otra forma de acceder a un elemento HTML es utilizando el getElementById del DOM
// Notesé que para este caso no se antepone el carácter #
const campo = document.querySelector("#idTxtNumero");

//definamos una funcion anonima que permita validar el tiempo real el ingreso de un número
const validarNumero = function (e) {
    //creamos una expresión regular que valida que sean números
    let validar = /^[0-9]{1}$/;
    let tecla = e.key;

    /* 
    .test valida que la expresión regular coincida con el valor ingresado
    podrá obsrevar que al intentar teclar una letra u otro caracter diferente
    a un número este no se escribe en el campo
    */
   if(!validar.test(tecla)) e.preventDefault();
};

//definiendo el evento keypress para el campo
campo.addEventListener("keypress", validarNumero);

//trabajando con botón calcular
const boton = document.getElementById("idBtnCalcular");

//definiendo una función anonima para calcular el factorial de un número
function calcularFactorial(numero){
    return numero < 2 ? 1 : numero * calcularFactorial(numero - 1);
}

//Definamos una función tipo flecha para imprimir el resultado del fectorial
const imprimir = (numero, resultado) => {
    const contenedor = document.getElementById("idDivResultado");
    contenedor.innerHTML = `El factorial de ${numero} es ${resultado}`;
}

//Definiendo una función tradicional
function calcular(){
    let numero = document.getElementById("idTxtNumero").value;
    if(numero != ""){
        //Llamamos a la función anónima para que calcule el factorial
        let resultado = calcularFactorial(numero);
        //Enviamos el resultado a una función de tipo flecha
        imprimir(numero, resultado);
    } else{
        alert("Debe ingresar un número válido.")
    }
}

//definiendo el evento click para el botón
boton.addEventListener("click", calcular);