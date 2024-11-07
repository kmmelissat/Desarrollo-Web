// Obteniendo la referencia de los elementos
// por medio de arreglos asociativos
// aqui se esta utilizando el atributo name en cada elemento
const formulario = document.forms["frmRegistro"];
const button = document.forms["frmRegistro"].elements["btnRegistro"];

// CREANDO MODAL CON BOOSTRAP
const modal = new bootstrap.Modal(document.getElementById("idModal"), {});

// OBTENIENDO LA REFERENCIA DEL CUERPO DEL MODAL
// PARA IMPRIMIR EL RESULTADO
const bodyModal = document.getElementById("idBodyModal");

//Recorrer el formulario
/*const recorrerFormulario = function () {
    let totText = 0;
    let totRadio = 0;
    let totCheck = 0;
    let totDate = 0;
    let totSelect = 0;
    let totFile = 0;
    let totPass = 0;
    let totEmail = 0;

    // Recorriendo elementos del formulario
    let elementos = formulario.elements;
    let totalElementos = elementos.length;

    for (let index = 0; index < totalElementos; index++) {
        //Accediendo a cada hijo del formulario
        let elemento = elementos[index];

        //verificando el tipo de control en el formulario
        let tipoElemento = elemento.type;
        //verificando el tipo de nodo
        let tipoNode = elemento.nodeName;

        // Contabilizando el total de INPUT TYPE = TEXT
        if (tipoElemento == "text" && tipoNode == "INPUT") {
            console.log(elemento);
            totText++;
        }
        // Contabilizando el total de INPUT TYPE = PASSWORD
        else if (tipoElemento == "password" && tipoNode == "INPUT") {
            console.log(elemento);
            totPass++;
        }
        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoElemento == "email" && tipoNode == "INPUT") {
            console.log(elemento);
            totEmail++;
        }
        // Contabilizando el total de INPUT TYPE = RADIO
        else if (tipoElemento == "radio" && tipoNode == "INPUT") {
            console.log(elemento);
            totRadio++;
        }
        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "checkbox" && tipoNode == "INPUT") {
            console.log(elemento);
            totCheck++;
        }
        // Contabilizando el total de INPUT TYPE = FILE
        else if (tipoElemento == "file" && tipoNode == "INPUT") {
            console.log(elemento);
            totFile++;
        }
        // Contabilizando el total de INPUT TYPE = CHECKBOX
        else if (tipoElemento == "date" && tipoNode == "INPUT") {
            console.log(elemento);
            totDate++;
        }
        // Contabilizando el total de INPUT TYPE = EMAIL
        else if (tipoNode == "SELECT") {
            console.log(elemento);
            totSelect++;
        }
    }

    let resultado =`
    Total de input[type="text"] = ${totText}<br>
        Total de input[type="password"] = ${totPass}<br>
        Total de input[type="radio"] = ${totRadio}<br>
        Total de input[type="checkbox"] = ${totCheck}<br>
        Total de input[type="date"] = ${totDate}<br>
        Total de input[type="email"] = ${totEmail}<br>
        Total de select = ${totSelect}<br>
    `;

    bodyModal.innerHTML = resultado;

    //Funcion que permite mostrar el modal del Boostrap
    //Esta funcion es definida por Boostrap
    modal.show();
};*/

//Función para mostrar el modal con los datos
const mostrarDatos = (datos) => {
    bodyModal.innerHTML = "";
    const tabla = document.createElement("table");
    tabla.classList.add("table", "table-bordered");

    datos.forEach(([llave, valor]) => {
        const fila = document.createElement("tr");
        const celdaLlave = document.createElement("td");
        const celdaValor = document.createElement("td");

        celdaLlave.textContent = llave;
        celdaValor.textContent = valor;

        fila.appendChild(celdaLlave);
        fila.appendChild(celdaValor);
        tabla.appendChild(fila);
    });

    bodyModal.appendChild(tabla);
    modal.show();
};

//Función para validar el formulario
const validarForm = () => {
    const errores = [];
    const datos = [];

    // Poder ver que los campos no esten vacíos
    const nombre = formulario["idNombre"].value.trim();
    const apellidos = formulario["idApellidos"].value.trim();
    const fechaNacimiento = formulario["idFechaNac"].value;
    const correo = formulario["idCorreo"].value.trim();
    const password = formulario["idPassword"].value;
    const passwordRepetir = formulario["idPasswordRepetir"].value;

    if (!nombre) errores.push("El campo 'Nombres' no debe estar vacío.");
    else datos.push(["Nombres:", nombre]);

    if (!apellidos) errores.push("El campo 'Apellidos' no debe estar vacío.");
    else datos.push(["Apellidos:", apellidos]);

    // Validar fecha de nacimiento
    if (!fechaNacimiento) {
        errores.push("La fecha de nacimiento no debe estar vacía.");
    } else {
        datos.push(["Fecha de nacimiento", fechaNacimiento]);
    }

    // Validar correo electrónico con expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        errores.push("El correo electrónico no es válido.");
    } else {
        datos.push(["Correo electrónico", correo]);
    }

    // Validar contraseñas
    if (!password) errores.push("El campo 'Contraseña' no debe estar vacío.");
    if (password !== passwordRepetir) {
        errores.push("Las contraseñas no coinciden.");
    } else {
        datos.push(["Contraseña", password]);
    }

    // Validar que haya al menos un interés seleccionado
    const intereses = ["idCkProgramacion", "idCkBD", "idCkRedes", "idCkSeguridad"];
    const interesSeleccionado = intereses.some(id => formulario[id].checked);
    if (!interesSeleccionado) {
        errores.push("Debe seleccionar al menos un interés.");
    } else {
        datos.push(["Intereses", "Escogidos"]);
    }

    // Validar carrera seleccionada
    const carrera = formulario["idRdCarrera"];
    const carreraSeleccionada = Array.from(carrera).some(radio => radio.checked);
    if (!carreraSeleccionada) {
        errores.push("Debe seleccionar una carrera.");
    } else {
        datos.push(["Carrera", carrera.value]);
    }

    // Validar país de origen seleccionado
    const pais = formulario["idCmPais"].value;
    if (pais === "Seleccione una opcion") {
        errores.push("Debe seleccionar un país de origen.");
    } else {
        datos.push(["País de origen", formulario["idCmPais"].options[formulario["idCmPais"].selectedIndex].text]);
    }

    // Si hay errores, mostrar mensaje de error y no enviar formulario
    if (errores.length > 0) {
        alert(errores.join("\n"));
        return false;
    }

    // Si todo está correcto, mostrar datos en el modal
    mostrarDatos(datos);
    return true;
}

//agregando eventos al boton
button.onclick = (e) =>{
    e.preventDefault();
    validarForm();
};