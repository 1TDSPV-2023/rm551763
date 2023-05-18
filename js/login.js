"use strict"; //usar o modo restrito


// MOSTRAR SENHA



//USUARIOS VALIDOS
// const usuario1 = {
//     nomeUsuario : "rita-lee",
//     senhaUsuario: "0000"
// }

// const usuario2 = {
//     nomeUsuario : "juquinha",
//     senhaUsuario: "123"
// }

// console.log(usuario1.nomeUsuario);
// console.log(usuario1.senhaUsuario);
// console.log(usuario2.nomeUsuario);
// console.log(usuario2.senhaUsuario);

// let listaDeUsuarios = [];
// listaDeUsuarios.push(usuario1);
// listaDeUsuarios.push(usuario2);

// console.log(listaDeUsuarios);


let listaDeUsuarios = [
    {
        nomeCompleto : "José das Couves",
        nomeUsuario : "jose",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "João Paulino",
        nomeUsuario : "joao",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Maria Tomate",
        nomeUsuario : "maria",
        senhaUsuario : "123456"
    },
    {
        nomeCompleto : "Paulo da Selva",
        nomeUsuario : "paulo",
        senhaUsuario : "123456"
    },
];

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));






addEventListener('click', (evento)=>{
    
    let userInput = document.querySelector("#idUser");
    let passwordInput = document.querySelector("#idPass");
    let eyePass = document.querySelector(".fa");
    
    //MOSTRAR SENHA
    if(evento.target.className == "fa fa-eye" || evento.target.className == "fa fa-eye-slash"){
        
        evento.target.setAttribute("style", "cursor: pointer;");

        if(passwordInput.getAttribute("type") == "password"){
            passwordInput.setAttribute("type", "text");
            eyePass.setAttribute("class", "fa fa-eye-slash");
        }
        else{
            passwordInput.setAttribute("type", "password");
            eyePass.setAttribute("class", "fa fa-eye");
        }
    }

    let listaDeUsuariosRecuperada = JSON.parse(localStorage.getItem("listaUser"));


    if(evento.target.id == "btnSubmit"){
        try{
            listaDeUsuariosRecuperada.forEach((usuario)=>{
                if(userInput.value == usuario.nomeUsuario && passwordInput.value == usuario.senhaUsuario){
                    throw "Usuário VALIDO!!!";
                }
            });
            throw "Usuário ou Senha Invalido!!!"
        }
        catch (err){
            if(err == "Usuário VALIDO!!!"){
                console.log("Usuário VALIDADO!");
                window.location.href = "../sucesso.html";
            }
            else{
                console.log("Usuário ou Senha INCORRETA!");
            }
        }
    }

});