function inserirNumeroNoVisor(botao, visor){
    
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/"){

        if(visor.value[visor.value.length-1] == "+" ||
            visor.value[visor.value.length-1] == "-"||
            visor.value[visor.value.length-1] == "*" ||
            visor.value[visor.value.length-1] == "/"){
            
            visor.value[visor.value.length-1] = botao.value;
            visor.value.slice(1);
        }
        else{
            visor.value += botao.value;
        }
    }
    else{
        visor.value += botao.value;
    }
    
    
        //forma não simplificada
    // visor.value = visor.value + "" + botao.value;
    //acrementador "+=", que insere o mesmo numero do lado
}

function resultadoDasOperacoes(visor){
    //pega uma string e tenta converter para uma operação matematica
    visor.value = eval(visor.value);
}

function limparVisor(visor){
    visor.value = "";
}