let totalGeral;
limpar();

function adicionar() {
    let produtoSelecionado = document.getElementById('produto').value;
    let quantidade = document.getElementById('quantidade').value;
    
    if (quantidade <= 0) {
      alert('Digite uma quantidade válida!');
      limpar();
      return;
    }

    let nomeProduto = produtoSelecionado.split('-')[0];
    let valorUnitario = produtoSelecionado.split('R$')[1];
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');

    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
  </section>`;


  totalGeral = totalGeral + preco;
  let campoTotal = document.getElementById('valor-total');
  campoTotal.textContent = `R$ ${totalGeral}`;
  document.getElementById('quantidade').value = 0;
    
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').textContent = 'R$ 0'
}