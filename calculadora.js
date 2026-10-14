//FUNÇÃO SOMAR
function somar(a, b) {
  return a + b;

}

//FUNÇÃO SUBTRAIR
function subtrair (a, b){
    return a - b;
}

//FUNÇÃO MULTIPLICAR
function multiplicar(a, b) {
  return a * b;
}

//FUNÇÃO DIVIDIR
function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}

module.exports = { multiplicar, dividir, somar, subtrair };