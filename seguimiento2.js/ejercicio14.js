let tamano = "grande"; // Puede ser "pequeño" o "grande"
let ingredientes = ["queso", "tocineta", "pavo"]; // Lista de ingredientes adicionales

let costoTamano;
let costoIngredientes = 0;

if (tamano === "pequeño") {
    costoTamano = 6000;
} else if (tamano === "grande") {
    costoTamano = 12000;
}

if (ingredientes.includes("tocineta") || ingredientes.includes("pavo")) {
    costoIngredientes += 3000;
}
if (ingredientes.includes("queso")) {
    costoIngredientes += 2500;
}

let costoTotal = costoTamano + costoIngredientes;

console.log(`Costo del sándwich (${tamano}): $${costoTamano}`);
console.log(`Costo de ingredientes adicionales: $${costoIngredientes}`);
console.log(`Total a pagar: $${costoTotal}`);