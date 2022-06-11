function clicaprato(elemento){
    const liga = document.querySelector(".comida .selecionado ");
    
    if (liga !== null){
    liga.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado"); 
    liberacompra()
}
function clicabebida(elemento){
    const liga = document.querySelector(".bebida .selecionado ");
    if (liga !== null){
    liga.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado"); 
    liberacompra()
}
function clicasobremesa(elemento){
    const liga = document.querySelector(".sobremesa .selecionado ");
    if (liga !== null){
    liga.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado"); 
    
    liberacompra()
}
function clicapratotik(elemento){
    const liga = elemento.querySelector(".comida .tik ");
    const visible = document.querySelector(".comida .visivel");
    if (visible !== null){
        visible.classList.remove('visivel');
    }
    liga.classList.add('visivel')
}   
function clicabebidatik(elemento){
    const liga = elemento.querySelector(".bebida .tik ");
    const visible = document.querySelector(".bebida .visivel");
    if (visible !== null){
        visible.classList.remove('visivel');
    }
    liga.classList.add('visivel')
}
function clicasobremesatik(elemento){
    const liga = elemento.querySelector(".sobremesa .tik ");
    const visible = document.querySelector(".sobremesa .visivel");
    if (visible !== null){
        visible.classList.remove('visivel');
    }
    liga.classList.add('visivel')
}


function liberacompra(){
    let bebidaSel = document.querySelector(".bebida .selecionado ");
    let pratoSel = document.querySelector(".comida .selecionado ");
    let sobremesaSel = document.querySelector(".sobremesa .selecionado ");
    if(bebidaSel && pratoSel && sobremesaSel){
        let pronto = document.querySelector(".pronto");
        pronto.classList.remove("pronto");
        let naopronto = document.querySelector(" .botao");
        naopronto.classList.add("pronto") ;
        
    }
}