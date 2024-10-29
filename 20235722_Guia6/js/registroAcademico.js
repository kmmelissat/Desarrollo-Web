document.addEventListener("DOMContentLoaded", function () {
    // Accedemos al contenedor donde se mostrara los estudiantes
    const containerEstudiantes = document.querySelector("#idContainerEstudiantes");

    // Accedemos a cada boton por medio de la API DOM
    const btnAddEstudiante = document.querySelector("#idBtnAgregarEstudiante");
    const btnViewEstudiantes = document.querySelector("#idBtnMostrarEstudiantes");

    // Agregamos el evento click a los botones, adicionalmente
    // Se le asigna la funcion que realizara la operación
    btnAddEstudiante.addEventListener("click", addEstudiantes);
    btnViewEstudiantes.addEventListener("click", viewEstudiantes);

    // Arreglo de forma global
    let arrayEstudiantes = new Array();

    // Creando funciones
    function addEstudiantes() {
        const inputCarnet = document
            .querySelector("#inputCarnet")
            .value;
        const inputNombre = document
            .querySelector("#inputNombre")
            .value;
        const inputApellidos = document
            .querySelector("#inputApellidos")
            .value;

        if (inputCarnet != "" && inputNombre != "" && inputApellidos != "") {
            arrayEstudiantes.push([
                inputCarnet,
                inputNombre,
                inputApellidos,
            ]);
            alert("Se registró el nuevo estudiante");

            // Limpiando campos del formulario
            document.querySelector("#inputCarnet").value = "";
            document.querySelector("#inputNombre").value = "";
            document.querySelector("#inputApellidos").value = "";
            document.querySelector("#inputCarnet").focus();
        } else {
            alert("Faltan campos que completar");
        }
    }

    function viewEstudiantes() {
        // Validando que existan estudiantes registrados
        console.log(arrayEstudiantes);
        let totalEstudiantes = arrayEstudiantes.length;
        if (totalEstudiantes > 0) {
            let carnet;
            let nombres;
            let apellidos;
            let table = `<table class='table table-light table-striped'>`;
            table += "<thead>";
            table += "<tr>";
            table += "<th scope='col' style='width: 5%;'>#</th>";
            table += "<th scope='col' style='width: 15%;'>Carnet</th>";
            table += "<th scope='col'>Nombres</th>";
            table += "<th scope='col'>Apellidos</th>";
            table += "</tr>";
            table += "</thead>";
            table += "<tbody>";
    
            // Utilizaremos un bucle for para recorrer el arreglo de estudiantes
            for (let i = 0; i < arrayEstudiantes.length; i++) {
                // Accediendo a las posiciones del arreglo
                carnet = arrayEstudiantes[i][0];
                nombres = arrayEstudiantes[i][1];
                apellidos = arrayEstudiantes[i][2];
    
                table += "<tr>";
                table += `<td scope='row' style='font-weight: bold;'>${i + 1}</td>`;
                table += `<td>${carnet}</td>`;
                table += `<td>${nombres}</td>`;
                table += `<td>${apellidos}</td>`;
                table += "</tr>";
            }
    
            table += "</tbody>";
            table += "</table>";
            containerEstudiantes.innerHTML = table;
        } else {
            containerEstudiantes.innerHTML = "No se han registrado estudiantes";
        }
    }
    
});
