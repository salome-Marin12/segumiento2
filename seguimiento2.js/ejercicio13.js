let operador = "Claro"; // Puede ser "Tigo", "Claro" o "Movistar"
let minutosInternacionales = 10; // Cantidad de minutos internacionales consumidos

let cargoFijo;
let valorMinutoInternacional;
let valorPaqueteDatos;
let costoTotal;

if (operador === "Tigo") {
    cargoFijo = 45000;
    valorMinutoInternacional = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "Claro") {
    cargoFijo = 30000;
    valorMinutoInternacional = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "Movistar") {
    cargoFijo = 40000;
    valorMinutoInternacional = 250;
    valorPaqueteDatos = 8000;
}

costoTotal = cargoFijo + (minutosInternacionales * valorMinutoInternacional);

console.log(`Operador: ${operador}`);
console.log(`Cargo fijo: $${cargoFijo}`);
console.log(`Valor minuto internacional: $${valorMinutoInternacional}`);
console.log(`Valor paquete de datos: $${valorPaqueteDatos}`);
console.log(`Total a pagar por minutos internacionales: $${costoTotal}`);