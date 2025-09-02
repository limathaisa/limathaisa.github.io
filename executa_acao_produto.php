<?
//include("../../service/produto.service.php");
$acao = $_POST['acao'];
$nome = isset($_POST['nome'])?$_POST['nome']:null;
$preco = isset($_POST['preco'])?$_POST['preco']:null;
$id = isset($_POST['id'])?$_POST['id']:null;
if($acao=="cadastrar") {
cadastrarProduto($nome, $preco);
echo "Cadastrado com sucesso";
}
else if($acao=="alterar") {
alterarProduto($id, $nome, $preco);
echo "Alterado com sucesso";
}
else if($acao=="remover") {
removerProduto($id);
echo "Removido com sucesso";
}
else {
echo "Ação inválida";
}
?>