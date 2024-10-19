console.log("hola");

const resultado = document.getElementById('resultado');

function ingresarDatos(){
    let nombre= document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    //let edad=parseInt(document.getElementById("edad").value);
    let fechaNacimiento= new Date(document.getElementById("fecha_nacimiento").value);
    let ahora=new Date(); //Obteniendo la fecha actual
    let edad=ahora.getFullYear()-fechaNacimiento.getFullYear();
    //alert("Hola "+nombre + " " + apellido+ " tienes "+edad+" años");
    let mensaje= `Hola ${nombre} ${apellido} tienes ${edad} años`;
    document.getElementById("contenido").innerHTML=`<h1>${mensaje}</h1>`;
    alert(mensaje);
}

