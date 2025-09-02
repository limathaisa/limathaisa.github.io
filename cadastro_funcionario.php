<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cadastro de Funcionário</title>
<script src="cadastro_funcionario.js"></script>
</head>
<body>
<?php
include("../../service/funcionario.service.php");
$funcionario = "";
if(isset($_GET["id"]))
$funcionario = pegaFuncionarioPeloId($_GET["id"]);
?>
<form id="formCadastroFuncionario" action="executa_acao_funcionario.php"
method="post">
<input type="hidden" name="acao" value="<?php if(!empty($funcionario)) {
echo "alterar";
} else echo "cadastrar"; ?>"/>
<input type="hidden" name="id" value="<?php echo isset($_GET["id"])?$_GET["id"]:""
?>"/>
<label for="nome">Nome:</label><input type="text" id="nome" name="nome"
value="<?php if(!empty($funcionario))
echo $funcionario->nome; ?>"/><br/>
<label for="salario">Salario:</label><input type="text" id="salario" name="salario"
value="<?php if(!empty($funcionario))
echo $funcionario->salario; ?>"/>
<label for="telefone">Telefone:</label><input type="tel" id="telefone" name="telefone"
value="<?php
if(!empty($funcionario))
echo $funcionario->telefone;
?>"/>
<button type="submit"><?php if(!empty($funcionario)) {
echo "Alterar";
} else echo "Cadastrar"; ?></button>
</form>
</body>
</html>