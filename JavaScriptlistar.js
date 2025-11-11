/**
 * Lista todos os livros da biblioteca e exibe na tela
 */
function listarTodos() {
  const saida = document.querySelector("#saida");
  saida.innerHTML = "<h2>Lista de Livros</h2>";

  if (biblioteca.length === 0) {
    saida.innerHTML += "<p>Nenhum livro cadastrado.</p>";
    return;
  }

  const lista = document.createElement("ul");

  biblioteca.forEach(livro => {
    const item = document.createElement("li");
    item.innerHTML = `
      <strong>${livro.titulo}</strong> (${livro.ano})<br>
      Autor: ${livro.autor}<br>
      Gênero: ${livro.genero}<br>
      Local: ${livro.local}<br>
      Disponível: ${livro.disponivel ? "Sim" : "Não"}<br>
      <hr>
    `;
    lista.appendChild(item);
  });

  saida.appendChild(lista);
}


/**
 * Lista um livro específico pelo ISSN informado
 */
function listarPorId(issn) {
  const saida = document.querySelector("#saida");
  saida.innerHTML = "<h2>Resultado da Busca</h2>";

  const livro = biblioteca.find(livro => livro.issn === issn);

  if (!livro) {
    saida.innerHTML += `<p>Nenhum livro encontrado com o ISSN ${issn}.</p>`;
    return;
  }

  saida.innerHTML += `
    <p>
      <strong>Título:</strong> ${livro.titulo}<br>
      <strong>Autor:</strong> ${livro.autor}<br>
      <strong>Editora:</strong> ${livro.editora}<br>
      <strong>Ano:</strong> ${livro.ano}<br>
      <strong>Gênero:</strong> ${livro.genero}<br>
      <strong>Local:</strong> ${livro.local}<br>
      <strong>Disponível:</strong> ${livro.disponivel ? "Sim" : "Não"}
    </p>
  `;
}
