/*
    O HOISTING ou elevação, coloca todas as VAR no topo do programa. Isso faz com que se existirem variáveis com o mesmo nome, eles se sobrepoem, independente do lugar no código.


    VAR é um valor que pode ser alterado, mas pode ser alterado em qualquer parte do código, por causa do HOISTING.
    
    LET ele é um valor variável, mas ele só pode ser alterado no mesmo bloco, sendo diferente do VAR
    
    CONST é um valor que não pode ser alterado quando está sendo executado, PRECISA SER INICIALIZADO
*/

// var nome = "Luizinho";
// let nome2 = "Vitinho";
// const nome3 = "Miguelito";

// console.log(nome);
// console.log(nome2);
// console.log(nome3);

// if(nome != ""){
//     let nome = "Nicolly"
// }

// console.log("Qual nome vai ser impresso aqui!?", nome);






// let n1 = 10;
// let n2 = 5;

// // IF TERNÁRIO - descobrir se o número é par ou impar
// // ele verifica 0 e 1, onde o 0 é negativo, condição falsa, aplicando o else (impar)
// let resultado = !(n1 % n2) ? "PAR" : "IMPAR"

// console.log(resultado);





// Recuperar um elemento do HTML com a função getElementById(parâmetro);

const mn = document.getElementById("menu");

console.log(mn.textContent);


