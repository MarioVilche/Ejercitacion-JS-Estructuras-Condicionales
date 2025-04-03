// 3. Ordenar en forma creciente tres valores diferentes A, B, C.

let A = 45;
let B = 236;
let C = 105;

if (A < B && A < C) {
    console.log(A);
    if (B < C) {
        console.log(B);
        console.log(C);
    } else {
        console.log(C);
        console.log(B);
    }
} else if (B < A && B < C) {
    console.log(B);
    if (A < C) {
        console.log(A);
        console.log(C);
    } else {
        console.log(C);
        console.log(A);
    }
} else {
    console.log(C);
    if (C < B) {
        console.log(B);
        console.log(A);
    } else {
        console.log(A);
        console.log(B);
    }
}