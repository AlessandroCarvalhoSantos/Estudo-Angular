// Declaração de variáveis booleanas
let estaChovendo = true;
let estaEnsolarado = false;

// Comparações
let temperatura = 30;
let estaQuente = (temperatura > 25);
console.log(estaQuente); // true

// Operadores lógicos
let podeSair = estaChovendo && estaEnsolarado;
console.log(podeSair); // false

podeSair = estaChovendo || estaEnsolarado;
console.log(podeSair); // true

// Conversão para booleano
console.log(Boolean("")); // false
console.log(Boolean("JavaScript")); // true

// Uso em condicionais
if (estaChovendo) {
  console.log("Leve um guarda-chuva.");
} else {
  console.log("Ótimo dia para sair!");
}

// Operador ternário
let status = estaChovendo ? "Chovendo" : "Ensolarado";
console.log(status); // "Chovendo"
