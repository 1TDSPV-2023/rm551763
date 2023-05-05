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
    // const mn = document.getElementById("menu");
    // console.log(mn.textContent);





//                 AULA 18 - 02/05    AULA 18 - 02/05    AULA 18 - 02/05
//                 AULA 18 - 02/05    AULA 18 - 02/05    AULA 18 - 02/05

//Declarando uma array em JavaScript
    // let n1 = [1, 2, 3, 4, 5];
    // let n2 = [6, 7, 8, 9, 10];
    // let n3 = [n1, n2];
    // console.log(n1);
    // console.log(n2);


// operador SPREAD ...
    // let n3 = [...n1,...n2];

    // n3.forEach( (numero)=>{
    //     console.log("Item do Array : " + numero);
    // } );


// Recuperando uma colection de elementos...
    // const aElements = document.getElementsByTagName("a");
    // const aElementsArray = [...aElements];
    // aElementsArray.forEach((a)=>{
    //     console.log(a);
    // });


//Recupere uma coleção de imagens da página e imprima o atributo SRC...
    // const imgElements = [...document.getElementsByTagName("img")];
    // imgElements.forEach((img)=>{
    //     console.log(`Path das imagens: ${img.src}`);
    // });


//Exibir um alert quando ele detectar um evento de click no botão
    // const botao = document.querySelector("div > button");
    // console.log(botao);
    // botao.addEventListener("click", ()=>{
    //     alert("GoodBye My Friend!!!");
    // });

/* ANOTAÇÕES DA AULA 18 - 02-05
    
    "()" variavel que receberá o conteúdo da iteração (uma volta do loop)
    
    "<>"" - esteriótipo de uma coleção de array, vem antes de ()
    
    "SPREAD" - pega um array e espalha o conteudo
    
    "forEach" - loop para exibir cada elemento dentro de um outro elemento/variável (tipo python com o For)

    querySelector - Pega o elemento com base no texto do css

*/







// AULA 19 - [04-05]   AULA 19 - [04-05]   AULA 19 - [04-05]   AULA 19 - [04-05]
// AULA 19 - [04-05]   AULA 19 - [04-05]   AULA 19 - [04-05]   AULA 19 - [04-05]


//MANIPULAÇÃO DOS DADOS DO ARRAY:

let frutas = ["Manga", "Banana", "Laranja", "Maçã", "Melancia", "Framboesa"];

        /* INSERÇÃO DE DADOS NO DINAL DO ARRAY [".push"] */
    // frutas.push("kiwi");
    // console.log(frutas);


        /* INSERÇÃO DE DADOS NO INICIO DO ARRAY [".unshift"] */
    // frutas.unshift("Melão");
    // console.log(frutas);


        /* REMOVER ITEM NO FINAL DO ARRAY [".pop"] */
    // frutas.pop();
    // console.log(frutas);


        /* REMOVER ITEM NO INICIO DO ARRAY [".shift"] */
    // frutas.shift();
    // console.log(frutas);


        /* BUSCA DE UM ITEM NO ARRAY [".indexOf(item)"]
           indexOf retorna o indice do item, ou seja, a posição dele no array */
    // let indice = frutas.indexOf("Banana");
    // console.log(indice);


        /* REMOVER UM ITEM DO ARRAY 
           EM CONJUNTO COM O indexOf 
           [".splice(<indice>, <qtd vzs será removido>)"] */
    // console.log("Frutas ANTES de remover LARANJA = " + frutas)

    // let indice = frutas.indexOf("Laranja");
    // console.log("Laranja está na posição: " + indice);

    // frutas.splice(indice, 1);
    // console.table("Frutas DEPOIS de remover LARANJA = " + frutas);



        /* ESTRUTURA DE REPETIÇÃO PARA ITERAÇÃO DE COLLECTIONS */
    // const aElements = document.querySelectorAll("a");
    // for(let x = 0; x < aElements.length; x++){
    //     console.log("Valor = " + aElements[x].textContent);
    // }


        /* forOf 
        Ele gera um item do array e você pode exibir ele */
    // for (const fruta of frutas) {
    //     console.log("Frutas: " + fruta);
    // }

    
        /* forIn 
        Ele pega o lugar do item dentro do array, mas colocando [indice], ele pega o indice no array e puxa o nome do objeto */
    // for (const indice in frutas) {
    //     console.log("Fruta: " + frutas[indice]);
    // }
    
    
        /* MAP 
        Ele necessita de uma ArrowFunction, atribuindo o valor na variavel, MAIS COMPLETO*/
    // frutas.map( (fruta, key)=>{
    //     console.log(`Fruta nº${key+1} = ${fruta}`);
    // } );



const inputUser = document.querySelector("#idUser");
inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color: #ff0000;")
});