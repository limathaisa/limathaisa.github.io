function listarTodos() {
  const url = "http://localhost/thaisalima01/livraria/index.php?modulo=livro";

  // Faz a requisição para o servidor
  fetch(url)
    .then(function(resposta) {
      // Verifica se a resposta foi bem-sucedida
      if (resposta.ok) {
        return resposta.json(); // converte a resposta para JSON
      } else {
        console.log("Erro ao buscar os livros. Código:", resposta.status);
      }
    })
    .then(function(dados) {
      if (!dados) {
        console.log("Nenhum dado retornado da API.");
        return;
      }

      console.log("Lista de livros encontrados:");
      console.table(dados);

      // Exibe os livros na página, se existir uma div com id="listaLivros"
      const listaContainer = document.querySelector("#listaLivros");
      if (listaContainer) {
        listaContainer.innerHTML = ""; // limpa o conteúdo anterior

        dados.forEach(function(livro) {
          const item = document.createElement("div");
          item.classList.add("livro-item");
          item.innerHTML = `
            <strong>${livro.titulo}</strong> — ${livro.autor} (${livro.ano})
            <br><em>${livro.genero}</em> | Local: ${livro.local} |
            Disponível: ${livro.disponivel ? "Sim" : "Não"}
          `;
          listaContainer.appendChild(item);
        });
      }
    })
    .catch(function(erro) {
      console.log("Erro ao conectar com o servidor:", erro);
      const listaContainer = document.querySelector("#listaLivros");
      if (listaContainer) {
        listaContainer.innerHTML = "<p style='color:red;'>Erro ao carregar os livros.</p>";
      }
    });
}













// Executa a função ao clicar no botão
btnListarTodosLivros.addEventListener("click", listarTodos);

async function listarTodos() {
  const url = "http://localhost/thaisalima01/livraria/index.php?modulo=livro";

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    const livros = await resposta.json();
    console.log(livros);

    // Retorna os livros para uso posterior, se necessário
    return livros;

  } catch (erro) {
    console.error("Erro ao listar os livros:", erro);
  }
}

// Chamar a função para testar
listarTodos();




async function listarTodos() {
  const url = "http://localhost/thaisalima01/livraria/index.php?modulo=livro";

  try {
    const resposta = await fetch(url);
    const livros = await resposta.json();
    console.table(livros);
    listarLivro(livros);
  } catch (erro) {
    console.log("Erro", erro);
  }
}

function listarLivro(livros) {

  const titulo = document.createElement("h2");
  titulo.textContent = "Lista de Livros";
  document.body.appendChild(titulo);

  // Cria um container principal
  const container = document.createElement("div");
  document.body.appendChild(container);


  livros.forEach(livro => {
    const card = document.createElement("div");
    card.innerHTML = `
      <strong>Título:</strong> ${livro.titulo}<br>
      <strong>Autor:</strong> ${livro.autor}<br>
      <strong>Ano:</strong> ${livro.ano}<br>
    `;

    container.appendChild(card);
  });
}

// Executa automaticamente quando o script é carregado
listarTodos();
