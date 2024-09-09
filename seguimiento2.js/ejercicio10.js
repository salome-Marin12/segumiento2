let copias = 800; 
let precioPorCopia;
let precioTotal;

if (copias >= 0 && copias <= 499) {
    precioPorCopia = 120;
} else if (copias >= 500 && copias <= 749) {
    precioPorCopia = 100;
} else if (copias >= 750 && copias <= 999) {
    precioPorCopia = 80;
} else if (copias >= 1000) {
    precioPorCopia = 50;
}

precioTotal = copias * precioPorCopia;

console.log(`Precio por copia: $${precioPorCopia}`);
console.log(`Precio total: $${precioTotal}`);