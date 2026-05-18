
const prompt = require("prompt-sync")();

let centigrados = Number(prompt("Ingresa los grados centigrados: "))

if (Number.isNaN(centigrados)){
    throw new Error("Debes ingresar un numero valido")
}

function temperatura(centigrados){

    let fahrenheit = (9/5 * centigrados) + 32

    return `El resultado en Fahrenheit es ${fahrenheit}`

}

console.log(temperatura(centigrados));