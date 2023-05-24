

//ATRAVÉS DO OBJETO 


if(localStorage.getItem("user-token") != null){
    const bemVindoEl = document.querySelector("#bemvindo-user");
    const botaoLogout = document.querySelector("#btnSair");
    const imgUsuario = document.querySelector("#imgUsuario");
    console.log(imgUsuario);


    //RECUPERANDO O OBJETO USER-VALIDADO DO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    bemVindoEl.innerHTML = usuarioValidado.nomeCompleto;
    imgUsuario.setAttribute("src", usuarioValidado.avatarUsuario);

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
