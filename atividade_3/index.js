// ## Importe a biblioteca ##
let rs = require('readline-sync');

// Criar uma aplicação que calcula a área de um quadrado
// A aplicação deve:
// Perguntar para o usuário o tamanho dos lados dos quadrado
// Calcular sua área
// Informar a área calculada ao usuário## Faça o código ##
let ladoDoQuadrado = rs.question('Qual o tamanho dos lados do quadrado?\n');

// area = L elevado a 2
let areaDoQuadrado = Math.pow(ladoDoQuadrado, 2);

console.log('A area total do quadrado e ' + areaDoQuadrado);



