function printStars(count=5){
    console.log("*".repeat(count));
}

printStars()

function calcularDistanceOrigen(x,y){
    return Math.sqrt(x**2 + y**2);
}
console.log(calcularDistanceOrigen(5,5));

const calcDistancePuntos= (x1,y1,x2,y2)=>
    Math.sqrt((x2-x1)**2+(y2-y1)**2)

console.log(calcDistancePuntos(5,5,0,0));

const calcularEcPuntoPendiente = (x, y, m) => {
    let terminoIndependiente=m*x+y;
    return `y=${m}x+${terminoIndependiente}`;
}

console.log(calcularEcPuntoPendiente(2,4,2));

const pares = [2,4,6,8,10];
const cuadrados = pares.map(x=>x**2);
console.log(cuadrados);

const multiplos5 = pares.filter(x=>x%5===0);
console.log(multiplos5);
