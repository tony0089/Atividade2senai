const produtos = [
  { nome: "X-Burger", preco: 18.5, imagem: " img/hamburguer.jpg" },
  { nome: "Pizza Fatia", preco: 9.9, imagem: "img/pizza.jpg" },
  { nome: "Batata Frita", preco: 12, imagem: "img/Batata Frita.jpg" },
  { nome: "Refrigerante", preco: 6.5, imagem: "img/Lata.jpg" },
  { nome: "Coxinha", preco: 8, imagem: "img/Coxinha.jpg" }
];

let quantidadeTotal = 0;
let total = 0;

const listaProdutos = document.getElementById("lista-produtos");
const campoQuantidade = document.getElementById("quantidade");
const campoTotal = document.getElementById("total");
const avisoDesconto = document.getElementById("desconto-aviso");

function formatarDinheiro(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}
function adicionar(posicao) {
  const produto = produtos[posicao];

  quantidadeTotal = quantidadeTotal + 1;
  total = total + produto.preco;

  atualizarResumo();
}

function atualizarResumo() {
  let totalFinal = total;
  avisoDesconto.textContent = "";

  if (total > 50) {
    totalFinal = total - total * 0.1;
    avisoDesconto.textContent = "Desconto de 10% aplicado!";
  }

  campoQuantidade.textContent = quantidadeTotal;
  campoTotal.textContent = formatarDinheiro(totalFinal);

  console.log("Itens:", quantidadeTotal, "| Total sem desconto:", total, "| Total final:", totalFinal);
}
function criarCartoes() {
  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];

    const cartao = document.createElement("div");
    cartao.className = "cartao";

    cartao.innerHTML =
      '<img src="' + produto.imagem + '" alt="' + produto.nome + '">' +
      '<h3>' + produto.nome + '</h3>' +
      '<p>' + formatarDinheiro(produto.preco) + '</p>' +
      '<button>Adicionar</button>';
    const botao = cartao.querySelector("button");
    botao.addEventListener("click", function () {
      adicionar(i);
    });

    listaProdutos.appendChild(cartao);
  }
}
criarCartoes();
