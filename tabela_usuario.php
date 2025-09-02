<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<form method="post">
<label>Nome:</label><input name="filtro"/>
<button>Filtrar</button>
</form>
<?php
include("../../service/usuario.service.php");
$filtro = isset($_POST["filtro"])?$_POST["filtro"]:"";
listarUsuario($filtro);
?>
</body>
</html>