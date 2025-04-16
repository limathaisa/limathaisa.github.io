function classificarSenha() {
    const senha = document.getElementById("senha").value;
    const forca = document.getElementById("forca");
  
    // Verifica se a senha contém letras minúsculas, maiúsculas, números e caracteres especiais
    const temMinuscula = /[a-z]/.test(senha);
    const temMaiuscula = /[A-Z]/.test(senha);
    const temNumero = /[0-9]/.test(senha);
    const temEspecial = /[@#!$%&*()\-\+=.]/.test(senha);
  
    // Lógica para classificar a força da senha
    if ((temMinuscula || temMaiuscula) && !temNumero && !temEspecial) {
      forca.textContent = "Fraca";
      forca.style.color = "red";
    } else if (temMinuscula && temMaiuscula && temNumero && !temEspecial) {
      forca.textContent = "Moderada";
      forca.style.color = "orange";
    } else if (temMinuscula && temMaiuscula && temNumero && temEspecial) {
      forca.textContent = "Forte";
      forca.style.color = "green";
    } else {
      forca.textContent = "Senha inválida ou incompleta!";
      forca.style.color = "gray";
    }
  }
  
  