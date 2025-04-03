// 9. Ingresar el nombre del estudiante y la nota del examen final (Nota de tipo entero). 
// Asignar la calificación de acuerdo a las notas de la siguiente tabla:
//
// | Nota    | Calificación |
// |---------|--------------|
// | 0 - 2.9 | Desaprobado  |
// | 3 - 5.9 | Aprobado     |
// | 6 - 8.9 | Notable      |
// | 9 - 10  | Sobresaliente|

let nombreEstudiante = "Mario Vilche";
let notaExamenFinal = 5;
let calificacion;
let rangoNota = Math.floor(notaExamenFinal);

console.log("Nombre del estudiante: " + nombreEstudiante);
console.log("Nota del examen final: " + notaExamenFinal);

switch (true) {
    case (rangoNota >= 0 && rangoNota < 3):
        calificacion = "Desaprobado";
        break;
    case (rangoNota >= 3 && rangoNota < 6):
        calificacion = "Aprobado";
        break;
    case (rangoNota >= 6 && rangoNota < 9):
        calificacion = "Notable";
        break;
    case (rangoNota >= 9 && rangoNota <= 10):
        calificacion = "Sobresaliente";
        break;
    default:
        calificacion = "Nota inválida";
}

console.log("La calificación del estudiante es: " + calificacion);