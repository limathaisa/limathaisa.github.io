<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Login - Sistema Hospitalar</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h2>Login de Usuário</h2>
    <form method="POST" action="lista.html">
      <label for="email">E-mail:</label>
      <input type="email" name="email" required>

      <label for="senha">Senha:</label>
      <input type="password" name="senha" required>

      <label for="perfil">Perfil:</label>
      <select name="perfil" required>
        <option value="">Selecione o perfil</option>
        <option value="recepcionista">Recepcionista</option>
        <option value="medico">Médico</option>
        <option value="enfermeiro">Enfermeiro</option>
      </select>
      <button>Entrar</button>
    </form>
  </div>
</body>
<?php
session_start();
$usuarios= [
 
['nome' => 'jacks', 'perfil' => 'medico', 'email' => 'jacks@gmail.com', 'senha' => '1234'],
['nome' => 'ana', 'perfil' => 'enfermeiro', 'email' => 'ana@gmail.com', 'senha' => '4321'],
['nome' => 'bill', 'perfil' => 'recepcionista', 'email' => 'bill@gmail.com', 'senha' => 'abcd'],

 
 ];


 $email=$_POST['email'];
 $senha=$_POST['senha'];
 $perfil=$_POST['perfil'];



     if($email==$usuarios['email'] && $senha== $usuario ['senha']){
         foreach($usuarios as $usuario){

            if($email==$usuario['email'] && $senha==$usuario['senha']){

               if (!isset($_SESSION['email'], $_SESSION['senha'], $_SESSION['perfil'])){

                $_SESSION['email'] = $email;
                $_SESSION['senha'] = $senha;
                $_SESSION['perfil'] = $perfil;

                     }
}
}
}
?>

</html>



