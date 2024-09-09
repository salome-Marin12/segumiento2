let nombre = "Salo marin";
let horasTrabajadas = 12;
let salario;

if (horasTrabajadas <= 10) {
    salario = horasTrabajadas * 30000;
} else {
    salario = horasTrabajadas * 33000;
}

console.log(`Señor(a) ${nombre}, el número de horas es ${horasTrabajadas} y su salario equivale a $${salario}`);