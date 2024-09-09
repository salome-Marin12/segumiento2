let fisica = 4.0;
let quimica = 3.5;
let biologia = 4.5;
let matematicas = 5.0;
let informatica = 3.0;

let promedio = (fisica + quimica + biologia + matematicas + informatica) / 5;
let calificacion;

if (promedio >= 1 && promedio < 3) {
    calificacion = "mala";
} else if (promedio >= 3 && promedio <= 4) {
    calificacion = "buena";
} else if (promedio > 4) {
    calificacion = "excelente";
}

console.log(`El promedio es ${promedio.toFixed(2)} y la calificación es ${calificacion}.`);