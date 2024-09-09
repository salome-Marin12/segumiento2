function obtenerCarta() {
    return Math.floor(Math.random() * 10) + 1;
}

function calcularPuntuacion(cartas) {
    return cartas.reduce((total, carta) => total + carta, 0);
}

let cartasUsuario = [obtenerCarta(), obtenerCarta()];
let cartasComputadora = [obtenerCarta(), obtenerCarta()];
let cartaAdicionalUsuario;
let cartaAdicionalComputadora;

alert(`Tus cartas iniciales: ${cartasUsuario.join(", ")} (Total: ${calcularPuntuacion(cartasUsuario)})`);
alert("La máquina tiene cartas ocultas.");

let decision = prompt("¿Quieres una carta adicional? (s/n)");

if (decision === "s") {
    cartaAdicionalUsuario = obtenerCarta();
    cartasUsuario.push(cartaAdicionalUsuario);
    alert(`Tu nueva carta: ${cartaAdicionalUsuario}`);
}

cartaAdicionalComputadora = obtenerCarta();
cartasComputadora.push(cartaAdicionalComputadora);

let puntuacionUsuario = calcularPuntuacion(cartasUsuario);
let puntuacionComputadora = calcularPuntuacion(cartasComputadora);

alert(`Tus cartas finales: ${cartasUsuario.join(", ")} (Total: ${puntuacionUsuario})`);
alert(`Cartas de la máquina: ${cartasComputadora.join(", ")} (Total: ${puntuacionComputadora})`);

if (puntuacionUsuario > 21 && puntuacionComputadora > 21) {
    alert("Ambos jugadores han superado 21. Es un empate.");
} else if (puntuacionUsuario > 21) {
    alert("Has superado 21. La máquina gana.");
} else if (puntuacionComputadora > 21) {
    alert("La máquina ha superado 21. ¡Tú ganas!");
} else if (puntuacionUsuario > puntuacionComputadora) {
    alert("¡Tú ganas!");
} else if (puntuacionUsuario < puntuacionComputadora) {
    alert("La máquina gana.");
} else {
    alert("Es un empate.");
}