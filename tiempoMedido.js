
const prompt = require("prompt-sync")();

 let horas = Number(prompt("Ingrese las horas: "))
    let minutos = Number(prompt("Ingrese los minutos: "))
    let distancia= Number(prompt("Ingresa la distancia en kilometros: "))

function calcularTiempoMedio(horas, minutos, distancia){
    
    let tiempoTotalMinutos = (horas * 60) + minutos
    let kilometros = tiempoTotalMinutos / distancia

    return `El tiempo medio por kilometro es ${kilometros.toFixed(2)} minutos`

}

console.log(calcularTiempoMedio(horas, minutos, distancia));
