// 6. Escribir un algoritmo que permita dada la fecha de nacimiento de una persona saber cuál es su signo zodiacal.

let dia = 5;
let mes = 5;
let año = 1994;

if (dia >= 21 && mes === 3 || dia <= 19 && mes === 4) {
    console.log("Aries");
}
else if (dia >= 20 && mes === 4 || dia <= 20 && mes === 5) {
    console.log("Tauro");
}
else if (dia >= 21 && mes === 5 || dia <= 20 && mes === 6) {
    console.log("Géminis");
}
else if (dia >= 21 && mes === 6 || dia <= 20 && mes === 7) {
    console.log("Cáncer");
}
else if (dia >= 23 && mes === 7 || dia <= 22 && mes === 8) {
    console.log("Leo");
}
else if (dia >= 23 && mes === 8 || dia <= 22 && mes === 9) {
    console.log("Virgo");
}
else if (dia >= 23 && mes === 9 || dia <= 22 && mes === 10) {
    console.log("Libra");
}
else if (dia >= 23 && mes === 10 || dia <= 21 && mes === 11) {
    console.log("Escorpio");
}
else if (dia >= 22 && mes === 11 || dia <= 21 && mes === 12) {
    console.log("Sagitario");
}
else if (dia >= 22 && mes === 12 || dia <= 19 && mes === 1) {
    console.log("Capricornio");
}
else if (dia >= 20 && mes === 1 || dia <= 18 && mes === 2) {
    console.log("Acuario");
}
else if (dia >= 19 && mes === 2 || dia <= 20 && mes === 3) {
    console.log("Piscis");
} else {
    console.log("Fecha no valida");
}