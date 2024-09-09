let tipoMensualidad = "30 días"; 
let costo;

if (tipoMensualidad === "15 días") {
    costo = 18000;
} else if (tipoMensualidad === "30 días") {
    costo = 35000;
} else if (tipoMensualidad === "3 meses") {
    costo = 86000;
} else {
    costo = 0; 
}

console.log(`El costo de la mensualidad de ${tipoMensualidad} es $${costo}.`);