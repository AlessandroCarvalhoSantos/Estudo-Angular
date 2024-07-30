let frutas = ['Maçã', 'Banana', 'Laranja'];
let numeros = new Array(1, 2, 3, 4, 5);

numeros = new Array(1, "Teste", true);
frutas = [1, "Teste", true];

frutas = ['Maçã', 'Banana', 'Laranja'];
console.log(frutas[0]); // Maçã
console.log(frutas[1]); // Banana

frutas.push('Manga');
frutas.pop();
frutas.shift();
frutas.unshift('Morango');

let pos = frutas.indexOf('Banana');
frutas.splice(1, 1); // Remove um elemento na posição 1
let citricos = frutas.slice(1, 3);

frutas.forEach(function(item, index) {
    console.log(item, index);
});

numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map(function(numero) {
  return numero * 2;
});


console.log(frutas.length); // 3
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matriz[1][2]); // 6

  for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }

  for (let fruta of frutas) {
    console.log(fruta);
  }

  frutas.forEach(function(fruta) {
    console.log(fruta);
  });