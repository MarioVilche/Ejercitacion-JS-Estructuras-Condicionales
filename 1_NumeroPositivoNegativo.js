// 1. Leer una variable N de tipo entero e informar si el numero es positivo, negativo o cero y también si es par, impar o cero. El número cero no es ni positivo ni negativo ni par ni impar.

let N = -65;

if (N > 0) {
    console.log("El numero es positivo");

    if (N % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
} else if (N < 0) {
    console.log("El numero es negativo");

    if (N % 2 == 0) {
        console.log("El numero es par");
    } else {
        console.log("El numero es impar");
    }
} else {
    console.log("El numero es cero");
}