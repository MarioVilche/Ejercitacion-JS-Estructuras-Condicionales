// 8. En una tienda de descuento se efectúa una promoción en la cual se hace un descuento sobre el valor de la compra total según el color de la bolita que el cliente saque al pagar en caja. 
// Si la bolita es de color blanco no se le hará descuento alguno, si es verde se le hará un 10% de descuento, si es amarilla un 25%, si es azul un 50% y si es anaranjada un 100%. 
// Determinar la cantidad final que el cliente deberá pagar por su compra si se sabe que solo hay bolitas de los colores mencionados.

let valorCompraTotal = 3700;
let descuento;
let valorFinal;
let porcentajeDescuento;
let colorBolita = ["blanco", "verde", "amarillo", "azul", "naranja", "ninguno"];
let color = Math.floor(Math.random() * colorBolita.length);

console.log("Valor total de la compra: " + valorCompraTotal);
console.log("El color de tu bolita es " + colorBolita[color]);

switch (colorBolita[color]) {
    case ("blanco"):
        porcentajeDescuento = 0;
        console.log("Lamentablemente no obtuviste ningún descuento 😅");
        break;
    case ("verde"):
        porcentajeDescuento = 0.10;
        console.log("¡Obtuviste un 10% de descuento!");
        break;
    case ("amarillo"):
        porcentajeDescuento = 0.25;
        console.log("¡Obtuviste un 25% de descuento!");
        break;
    case ("azul"):
        porcentajeDescuento = 0.50;
        console.log("¡Obtuviste un 50% de descuento!");
        break;
    case ("naranja"):
        porcentajeDescuento = 1;
        console.log("¡Felicidades! Obtuviste un 100% de descuento 😱");
        break;
    default:
        porcentajeDescuento = 0;
        console.log("No quedan mas bolitas 😢");
}

descuento = valorCompraTotal * porcentajeDescuento;
valorFinal = valorCompraTotal - descuento;

console.log("El precio final es de: $" + valorFinal);