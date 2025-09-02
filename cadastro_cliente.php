<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cadastro de Cliente</title>
<script src="cadastro_cliente.js"></script>
</head>
<body>
<?php
include("../../service/cliente.service.php");
$cliente = "";
if(isset($_GET["id"]))
$cliente = pegaClientePeloId($_GET["id"]);
?>
<form id="formCadastroCliente" action="executa_acao_cliente.php" method="post">
<input type="hidden" name="acao" value="<?php if(!empty($cliente)) {
echo "alterar";
} else echo "cadastrar"; ?>"/>
<input type="hidden" name="id" value="<?php echo isset($_GET["id"])?$_GET["id"]:""
?>"/>
<label for="nome">Nome:</label><input type="text" id="nome" name="nome"
value="<?php if(!empty($cliente))
echo $cliente->nome; ?>"/><br/>
<label for="telefone">Telefone:</label><input type="tel" id="telefone" name="telefone"
value="<?php
if(!empty($cliente))
echo $cliente->telefone;
?>"/>
<button type="submit"><?php if(!empty($cliente)) {
echo "Alterar";
} else echo "Cadastrar"; ?></button>
</form>
</body>
</html>