let numero = parseInt(prompt("Ingrese un número:"));
let resultado;

if (numero % 2 === 0) {
    resultado = "par";
} else {
    resultado = "impar";
}
alert(`El número ${numero} es ${resultado}.`);