//Atividade prática 01
//01
function numero(n1){
    if(n1 >= 0){
      return n1 + " Número é positivo"
    }
    else{
      return n1 + " Número é negativo"
    }
  }
  console.log(numero(-5))
  //02
  function valores(valorA, valorB, valorC ){
  if ((valorA + valorC) >= valorB ){
    return `os valores de ${valorA} + ${valorC} = ${valorA + valorC}`
  }
    else{
      return `os valores de ${valorA} + ${valorC} é igual ao menor que ${valorB}`
    }
  }
  console.log(valores(1,2,0));
  //03
  function alunos(turno){
    if (turno === 'manha'){
      return "Bom dia!";
    }
    else if (turno === 'tarde'){
      return "Boa tarde!";
    }
    else if (turno === 'noite'){
      return "Boa noite!";
    }
    else {
      return "Valor Inválido!";
    }
  }
  console.log(alunos('manha'));

  //Atividade prática 2
//01
function carros (tipos){
  if(tipos === 'hatch'){
    return "Compra efetuada com sucesso";
  }
  else if(tipos === 'sedans' || tipos === 'motocicletas' || tipos === 'caminhonetes'){
    return "Tem certeza que não prefere este modelo?"
  }
  else {
     return "Não trabalhamos com este tipo de automóvel aqui"
  }
}
console.log(carros('sedans'))
//02
function tiposDeTriangulo (a, b, c){
  if(a === b && c === a && b === c){
    return "O triângulo é equilátero"
  }
  else if(a !== b && c !== a && b !== c){
    return "O triângulo é escaleno"
  }
  else {
    return "O triângulo é isósceles"
  }
}
console.log(tiposDeTriangulo (1, 5, 8));
//03 
function numeroPositivo(n1){
  if(n1 < 0){
    return 'Número é negativo'
  }
  else{
    return 'Número é positivo'
  }
}
console.log(numeroPositivo(8));
  