let numero1 = 5;
let numero2 = 8;
let numero3 = 3;

let mayor;

if (numero1 >= numero2 && numero1 >= numero3) {
    mayor = numero1;
} else if (numero2 >= numero1 && numero2 >= numero3) {
    mayor = numero2;
} else {
    mayor = numero3;
}

console.log(`El número mayor es ${mayor}.`);