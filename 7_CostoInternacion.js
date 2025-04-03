// 7. En un hospital se ha hecho un estudio sobre los pacientes registrados durante los últimos 10 años, con el objeto de hacer una aproximación de los costos de internación por paciente.
// Se obtuvo un costo promedio diario según el tipo de enfermedad que aqueja al paciente.
// La siguiente tabla expresa los costos diarios, según el tipo de enfermedad:
//
// | Tipo de Enfermedad | Costo/Paciente/Día |
// |--------------------|--------------------|
// | 1                  | 125                |
// | 2                  | 116                |
// | 3                  | 120                |
// | 4                  | 132                |
// | 5                  | 138                |
//
// Construya un algoritmo que calcule e imprima el costo total que representa un paciente.

let tipoEnfermedad = 4;
let diasInternado = 45;
let costoDiario;
let costoTotal;

switch (tipoEnfermedad) {
    case (1): costoDiario = 125;
        break;

    case (2): costoDiario = 116;
        break;

    case (3): costoDiario = 120;
        break;

    case (4): costoDiario = 132;
        break;

    case (5): costoDiario = 138;
        break;

    default: costoDiario = 0;
        console.log("El paciente no estuvo internado en este hospital");
        break;
}

costoTotal = costoDiario * diasInternado;

console.log("El costo total para el paciente es: " + costoTotal);