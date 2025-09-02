<?php
include("../../model/usuario.class.php");
function cadastrarUsuario($nome, $email, $senha) {
$usuario = new Usuario(null, $nome, $email, $senha);
$usuario->cadastrar();
}
function pegaUsuarioPeloId($id) {
return Usuario::pegaPorId($id);
}
function alterarUsuario($id, $novoNome, $novoEmail, $novaSenha) {
$usuario = Usuario::pegaPorId($id);
if ($usuario) {
$usuario->nome = $novoNome;
$usuario->email = $novoEmail;
$usuario->senha = $novaSenha;
$usuario->alterar();
}
}
function removerUsuario($id) {
$usuario = Usuario::pegaPorId($id);
if ($usuario) {
$usuario->remover();
}
}
function listarUsuario($filtroNome) {
$usuarios = Usuario::listar($filtroNome);
echo "<table><thead><tr><th>Nome</th><th>Email</th><th>Senha</th>";
echo "<th>Ações</th>";//NOVA LINHA
echo "</tr></thead><tbody>";
foreach($usuarios as $usuario) {
echo "<tr><td>".$usuario->nome."</td>";
echo "<td>".$usuario->email."</td>";
echo "<td>".$usuario->senha."</td>";
echo "<td><a
href='http://localhost:81/padaria/telas/funcionario/cadastro_usuarios.php?id=".$usuario->id."'
>Alterar</a> | <a
href='http://localhost:81/padaria/telas/funcionario/cadastro_usuarios.php?id=". $usuario->id.
"'>Remover</a></td>";
echo "</tr>";
}
echo "</tbody></table>";
}
function arrayUsuario() {
return Usuario::listar("");
}
?>