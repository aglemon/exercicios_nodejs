// ## Importe a biblioteca ##
let rs = require('readline-sync');

//Criar uma aplicação que informe o signo do usuárioexe
//A aplicação deve:
//Perguntar ao usuário sua data de nascimento
//Informar ao usuário qual o seu signo com base na sua data de nascimento ## Faça o código ##

let dia = rs.questionInt("digite um dia do mes?\n");

let mes = rs.questionInt('Digite um Mes de 1 a 12\n');

let signo;

// SIGNO                PERIODO
// Capricórnio:  de 22 dezembro a 20 janeiro
// Aquário:      de 21 janeiro a 18 fevereiro
// Peixes:       de 19 fevereiro a 20 março
// Áries:        de 21 março a 20 abril
// Touro:        de 21 abril a 20 maio
// Gêmeos:       de 21 maio a 20 junho
// Câncer:       de 21 junho a 22 julho
// Leão:         de 23 julho a 22 agosto
// Virgem:       de 23 agosto a 22 setembro
// Libra:        de 23 setembro a 22 outubro
// Escorpião:    de 23 outubro a 21 novembro
// Sagitário:    de 22 novembro a 21 dezembro


// 1	Janeiro	tem 31 dias
// 2	Fevereiro	tem 28 dias (29 dias nos anos bissextos)
// 3	Março	    tem 31 dias
// 4	Abril	    tem 30 dias
// 5	Maio	    tem 31 dias
// 6	Junho	    tem 30 dias
// 7	Julho	    tem 31 dias
// 8	Agosto	    tem 31 dias
// 9	Setembro	tem 30 dias
// 10	Outubro	tem 31 dias
// 11	Novembro	tem 30 dias
// 12	Dezembro	tem 31 dias




switch (mes) {
    case 1 : /* JANEIRO */
        /*if (dia >= 21) {
            console.log("aquario")
        }
        else
        {
            console.log("capricornio")
        } MESMA COISA*/

        /** OPERADOR TERNARIO
         *  (CONDICAO) ? SE FOR VERDADEIRO FAÇA AQUI : SE FOR FALSO FAÇA AQUI;
         * 
        */

        if ((dia < 1 ) || ( dia > 31))
        {
            console.log("Janeiro possui 31 dias. Por favor digite um numero correspondente a um dia de janeiro.")
        }
        else
        {
            if (dia >= 21) 
            {
                console.log("Aquario")
            }
            else{
                console.log("Capricornio");
            }
        }
        break
    case 2 : /* FEVEREIRO */
        (dia >= 19) ? console.log("Peixes") : console.log("Aquario");
        break
    case 3 : /* MARÇO */
        (dia >= 22) ? console.log("Aries") : console.log("Peixes");
        break
    case 4 :
        (dia >= 22) ? console.log("Touro") : console.log("Aries");
        break
    case 5 :
        (dia >= 23) ? console.log("Gemeos") : console.log("Touro");
        break
    case 6 :
        (dia >= 23) ? console.log("Cancer") : console.log("Gemeos");
        break
    case 7 :
        (dia >= 23) ? console.log("Leao") : console.log("Cancer");
        break
    case 8 :
        (dia >= 23) ? console.log("Virgem") : console.log("Leao");
        break
    case 9 : 
        (dia >= 21) ? console.log("Libra") : console.log("Virgem");
        break
    case 10 :
        (dia >= 21) ? console.log("Escorpião") : console.log("Libra");
        break
    case 11 :
        (dia >= 21) ? console.log("Sagitario") : console.log("Escorpião");
        break
    case 12 :
        (dia >= 21) ? console.log("Capricornio") : console.log("Sagitario");
        break

    default :
        console.log("nao encontrado")
        break

    }


