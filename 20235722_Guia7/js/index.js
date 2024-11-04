// OBTENIENDO LA REFERENCIA DE LOS BOTONES
// POR MEDIO DEL .getElementById

const buttonSpan = document.getElementById("idBtnSpan");
const buttonP = document.getElementById("idBtnP");
const buttonDiv = document.getElementById("idBtnDiv");
const buttonButton = document.getElementById("idBtnButton");
const imprimir = document.getElementById("idImprimirResultado");

// DEFINICION DE FUNCIONES
const contarElementos = function (elemento) {
    // OBTENIENDO EL NUMERO DE ETIQUETAS SPAN QUE SE HAN CREADO
    // EN EL DOCUMENTO HTML
    let arrayElement = document.getElementsByTagName(elemento);
    console.log(
        `Etiquetas buscadas <${elemento}>/<${elemento}> / Total encontradas : ${arrayElement.length}`
    );

    for (const i of arrayElement) {
        console.log(i);
    }
    alert("Revise la consola del navegador");
};

// DEFINICION DE EVENTOS PARA LOS BOTONES
buttonSpan.onclick = () => {
    contarElementos("span");
};

buttonP.onclick = () => {
    contarElementos("p");
};

buttonDiv.onclick = () => {
    contarElementos("div");
};

buttonButton.onclick = () => {
    contarElementos("button");
};
