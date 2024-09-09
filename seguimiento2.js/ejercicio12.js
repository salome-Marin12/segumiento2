let numeroModelo = 178; 
let modelosDefectuosos = [119, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 221, 780];

if (modelosDefectuosos.includes(numeroModelo)) {
    console.log("El automóvil está defectuoso, llevar a garantía.");
} else {
    console.log("Su automóvil no está defectuoso.");
}