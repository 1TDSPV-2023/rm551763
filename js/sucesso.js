

//ATRAVÉS DO OBJETO 


if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#bemvindo-user");
    const botaoLogout = document.querySelector("#btnSair");
    const imgUsuario = document.querySelector("img");
    const legendaUsuario = document.querySelector("#legenda");


    //RECUPERANDO O OBJETO USER-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    imgUsuario.setAttribute("src", usuarioValidado.avatarUsuario);
    imgUsuario.setAttribute("alt", "Imagem do usuario " + usuarioValidado.nomeCompleto);
    legendaUsuario.textContent = "Usuario Logado -> " + usuarioValidado.nomeCompleto;


    //REMOVENDO OS ITENS DO LOCAL-STORAGE
    botaoLogout.addEventListener("click", ()=>{
        localStorage.removeItem("user-validado");
        localStorage.removeItem("user-token");
        window.location.href = "../login.html";
    });
}
else{
    alert("Você precisa estar logado para acessar esta página!")
    window.location.href = "../login.html";
}
