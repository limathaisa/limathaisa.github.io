

Código Completo

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Cafeteria do CEFET-RJ</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      display: flex;
      gap: 30px;
      background: #f5f5f5;
    }
    h1 {
      text-align: center;
    }
    .menu, .cart {
      background: white;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      flex: 1;
    }
    .item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px;
      margin-bottom: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      background: #fafafa;
    }
    .item img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 8px;
      margin-right: 10px;
    }
    .item button {
      background: #4CAF50;
      color: white;
      border: none;
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
    }
    .item button:hover {
      background: #45a049;
    }
    .cart-item {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      border-bottom: 1px solid #ddd;
    }
    .cart-item button {
      background: red;
      color: white;
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
    }
    .total {
      font-weight: bold;
      font-size: 18px;
      margin-top: 10px;
    }
  </style>
</head>
<body>

  <div class="menu">
    <h1>Cardápio</h1>
    <div id="menu-list"></div>
  </div>

  <div class="cart">
    <h1>Itens Comprados</h1>
    <div id="cart-list"></div>
    <div class="total" id="total"></div>
  </div>

  <script>
    // JSON dos itens do cardápio
    const produtos = [
      { nome: "Café Espresso", preco: 8, imagem: "https://via.placeholder.com/60" },
      { nome: "Capuccino", preco: 12, imagem: "https://via.placeholder.com/60" },
      { nome: "Suco de Laranja", preco: 10, imagem: "https://via.placeholder.com/60" },
      { nome: "Água Mineral", preco: 6, imagem: "https://via.placeholder.com/60" },
      { nome: "Fatia de Bolo", preco: 12, imagem: "https://via.placeholder.com/60" },
      { nome: "Sanduíche Natural", preco: 15, imagem: "https://via.placeholder.com/60" },
      { nome: "Croissant", preco: 17, imagem: "https://via.placeholder.com/60" }
    ];

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Renderiza o cardápio
    function renderMenu() {
      const menuList = document.getElementById("menu-list");
      menuList.innerHTML = "";
      produtos.forEach((produto, index) => {
        menuList.innerHTML += `
          <div class="item">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <div>
              <strong>${produto.nome}</strong><br>
              R$ ${produto.preco.toFixed(2)}
            </div>
            <button onclick="adicionarCarrinho(${index})">Adicionar</button>
          </div>
        `;
      });
    }

    // Renderiza o carrinho
    function renderCarrinho() {
      const cartList = document.getElementById("cart-list");
      const totalElement = document.getElementById("total");

      cartList.innerHTML = "";
      let total = 0;

      carrinho.forEach((item, i) => {
        total += item.preco;
        cartList.innerHTML += `
          <div class="cart-item">
            ${item.nome} - R$ ${item.preco.toFixed(2)}
            <button onclick="removerCarrinho(${i})">X</button>
          </div>
        `;
      });

      totalElement.innerHTML = "Total: R$ " + total.toFixed(2);
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    // Adiciona item no carrinho
    function adicionarCarrinho(index) {
      carrinho.push(produtos[index]);
      renderCarrinho();
    }

    // Remove item do carrinho
    function removerCarrinho(i) {
      carrinho.splice(i, 1);
      renderCarrinho();
    }

    // Inicializa
    renderMenu();
    renderCarrinho();
  </script>

</body>
</html>


---

✅ O que esse código faz:

Lista os itens do cardápio com imagem, nome e preço.

Botão Adicionar envia o item para o carrinho.

O carrinho mostra os itens comprados e tem botão X para remover.

O total é recalculado automaticamente.

Os dados ficam salvos no LocalStorage, então se recarregar a página o carrinho continua igual.



---

Quer que eu adicione também um botão "Finalizar Compra" que limpe o carrinho do LocalStorage e mostre uma mensagem de confirmação?
