<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Cadastro de Usuário</title>
<script src="cadastro_usuarios.js"></script>
</head>
<body>
<?php
include("../../service/usuario.service.php");
$usuario = "";
if(isset($_GET["id"]))
$usuario = pegaUsuarioPeloId($_GET["id"]);
?>
<form id="formCadastroUsuario" action="executa_acao_usuarios.php" method="post">
<input type="hidden" name="acao" value="<?php if(!empty($usuario)) {
echo "alterar";
} else echo "cadastrar"; ?>"/>
<input type="hidden" name="id" value="<?php echo isset($_GET["id"])?$_GET["id"]:""
?>"/>
<label for="nome">Nome:</label><input type="text" id="nome" name="nome"
value="<?php if(!empty($usuario))
echo $usuario->nome; ?>"/><br/>
<label for="email">Email:</label><input type="email" id="email" name="email"
value="<?php if(!empty($usuario))
echo $usuario->email; ?>"/>
<label for="senha">Senha:</label><input type="text" id="senha" name="senha"
value="<?php
if(!empty($usuario))
echo $usuario->senha;
?>"/>
<button type="submit"><?php if(!empty($usuario)) {
echo "Alterar";
} else echo "Cadastrar"; ?></button>
</form>
</body>
</html>