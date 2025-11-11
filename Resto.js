/**
 * Função que deverá pegar os dados do formulário e gerar um novo 
 * exemplar na lista de livros da biblioteca
 */
function cadastrarExemplar() {
  console.log("chamando cadastrarExemplar");

  // Pegar valores dos inputs
  const issn = document.querySelector("#novoIssn").value.trim();
  const titulo = document.querySelector("#novoTitulo").value.trim();
  const autor = document.querySelector("#novoAutor").value.trim();
  const editora = document.querySelector("#novoEditora").value.trim();
  const ano = parseInt(document.querySelector("#novoAno").value.trim());
  const genero = document.querySelector("#novoGenero").value.trim();
  const local = document.querySelector("#novoLocal").value.trim();

  const saida = document.querySelector("#saida");

  // Verificação básica
  if (!issn || !titulo || !autor || !editora || !ano || !genero || !local) {
    saida.innerHTML = "<p style='color:red;'>Por favor, preencha todos os campos.</p>";
    return;
  }

  // Verifica se já existe o mesmo ISSN
  const existe = biblioteca.some(livro => livro.issn === issn);
  if (existe) {
    saida.innerHTML = `<p style='color:red;'>Já existe um livro com o ISSN ${issn}.</p>`;
    return;
  }

  // Cria um novo objeto Livro e adiciona ao array
  const novoLivro = new Livro(issn, titulo, autor, editora, ano, genero, local, true);
  biblioteca.push(novoLivro);

  // Confirmação visual
  saida.innerHTML = `
    <p style='color:green;'>Livro cadastrado com sucesso!</p>
    <strong>${titulo}</strong> (${ano}) - ${autor}
  `;

  // Limpa os campos do formulário
  document.querySelectorAll("input[id^='novo']").forEach(input => input.value = "");
}/**
 * Função que deverá pegar o parâmetro de filtro e listar todos os 
 * exemplares que satisfizerem a condição (título, autor, gênero ou ISSN)
 */
function consultarLivros() {
  console.log("chamando consultarLivros");

  const termo = document.querySelector("#busca").value.trim().toLowerCase();
  const saida = document.querySelector("#saidaBusca");

  if (!termo) {
    saida.innerHTML = "<p style='color:red;'>Digite algo para buscar.</p>";
    return;
  }

  // Filtro: compara título, autor, gênero ou ISSN
  const resultados = biblioteca.filter(livro =>
    livro.titulo.toLowerCase().includes(termo) ||
    livro.autor.toLowerCase().includes(termo) ||
    livro.genero.toLowerCase().includes(termo) ||
    livro.issn === termo
  );

  if (resultados.length === 0) {
    saida.innerHTML = `<p>Nenhum livro encontrado para "${termo}".</p>`;
    return;
  }

  // Monta a listagem
  saida.innerHTML = `<h3>Resultado da busca por "${termo}"</h3>`;
  resultados.forEach(livro => {
    saida.innerHTML += `
      <div class="card">
        <strong>Título:</strong> ${livro.titulo}<br>
        <strong>Autor:</strong> ${livro.autor}<br>
        <strong>Editora:</strong> ${livro.editora}<br>
        <strong>Ano:</strong> ${livro.ano}<br>
        <strong>Gênero:</strong> ${livro.genero}<br>
        <strong>Local:</strong> ${livro.local}<br>
        <strong>Disponível:</strong> ${livro.disponivel ? "Sim" : "Não"}<br>
        <hr>
      </div>
    `;
  });
}
