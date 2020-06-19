// Importe a biblioteca ##
let rs = require('readline-sync');

// Perguntar se o usuário está usando máscara quando precisa sair de casa (Sim ou Não)
// Perguntar se o usuário está lavando as mãos frequentemente
// Se o usuário responder sim para as perguntas anteriores, mostrar um elogio para o usuário
// Se não, dar bronca no usuário

let respostaUsandoMascara = rs.question('Está usando máscara (Sim ou Nao)?\n ');
let respostaLavandoMaos   = rs.question('está lavando as maos frequentemente (Sim ou Nao)?\n')

if ((respostaUsandoMascara == "sim" ) && (respostaLavandoMaos == "sim")) {
    console.log('Parabens\n');
}
else{
    console.log('SHAME ON YOU\n');
}
