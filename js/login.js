"use strict"; //usar o modo restrito


const usuario1 = {
    nomeUsuario : "rita-lee",
    senhaUsuario: "0000"
}

const usuario2 = {
    nomeUsuario : "juquinha",
    senhaUsuario: "123"
}

// console.log(usuario1.nomeUsuario);
// console.log(usuario1.senhaUsuario);
// console.log(usuario2.nomeUsuario);
// console.log(usuario2.senhaUsuario);

let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

// console.log(listaDeUsuarios);



addEventListener('click', (evento)=>{
    
    let userInput = document.querySelector("#idUser");
    let passwordInput = document.querySelector("#idPass");
    
    if(evento.target.id == "btnSubmit"){
        try{
            listaDeUsuarios.forEach((usuario)=>{
                if(userInput.value == usuario.nomeUsuario && passwordInput.value == usuario.senhaUsuario){
                    throw "Usuário VALIDO!!!";
                }
            });
            throw "Usuário ou Senha Invalido!!!"
        }
        catch (err){
            if(err == "Usuário VALIDO!!!"){
                console.log("Usuário VALIDADO!");
            }
            else{
                console.log("Usuário ou Senha INCORRETA!");
            }
        }
    }

});