// 5. Leer un valor de Día, Mes y Año de una fecha (ej.: 10-5-2003). Mostrar la fecha con el respectivo nombre del mes (ej.: 10-mayo-2003). 
// Si el número leído para el mes no está entre 1 y 12 imprimir un mensaje de error. 
// Comprobar que el día se encuentre entre 1 y 31 y el año sea mayor que 2000.

let dia = 3;
let numeroMes = 5;
let año = 2024;

let meses = {
    "1": "Enero",
    "2": "Febrero",
    "3": "Marzo",
    "4": "Abril",
    "5": "Mayo",
    "6": "Junio",
    "7": "Julio",
    "8": "Agosto",
    "9": "Septiembre",
    "10": "Octubre",
    "11": "Noviembre",
    "12": "Diciembre"
}

if (numeroMes < 1 || numeroMes > 12) {
    mesValido = false;
    console.log("Mes fuera de rango 🔴");
} else {
    mesValido = true;
    console.log("Mes 🟢");
}

if (dia < 1 || dia > 31) {
    diaValido = false;
    console.log("Día fuera de rango 🔴");
} else {
    diaValido = true;
    console.log("Día 🟢");
}

if (año < 2000) {
    añoValido = false;
    console.log("Año fuera de rango 🔴");
} else {
    añoValido = true;
    console.log("Año 🟢");
}

if (diaValido == true && mesValido == true && añoValido == true) {
    console.log(dia + "-" + meses[numeroMes] + "-" + año);
}