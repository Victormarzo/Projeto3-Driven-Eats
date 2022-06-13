let total;
let prato;
let bebida;
let sobremesa;
let pratoPreco;
let bebidaPreco;
let sobremesaPreco;
let texto;
let pedido;
let nome;
let endereco;



function clicaprato(elemento){
    const liga = document.querySelector(".comida .selecionado ");
    
    if (liga !== null){
    liga.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado"); 

    prato=elemento.querySelector(".nomeComida");
   
   pratoPreco = elemento.querySelector(".precoComida")
   
   
    liberacompra();
    
}
function clicabebida(elemento){
    const liga = document.querySelector(".bebida .selecionado ");
    if (liga !== null){
    liga.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    bebida=elemento.querySelector(".nomeBebida");
   
   bebidaPreco = elemento.querySelector(".precoBebida")
   
    liberacompra();
}
function clicasobremesa(elemento){
    const liga = document.querySelector(".sobremesa .selecionado ");
    if (liga !== null){
    liga.classList.remove("selecionado");
    }
    elemento.classList.add("selecionado");
    sobremesa=elemento.querySelector(".nomeSobremesa");
   
   sobremesaPreco = elemento.querySelector(".precoSobremesa")
   
    
    liberacompra();
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
function fazerPedido(){
    total=Number(pratoPreco.innerHTML.replace(",","."))+Number(bebidaPreco.innerHTML.replace(",","."))+Number(sobremesaPreco.innerHTML.replace(",","."));
    
    nome=prompt("Digite seu nome:");
    endereco=prompt("Digite seu endereço:");
    texto=`Olá, gostaria de fazer o pedido:
    - Prato: ${prato.innerHTML}
    - Bebida: ${bebida.innerHTML}
    - Sobremesa: ${sobremesa.innerHTML}
    Total: R$ ${total.toFixed(2)}

    Nome: ${nome}
    Endereço: ${endereco}`;
    
    pedido = encodeURIComponent(texto);
    msgZap();
}
function msgZap(){
    window.location.href =`https://wa.me/5541999024887?text=${pedido}`;
}