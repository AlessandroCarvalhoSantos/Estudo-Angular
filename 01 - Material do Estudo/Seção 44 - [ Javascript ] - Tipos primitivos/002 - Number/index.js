// Declaração de números
let inteiro = 42;
let decimal = 3.14;

// Operações aritméticas
console.log(inteiro + decimal); // 45.14
console.log(inteiro - decimal); // 38.86
console.log(inteiro * decimal); // 131.88
console.log(inteiro / decimal); // 13.375
console.log(inteiro % decimal); // 0.5800000000000001

// Valores especiais
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(Math.sqrt(-1)); // NaN

// Métodos globais do tipo Number
console.log(Number.isFinite(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseInt("101", 2)); // 5

// Métodos de instância do tipo Number
let num = 12345.6789;
console.log(num.toFixed(2)); // "12345.68"
console.log(num.toExponential(2)); // "1.23e+4"
console.log(num.toPrecision(6)); // "12345.7"

// Valores máximos e mínimos
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991



//Falando sobre typeof
