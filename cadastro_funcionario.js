document.addEventListener("DOMContentLoaded", 
    (ev)=>{     
        let formCad = document.getElementById("formCadastroFuncionario");
        let campoSalario = document.getElementById("salario");
        formCad.addEventListener("submit", (ev2)=>{
            ev2.preventDefault();
            let campoNome = document.getElementById("nome");
            let campoTelefone = document.getElementById("telefone");
            validaFormulario(campoNome.value, campoSalario.value, campoTelefone.value)?formCad.submit():null;
        });
        campoSalario.addEventListener("keyup", (ev2)=>{
            validaSalario(campoSalario, ev2.key);
        });
    }
);
let validaFormulario = (nome, salario, telefone) => {
    return true;
};

let validaSalario = (campoSalario, charDigitado) => {
    if(!["1","2","3","4","5","6","7","8","9","0",","].find((el)=>{
            return charDigitado == el
        })) 
    {
        //SE NAO FOR NUMERO OU VIRGULA, RETIRA O ÚLTIMO CARACTER DIGITADO
                campoSalario.value = campoSalario.value.substring(0, campoSalario.value.length-2);
    }
    //SE A VÍRGULA JÁ FOI DIGITADA ANTES, TAMBÉM TIRA
    if(charDigitado=="," && campoSalario.value.indexOf(",")<campoSalario.value.length-1) {
        campoSalario.value = campoSalario.value.substring(0, campoSalario.value.length-1);
    }
};