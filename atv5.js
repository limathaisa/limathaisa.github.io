function substituirTexto() {
    const texto = document.getElementById("texto").value;
    const procurar = document.getElementById("procurar").value;
    const substituir = document.getElementById("substituir").value;
  
    if (!procurar || !substituir) {
      document.getElementById("resultado").innerHTML = "Por favor, preencha os campos 'procurar' e 'substituir'.";
      return;
    }
  
    const regex = new RegExp(procurar, "gi"); 
    const novoTexto = texto.replace(regex, substituir);
  
    document.getElementById("resultado").innerHTML = `
      <strong>Texto modificado:</strong><br>
      <pre>${novoTexto}</pre>
    `;
  }
  
  