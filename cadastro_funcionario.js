document.addEventListener("DOMContentLoaded", 
    (ev) => {
        let formCad = document.getElementById("cadastrofuncionario");
        let campoSalario = document.getElementById("salario");
        formCad?.addEventListener("submit", (ev2) => {
            let campoNome = document.getElementById("nome");
            let campoSalario = document.getElementById("salario");
            let campoTelefone = document.getElementById("telefone");
            if(
                validarFormulario(campoNome?.value, campoSalario?.value, campoTelefone?.value) ){
                        formCad?.onsubmit();
                };
        });
     
        campoSalario?.addEventListener("keypress", (ev2) => {

  })


let validarFormulario = (nome, salario, campoTelefone) => {
    return true;
};