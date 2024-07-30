let a;
console.log(a); // undefined

let obj = {};
console.log(obj.name); // undefined

function checkParam(param) {
  if (typeof param === 'undefined') {
    console.log("Parâmetro não fornecido");
  } else {
    console.log("Parâmetro fornecido:", param);
  }
}
checkParam(); // "Parâmetro não fornecido"
checkParam(5); // "Parâmetro fornecido: 5"

let b;
console.log(b); // undefined

let objeto = {};
console.log(objeto.name); // undefined

function checkParam(param) {
  if (typeof param === 'undefined') {
    console.log("Parâmetro não fornecido");
  } else {
    console.log("Parâmetro fornecido:", param);
  }
}
checkParam(); // "Parâmetro não fornecido"
checkParam(5); // "Parâmetro fornecido: 5"
