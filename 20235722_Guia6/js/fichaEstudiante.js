document.addEventListener("DOMContentLoaded", function () {
    // Accedemos al contenedor donde se mostrarán los estudiantes
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

    // Accedemos a cada botón por medio de la API DOM
    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
    const btnViewEstudiante = document.querySelector("#idBtnMostrarEstudiantes");

    // Agregamos el evento click a los botones, adicionalmente
    // se le asigna la función que realizará la operación
    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiante.addEventListener("click", viewEstudiantes);

    // Arreglo de forma global
    let arrayEstudiantes = [];

    // Creando funciones
    function addEstudiantes() {
        const inputCarnet = document.querySelector("#inputCarnet").value.toString().toUpperCase();
        const inputNombre = document.querySelector("#inputNombre").value.toString().toUpperCase();
        const inputApellidos = document.querySelector("#inputApellidos").value.toString().toUpperCase();
        const inputDUI = document.querySelector("#inputDUI").value;
        const inputNIT = document.querySelector("#inputNIT").value;
        const inputFechaNacimiento = document.querySelector("#inputFechaNacimiento").value;
        const inputEmail = document.querySelector("#inputEmail").value;
        const inputEdad = document.querySelector("#inputEdad").value;

        // Expresiones regulares para validación
        const regexCarnet = /^[A-Z]{2}\d{3}$/;
        const regexNombre = /^[a-zA-Z\s]+$/;
        const regexDUI = /^\d{8}-\d$/;
        const regexNIT = /^\d{4}-\d{6}-\d{3}-\d$/;
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validar campos
        if (!regexCarnet.test(inputCarnet)) {
            alert('El carnet debe tener el formato: AB001 (dos letras y tres números).');
            return;
        }
        if (!regexNombre.test(inputNombre)) {
            alert('El nombre completo no debe contener números o caracteres especiales.');
            return;
        }
        if (!regexNombre.test(inputApellidos)) {
            alert('Los apellidos no deben contener números o caracteres especiales.');
            return;
        }
        if (!regexDUI.test(inputDUI)) {
            alert('El número de DUI debe tener el formato: ########-#.');
            return;
        }
        if (!regexNIT.test(inputNIT)) {
            alert('El número de NIT debe tener el formato: ####-######-###-#.');
            return;
        }
        if (!inputFechaNacimiento) {
            alert('La fecha de nacimiento es requerida.');
            return;
        }
        if (!regexEmail.test(inputEmail)) {
            alert('El correo electrónico no es válido.');
            return;
        }
        if (isNaN(inputEdad) || inputEdad <= 0) {
            alert('La edad debe ser un número válido.');
            return;
        }

        // Si pasa todas las validaciones
        arrayEstudiantes.push(
            new Array(inputCarnet, inputNombre, inputApellidos, inputDUI, inputNIT, inputFechaNacimiento, inputEmail, inputEdad)
        );
        alert("Se registró el nuevo estudiante");

        // Limpiando campos del formulario
        document.querySelector("#inputCarnet").value = "";
        document.querySelector("#inputNombre").value = "";
        document.querySelector("#inputApellidos").value = "";
        document.querySelector("#inputDUI").value = "";
        document.querySelector("#inputNIT").value = "";
        document.querySelector("#inputFechaNacimiento").value = "";
        document.querySelector("#inputEmail").value = "";
        document.querySelector("#inputEdad").value = "";
        document.querySelector("#inputCarnet").focus();
    }

    function viewEstudiantes() {
        // Validando que existan estudiantes registrados
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let table = "<table class='table table-light table-striped'>";
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "<th scope='col'>DUI</th>";
            table += "<th scope='col'>NIT</th>";
            table += "<th scope='col'>Fecha Nac.</th>";
            table += "<th scope='col'>Email</th>";
            table += "<th scope='col'>Edad</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";

            // Utilizaremos un bucle for para recorrer el arreglo de estudiantes
            for (let i = 0; i < arrayEstudiantes.length; i++) {
                // Accediendo a las posiciones del arreglo
                let estudiante = arrayEstudiantes[i];

                table += `<tr>`;
                table += `<td scope='row' style='font-weight: bold;'>${i + 1}</td>`;
                table += `<td>${estudiante[0]}</td>`;
                table += `<td>${estudiante[1]}</td>`;
                table += `<td>${estudiante[2]}</td>`;
                table += `<td>${estudiante[3]}</td>`;
                table += `<td>${estudiante[4]}</td>`;
                table += `<td>${estudiante[5]}</td>`;
                table += `<td>${estudiante[6]}</td>`;
                table += `<td>${estudiante[7]}</td>`;
                table += `</tr>`;
            }

            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            alert("No se han registrado estudiantes");
        }
    }
});