//O que deve ser utilizado: variáveis, operadores, laços de repetição, estruturas de decisão

//Objetivo: crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

let nome = "felipao"
let XP = 2.000

switch (XP){case 0 < 1.000:
    console.log("O Herói "+nome," está no nível Ferro")
    break

    case 1.001 > 2.000:
    console.log("O Herói "+nome," está no nível Bronze")
    break

    case 2.001 > 5.000:
    console.log("O Herói "+nome," está no nível Prata")
    break

    case 5.001 > 7.000:
    console.log("O Herói "+nome, " está no nível Ouro")
    break

    case 7.001 > 8.000:
    console.log("O Herói "+nome, " está no nível Platina")
    break

    case 8.001 > 9.000:
    console.log("O Herói "+nome, " está no nível Ascendente")
    break

    case 9.001 > 10.000:
    console.log("O Herói "+nome, " está no nível Imortal")
    break

    default:
    console.log("O Herói "+nome, " está no nível Radiante")
    break
}

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
//Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000 = Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//Saída - Ao final deve se exibir uma mensagem: O Herói de nome **{nome}** está no nível de **{nível}**
