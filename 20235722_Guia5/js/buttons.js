function aviso(){
    alert("Bienvenido a JavaScript")
}

function confirmacion(){
    let confirmacion = confirm("Desea salir de la sesion?")
    alert(`Valor seleccionado ${confirmacion}`);

}

function capturarDatos(){
    let nombre = prompt("Ingrese su nombre");
    let edad = prompt("Ingrese su edad:", 0);

    alert(`Su nommbre es ${nombre} y su edad ${edad} years`)
}

function dibujarParrafo(){
    let parrafo = prompt(
        "Ingrese el texto que desea mostrar en el parrafo:");
    
    const p = document.querySelector("#idParrafo");
    p.innerHTML = parrafo


}