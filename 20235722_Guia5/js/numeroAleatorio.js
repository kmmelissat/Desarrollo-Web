const numeroAleatorio = Math.floor(Math.random()*25) + 1;

const numeroIntentos = 3;

let intentos = 1;

function generarNumeroAleatorio(){
    let mensaje;
    const parrafo = document.querySelector('#idParrafo');

    if (intentos <= numeroIntentos){
        let numero = prompt(
            "Que numero se ha generado (Intento " + intentos + ")?"
        );

        if (numero == numeroAleatorio){
            mensaje = `Pudiste adivinar el numero (${numeroAleatorio}). Refresca la pagina para volver a jugar.`;
        } else if (intentos == numeroIntentos){
            mensaje = `Su numero de intentos ha terminado.
            No pudiste adivinar el numero (${numeroAleatorio}). Refresque para volver a jugar.`;
        } else{
            if (numero < numeroAleatorio) {
                mensaje = `Vuelve a intentar. El número que buscas es más alto que ${numero}. Quedan ${
                    numeroIntentos - intentos
                } intentos`;
            } else {
                mensaje = `Vuelve a intentar. El número que buscas es más bajo que ${numero}. Quedan ${
                    numeroIntentos - intentos
                } intentos`;
            }
        }

        intentos++
    }else{
        mensaje = `Su numero de intentos ha terminado.
        El numero oculto era: ${numeroAleatorio}. Refresque la pag. para volver a jugar.`;
        
    }


    parrafo.innerHTML = mensaje
}