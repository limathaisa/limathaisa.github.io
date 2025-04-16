function codificarFrase() {
    // Obtém a frase inserida pelo usuário
    const frase = document.getElementById("frase").value;
  
    // Definindo as substituições TENIS/POLAR
    const substituicoes = {
      'T': 'P', 'P': 'T',
      'E': 'O', 'O': 'E',
      'N': 'L', 'L': 'N',
      'I': 'A', 'A': 'I',
      'S': 'R', 'R': 'S'
    };
  
    // Função para codificar a frase
    let fraseCodificada = frase.split('').map(char => {
      // Se o caractere for uma das letras que precisa ser substituída, substitui
      if (substituicoes[char.toUpperCase()]) {
        // Verifica se a letra é maiúscula ou minúscula para manter a capitalização
        if (char === char.toUpperCase()) {
          return substituicoes[char.toUpperCase()].toUpperCase();
        } else {
          return substituicoes[char.toUpperCase()].toLowerCase();
        }
      }
      // Se não for uma das letras a serem substituídas, mantém o caractere
      return char;
    }).join('');
  
    // Exibe o resultado
    document.getElementById("resultado").innerText = `Frase codificada: ${fraseCodificada}`;
  }
  