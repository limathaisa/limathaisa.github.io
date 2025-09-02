<?
include("../../service/usuario.service.php");
$acao = $_POST['acao'];
$nome = isset($_POST['nome'])?$_POST['nome']:null;
$email = isset($_POST['email'])?$_POST['email']:null;
$senha = isset($_POST['senha'])?$_POST['senha']:null;
$id = isset($_POST['id'])?$_POST['id']:null;
if($acao=="cadastrar") {
cadastrarUsuario($nome, $email, $senha);
echo "Cadastrado com sucesso";
}
else if($acao=="alterar") {
alterarUsuario($nome, $email, $senha,$id);
echo "Alterado com sucesso";
}
else if($acao=="remover") {
removerUsuario($id);
echo "Removido com sucesso";
}
else {
echo "Ação inválida";
}
?>