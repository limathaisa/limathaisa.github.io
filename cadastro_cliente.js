document.addEventListener("DOMContentLoaded",
(ev) => {
let formCad = document.getElementById("formCadastroCliente");
formCad.addEventListener("submit", (ev2) => {
ev2.preventDefault();
let campoNome = document.getElementById("nome");
let campoTelefone = document.getElementById("telefone");
validaFormulario(campoNome.value, campoTelefone.value) ? formCad.submit() : null;
});
}
);
let validaFormulario = (nome, telefone) => {
return true;
};