function converterData() {
    const meses = [
      "janeiro", "fevereiro", "março", "abril", "maio", "junho",
      "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
    ];
    
    const data = document.getElementById("data").value;
    const [dia, mes, ano] = data.split("/");
  
    if (dia && mes && ano && dia.length === 2 && mes.length === 2 && ano.length === 4) {
      const dataExtenso = `${dia} de ${meses[parseInt(mes) - 1]} de ${ano}`;
      document.getElementById("resultado").innerText = dataExtenso;
    } else {
      document.getElementById("resultado").innerText = "Data inválida! Por favor, insira no formato dd/mm/aaaa.";
    }
  }
  