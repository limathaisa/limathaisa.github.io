<?php
include("../../service/funcionario.service.php");
$acao = $_POST['acao'];
$nome = isset($_POST['nome'])?$_POST['nome']:null;
$salario = isset($_POST['salario'])?$_POST['salario']:null;
$telefone = isset($_POST['telefone'])?$_POST['telefone']:null;
$id = isset($_POST['id'])?$_POST['id']:null;
if($acao=="cadastrar") {
cadastrarFuncionario($nome, $salario, $telefone);
echo "Cadastrado com sucesso";
}
else if($acao=="alterar") {
alterarFuncionario($id, $nome, $salario, $telefone);
echo "Alterado com sucesso";
}
else if($acao=="remover") {
removerFuncionario($id);
echo "Removido com sucesso";
}
else {
echo "Ação inválida";
}
?>