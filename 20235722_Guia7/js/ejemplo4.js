// Inicializando referencia de botones con métodos actuales
const buttonAgregarPagina = document.querySelector("#idAgregarPagina");
const buttonMenu = document.querySelector("#idAgregarMenu");
const buttonTitulo = document.querySelector("#idAgregarTitulo");
const buttonParrafo = document.querySelector("#idAgregarParrafo");
const pagina = document.querySelector("#idPagina");

// Defina la siguiente función para crear el contenedor de la nueva página web.
buttonAgregarPagina.onclick = function () {
    const contenedorVerificando = document.querySelector("#idDivPage");

    if (!contenedorVerificando) {
        // Creando el contenedor de la página
        const contenedor = document.createElement("div");
        contenedor.setAttribute("id", "idDivPage");
        contenedor.setAttribute("class", "container");
        contenedor.setAttribute(
            "style",
            "border:solid 1px black; height:500px; overflow: scroll; overflow-x: hidden;"
        );

        pagina.appendChild(contenedor);
    } else {
        alert("Ya se agregó el contenedor de la página");
    }
};

// Definamos la siguiente función para crear el menú de la página.
buttonMenu.onclick = function () {
    // Verificando que exista el contenedor de la página
    const contenedor = document.querySelector("#idDivPage");

    if (contenedor) {
        // Verificando que exista el menú
        const menuVerificar = document.querySelectorAll("#idDivPage > header");

        if (menuVerificar.length === 0) {
            // Clonando el menú principal de nuestra página
            // Para luego crearlo en la nueva página
            const menu = document.querySelector("header").cloneNode(true);
            contenedor.appendChild(menu);
        } else {
            alert("Ya ha sido agregado el menú");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};

// Definamos la siguiente función para crear títulos en nuestra página web.
buttonTitulo.onclick = function () {
    // Verificando que exista el contenedor de la página
    const contenedor = document.querySelector("#idDivPage");

    // Verificando que exista el menú
    const menu = document.querySelectorAll("#idDivPage > header");

    if (contenedor) {
        if (menu.length > 0) {
            let titulo = prompt("Agregue el título de la página");

            if (titulo != "" && titulo != null) {
                const h1 = document.createElement("h1");
                // Agregando clases de Bootstrap
                h1.setAttribute("class", "display-5 text-center fw-bold py-4 my-4");
                h1.innerHTML = titulo;

                contenedor.appendChild(h1);
            } else {
                alert("No se ha registrado ningún título, por favor ingrese información");
            }
        } else {
            alert("Debe agregar un menú primero");
        }
    } else {
        alert("Primero debe agregar un contenedor de página");
    }
};

buttonParrafo.onclick = function(){
    //verificando que exista el contenedor de la página
    const contenedor = document.querySelector("#idDivPage");

    //Verificando que exista el menú
    const menu = document.querySelectorAll("#idDivPage > header");

    if(contenedor){
        if(menu.length > 0){
            let texto = prompt("Agregue un parrafo a su pagina web");

            if(texto != "" && texto != null){
                const parrafo = document.createElement("p");
                //Agregando clases de boostrap
                parrafo.setAttribute("class", "lead mb-4 py-4");
                parrafo.innerHTML = texto;
                //Creando parrafo como hijo del contenedor
                contenedor.appendChild(parrafo);
            } else{
                alert("No se ha registrado ningun parrafo, por favor ingrese información");
            }
        } else{
            alert("Debe agregar un menú primero")
        }
    } else{
        alert("Primero debe agreagar un contenedor a la página")
    }
};