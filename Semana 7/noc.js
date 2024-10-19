console.log("---------NUMBER-----------")
console.log(Number("")); //0
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number([]))
console.log(Number(null))
console.log(Number(undefined))

console.log(1+null)
console.log(1+undefined)

console.log("---------BOOLEAN-----------")
console.log(Boolean("")); //0
console.log(Boolean([]))
console.log(Boolean(" ")); //0
console.log(Boolean(0)); //0
console.log(Boolean(100)); //0
console.log(Boolean("Hola"))
console.log(Boolean(true)); //1
console.log(Boolean(false)); //0
console.log(Boolean(null))
console.log(Boolean(undefined))

console.log("--------------INCOGNITAS---------------")
console.log(false == 0)
console.log(""==" ")
console.log(true==100)
console.log('100'==100)
console.log(Number("hola")==Number(undefined))
console.log(null==0);
console.log(null==undefined);