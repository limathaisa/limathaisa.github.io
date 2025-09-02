document.addEventListener("DOMContentLoaded",
(ev) => {
let formCad = document.getElementById("formCadastroProduto");
let campoPreco = document.getElementById("preco");
formCad.addEventListener("submit", (ev2) => {
ev2.preventDefault();
let campoNome = document.getElementById("nome");
validaFormulario(campoNome.value, campoPreco.value) ? formCad.submit() : null;
});
campoPreco.addEventListener("keyup", (ev2) => {
validaPreco(campoPreco, ev2.key);
});
}
);
let validaFormulario = (nome, preco) => {
return true;
};
let validaPreco = (campoPreco, charDigitado) => {
if (!["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ","].find((el) => {
return charDigitado == el
})) {
//SE NAO FOR NUMERO OU VIRGULA, RETIRA O ÚLTIMO CARACTER DIGITADO
campoPreco.value = campoPreco.value.substring(0, campoPreco.value.length - 2);
}
//SE A VÍRGULA JÁ FOI DIGITADA ANTES, TAMBÉM TIRA
if (charDigitado == "," && campoPreco.value.indexOf(",") < campoPreco.value.length - 1) {
campoPreco.value = campoPreco.value.substring(0, campoPreco.value.length - 1);
}
};