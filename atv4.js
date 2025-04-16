function analisarTexto() {
    const texto = document.getElementById("texto").value;
    
    const palavras = texto.toLowerCase().match(/\b\w+\b/g) || [];
    
    const contagem = {};
    
    palavras.forEach(p => contagem[p] = (contagem[p] || 0) + 1);
  
    let maisFrequente = "", max = 0;
    for (let palavra in contagem) {
      if (contagem[palavra] > max) {
        max = contagem[palavra];
        maisFrequente = palavra;
      }
    }
  
    const totalLetras = texto.replace(/[^a-zA-ZÀ-ÿ]/g, "").length;
  
    const resultado = `
      <strong>Palavra mais frequente:</strong> ${maisFrequente} (${max}x)<br>
      <strong>Total de palavras:</strong> ${palavras.length}<br>
      <strong>Total de letras:</strong> ${totalLetras}
    `;
    
    document.getElementById("resultado").innerHTML = resultado;
  }