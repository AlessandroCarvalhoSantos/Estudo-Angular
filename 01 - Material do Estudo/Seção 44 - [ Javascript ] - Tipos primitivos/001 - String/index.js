let saudacaoMundo = "Olá, Mundo!";
let nome = 'João';
let mensagem = `Olá, ${nome}!`; // String template (template literals)


let primeiroNome = "Maria";
let ultimoNome = "Silva";
let idade = 28;

// Concatenação de strings
let nomeCompleto = primeiroNome + " " + ultimoNome;
console.log(nomeCompleto); // "Maria Silva"

// Usando strings template
let saudacao = `Olá, meu nome é ${nomeCompleto} e eu tenho ${idade} anos.`;
console.log(saudacao); // "Olá, meu nome é Maria Silva e eu tenho 28 anos."

// Métodos de string
console.log(saudacao.toUpperCase()); // "OLÁ, MEU NOME É MARIA SILVA E EU TENHO 28 ANOS."
console.log(saudacao.indexOf("nome")); // 9
console.log(saudacao.includes("Silva")); // true
console.log(saudacao.split(" ")); // ["Olá,", "meu", "nome", "é", "Maria", "Silva", "e", "eu", "tenho", "28", "anos."]


//Utilizando o objeto String.
let textoConvertido  = String(5);
console.log(textoConvertido);

// Declaração de strings primitivas e objetos String
let primitiva = "Olá, Mundo!";
let objetoString = new String("Olá, Mundo!");

// Comparação entre strings primitivas e objetos String
console.log(primitiva === "Olá, Mundo!"); // true
console.log(objetoString === new String("Olá, Mundo!")); // false

// Propriedade length
console.log(primitiva.length); // 11
console.log(objetoString.length); // 11

// Acessar caracteres individuais
console.log(primitiva[0]); // "O"
console.log(objetoString.charAt(0)); // "O"

// Convertendo para maiúsculas e minúsculas
console.log(primitiva.toUpperCase()); // "OLÁ, MUNDO!"
console.log(objetoString.toLowerCase()); // "olá, mundo!"

// Encontrando a posição de uma substring
console.log(primitiva.indexOf("Mundo")); // 5
console.log(objetoString.indexOf("JavaScript")); // -1

// Extraindo substrings
console.log(primitiva.substring(0, 3)); // "Olá"
console.log(objetoString.slice(5, 10)); // "Mundo"

// Substituindo partes da string
let novaString = primitiva.replace("Mundo", "JavaScript");
console.log(novaString); // "Olá, JavaScript!"

// Dividindo uma string em um array
let frutas = "Maçã, Banana, Cereja";
let arrayFrutas = frutas.split(", ");
console.log(arrayFrutas); // ["Maçã", "Banana", "Cereja"]

// Removendo espaços em branco
let espacos = "   JavaScript   ";
console.log(espacos.trim()); // "JavaScript"

// Usando String Template (Template Literals)
let nomePessoa = "João";
let idadePessoa = 30;
let mensagemPessoa = `Meu nome é ${nomePessoa} e eu tenho ${idadePessoa} anos.`;
console.log(mensagemPessoa); // "Meu nome é João e eu tenho 30 anos."

// Trabalhando com objetos String
let strObjeto = new String("JavaScript é poderoso");
console.log(strObjeto.length); // 22
console.log(strObjeto.charAt(0)); // "J"
console.log(strObjeto.indexOf("poderoso")); // 14
console.log(strObjeto.substring(0, 10)); // "JavaScript"

// Usando métodos de objetos String
console.log(strObjeto.toUpperCase()); // "JAVASCRIPT É PODEROSO"
console.log(strObjeto.toLowerCase()); // "javascript é poderoso"

// Utilizando match e replace com regex
let texto = "O preço é R$ 100,00";
let regex = /\d+/;
console.log(texto.match(regex)); // ["100"]
console.log(texto.replace(regex, "200")); // "O preço é R$ 200,00"

// Verificando se uma string contém outra string
console.log(primitiva.includes("Mundo")); // true
console.log(objetoString.includes("JavaScript")); // false

// Verificando o início e o fim de uma string
console.log(primitiva.startsWith("Olá")); // true
console.log(objetoString.endsWith("!")); // true
