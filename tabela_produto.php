<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" method="post">
      <label for="">Filtro: </label><input type="text" name="filtro">
      <button type="submit"></button>
    </form>
    <?php
    include("../service/produto.service.php");
    $filtro = isset($_POST["filtro"]) ? $_POST["filtro"] : "";
    listarProduto($filtro);
    ?>
</body>
</html>