
const prompt = require("prompt-sync")();

let taller1 = Number(prompt("Ingrese nota de taller 1: "));
    if(Number.isNaN(taller1)){
        throw new Error ("Taller 1 debe ser numero")
    }

   if(!(taller1 >= 0 && taller1 <= 5)){
        throw new Error ("Taller 1 debe estar entre 1 y 5")
   }

let taller2 = Number(prompt("Ingrese nota de taller 2: "));
   if(Number.isNaN(taller2)){
        throw new Error ("Taller 1 debe ser numero")
    }

   if(!(taller2 >= 0 && taller2 <= 5)){
        throw new Error ("Taller 1 debe estar entre 1 y 5")
   }

let quiz = Number(prompt("Ingrese nota de Quiz: "));
   if(Number.isNaN(quiz)){
        throw new Error ("Taller 1 debe ser numero")
    }

   if(!(quiz >= 0 && quiz >= 5)){
        throw new Error ("Taller 1 debe estar entre 1 y 5")
   }


let parcialFinal = Number(prompt("Ingrese nota del parcial final: "))
   if(Number.isNaN(parcialFinal)){
        throw new Error ("Taller 1 debe ser numero")
    }

   if(!(parcialFinal <= 0 && parcialFinal >= 5)){
        throw new Error ("Taller 1 debe estar entre 1 y 5")
   }



function notaFinal(taller1, taller2, quiz, parcialFinal){

    const promedioTrabajos = (taller1 + taller2 + quiz) / 3
    const notaFinal = (promedioTrabajos * 0.30) + (parcialFinal * 0.70)

    return `La nota final del estudiante es ${notaFinal}`

}

console.log(notaFinal(taller1, taller2, quiz, parcialFinal));