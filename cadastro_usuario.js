document.addEventListener("DOMContentLoaded",
(ev)=>{
let formCad = document.getElementById("formCadastroUsuario");
formCad.addEventListener("submit", (ev2)=>{
ev2.preventDefault();
let campoNome = document.getElementById("nome");
let campoEmail = document.getElementById("email");
let campoSenha = document.getElementById("senha");
validaFormulario(campoNome.value, campoEmail.value,
campoSenha.value)?formCad.submit():null;
});
}
);
let validaFormulario = (nome, email, senha) => {
return true;
}