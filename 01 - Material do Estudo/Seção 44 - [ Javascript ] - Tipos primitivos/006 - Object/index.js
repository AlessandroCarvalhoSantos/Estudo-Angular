let pessoa ={
    nome: "Alessandro",
    idade: 24,
    "profissao": "Engenheiro"
}

let carro = new Object();
carro.marca = 'Toyota';
carro.modelo = 'Corolla';
carro.ano = 2020;

// Acessando propriedades
console.log(pessoa.nome); // João
console.log(pessoa['idade']); // 30

// Modificando propriedades
pessoa.idade = 31;
pessoa['profissão'] = 'Arquiteto';


let pessoaJoao = {
    nome: 'João',
    saudacao: function() {
      console.log('Olá, meu nome é ' + this.nome);
    }
  };
  
pessoaJoao.saudacao(); // Olá, meu nome é João

for (let chave in pessoa) {
    console.log(chave + ': ' + pessoa[chave]);
}

let empresa = {
    nome: 'TechCorp',
    endereco: {
      rua: 'Av. Principal',
      numero: 123,
      cidade: 'São Paulo'
    }
};
  
console.log(empresa.endereco.cidade); // São Paulo

let pessoa = {
    nome: 'João',
    saudacao: function() {
        console.log('Olá, meu nome é ' + this.nome);
    }
};
  
pessoa.saudacao(); // Olá, meu nome é João

let carro = {
    marca: 'Toyota',
    modelo: 'Corolla'
};

// Adicionando uma propriedade
carro.ano = 2020;

// Modificando uma propriedade
carro.marca = 'Honda';

// Deletando uma propriedade
delete carro.modelo;

let chaves = Object.keys(pessoa); // ['nome', 'idade', 'profissão']
let entradas = Object.entries(pessoa); // [['nome', 'João'], ['idade', 31], ['profissão', 'Arquiteto']]


let destino = {};
let fonte1 = {a: 1};
let fonte2 = {b: 2};
Object.assign(destino, fonte1, fonte2); // destino agora é {a: 1, b: 2}

let pessoa = {
    nome: 'João',
    idade: 31,
    profissão: 'Arquiteto'
  };
  
  let { nome, idade } = pessoa;
  console.log(nome); // João
  console.log(idade); // 31