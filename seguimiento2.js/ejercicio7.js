let genero = "femenino"; // Puedes usar "masculino" o "femenino"
let edad = 55; // Edad de la persona
let apoyo;

if (genero === "femenino") {
    if (edad > 50) {
        apoyo = 120000;
    } else if (edad >= 30 && edad <= 50) {
        apoyo = 100000;
    } else {
        apoyo = 0;
    }
} else {
    apoyo = 40000;
}

console.log(`El valor recibido mensual es $${apoyo}.`);