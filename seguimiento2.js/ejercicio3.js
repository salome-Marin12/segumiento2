let tipoLavadora = parseInt(prompt("Ingrese 1 para lavadora grande o 2 para lavadora pequeña:"));
let horasAlquiler = parseInt(prompt("Ingrese la cantidad de horas de alquiler:"));
let cantidadLavadoras = parseInt(prompt("Ingrese la cantidad de lavadoras a alquilar:"));
let costoPorHora;
let costoTotal;
let descuento = 0;

if (tipoLavadora === 1) {
    costoPorHora = 4000;
} else if (tipoLavadora === 2) {
    costoPorHora = 3000;
}

costoTotal = costoPorHora * horasAlquiler * cantidadLavadoras;

if (cantidadLavadoras > 3) {
    descuento = costoTotal * 0.03;
    costoTotal -= descuento;
}

alert(`El costo total a pagar es $${costoTotal}, con un descuento de $${descuento}.`);