let cart = [];
let total = 0;

fetch('cardapio.json')
.then(response => response.json())
.then(data => {
    const menuArea = document.getElementById('menu');
    data.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'menu-item';
        itemDiv.innerHTML = `
            <img src="${item.imagem}" alt="${item.nome}">
            <h3>${item.nome}</h3>
            <p>R$ ${item.preco.toFixed(2)}</p>
        `;
        itemDiv.addEventListener('click', function() {
            addToCart(item);
        });
        menuArea.appendChild(itemDiv);
    });
})
.catch(error => {
    console.error('Erro ao carregar o cardápio:', error);
});

function addToCart(item) {
cart.push(item);
total += item.preco;
updateCartDisplay();
}

function updateCartDisplay() {
const cartItemsList = document.getElementById('cart-items');
const totalElement = document.getElementById('total');
cartItemsList.innerHTML = '';
cart.forEach((item) => {
    let li = document.createElement('li');
    li.textContent = item.nome + ' - R$ ' + item.preco.toFixed(2);
    cartItemsList.appendChild(li);
});
totalElement.textContent = total.toFixed(2);
}