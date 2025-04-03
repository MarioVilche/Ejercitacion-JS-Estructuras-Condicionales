// 4. Escribir un algoritmo que con solo ingresar los lados de un triángulo rectángulo le dice al usuario si es isósceles, escaleno o equilátero.

let lado1 = 194;
let lado2 = 89;
let lado3 = 45;

if (lado1 === lado2 && lado2 === lado3) {
    console.log("El triángulo es Equilatero");
} else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("El triángulo es Isósceles");
} else {
    console.log("El triángulo es Escaleno");
}

