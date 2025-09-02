<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cadastro de Funcionário</title>
</head>
<body>
<?php
include("../../service/funcionario.service.php");
include("../../service/venda.service.php");
$venda = "";
if(isset($_GET["id"]))
$venda = pegaVendaPeloId($_GET["id"]);
?>
<form id="formCadastroVenda" action="executa_acao_venda.php" method="post">
<input type="hidden" name="acao" value="<?php if(!empty($venda)) {
echo "alterar";
} else echo "cadastrar"; ?>"/>
<input type="hidden" name="id" value="<?php echo isset($_GET["id"])?$_GET["id"]:""
?>"/>
<label for="nome">Funcionário que realizou a venda:</label>
<select name="funcionario">
<?php
$funcionarios = listarFuncionario($filtro);
foreach($funcionario as $funcionarios){
echo "<option
value=\"".$funcionario->id."\">".$funcionario->nome."</option>";
}
?>
</select>
<button type="submit"><?php if(!empty($venda)) {
echo "Alterar";
} else echo "Cadastrar"; ?></button>
</form>
</body>
</html>