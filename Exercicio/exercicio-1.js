//EXERCICIO 1 DA LISTA

const button = document.querySelector("#botao");
const buttonVolta = document.querySelector('#tirarCor');
const body = document.querySelector("body");


button.addEventListener('click', ()=>{
    body.setAttribute('style', 'background-color: #ff00ff');
});

buttonVolta.addEventListener('click', ()=>{
    body.setAttribute('style', 'background-color: #fff');
});

/* --------------------------------------------------------------- */



//EXERCICIO 2 DA LISTA

//seleciona o elemento #botaoEnviar e insere na const botaoEnviar
const botaoEnviar = document.querySelector("#botaoEnviar");

// seleciona o elemento #lista e insere na const lista
const lista = document.querySelector("#lista");

// cria um evento click com base no botaoEnviar
botaoEnviar.addEventListener('click', ()=>{
    // pega o elemento através do id, pega o valor dele e insere na inputDados
    const inputDados = document.getElementById("enterData").value;
    
    // cria um elemento li, jogando dentro da variavel newItem
    const newItem = document.createElement('li');

    // o conteúdo do newItem receberá o conteudo da variavel inputDados
    newItem.textContent = inputDados;

    // inserirá um novo nó/conteudo na lista, com o conteúdo do newItem
    lista.appendChild(newItem);
});



/* ------------------------------------------------------------------ */

//EXERCICIO 3 DA LISTA
const imagem = document.getElementById("imagem")
const botaoTrocar = document.querySelector("#botaoMudarImagem");

botaoTrocar.addEventListener('click', function(){
    imagem.src = "../img/lobo1.jpg";
});

/* ------------------------------------------------------------------ */

//EXERCICIO 4 DA LISTA
const botaoExibir = document.querySelector("#buttonShow");
const elemento = document.querySelector("#elemento");

botaoExibir.addEventListener('click', ()=>{
    const newElement = document.createElement('p');
    const msg = "O alê é daora demais, slk!";
    
    newElement.textContent = msg;

    elemento.appendChild(newElement);
});

/* ------------------------------------------------------------------ */

//EXERCICIO 5 DA LISTA
const botaoOcultar = document.querySelector("#buttonOcultar");
const algumElemento = document.querySelector("#algumElemento");

botaoOcultar.addEventListener('click', function(){
    algumElemento.style.display = "none";
});