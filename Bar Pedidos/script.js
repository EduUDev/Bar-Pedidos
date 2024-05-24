var mesas = [];
var pedidos = []; 

function salvaPedidos() {  //pega valor digitado no campo Descricao e mesa escolhida e salva nas variáveis.
    var descricaoPedido = document.getElementById('descricaoPedido').value;
    var mesaEscolhida = document.getElementById('mesaEscolhida').value;

    var pedido = [mesaEscolhida, descricaoPedido];

    pedidos.push(pedido);  //adicionar pedido na array que tá vazia, para ficar salvo.
    document.getElementById('descricaoPedido').value = ""; //resetando valores.
    document.getElementById('mesaEscolhida').value = "";

    atualizarPedido(); 
}
function atualizarPedido() {  
    var pedidosDiv = document.getElementById('pedidos');
    pedidosDiv.innerHTML = "";

    pedidos.forEach(function (pedido) { //aqui faz uma pesquisa dentro da array
        pedidosDiv.innerHTML += "<p> Mesa escolhida: " + pedido[0] + " Pedido: " + pedido[1] + "</p>";
    });
}





