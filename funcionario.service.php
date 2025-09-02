<?php
include("../../model/funcionario.class.php");
function cadastrarFuncionario($nome, $salario, $telefone) {
$funcionario = new Funcionario(null, $nome, $salario, $telefone);
$funcionario->cadastrar();
}
function pegaFuncionarioPeloId($id) {
return Funcionario::pegaPorId($id);
}
function alterarFuncionario($id, $novoNome, $novoSalario, $novoTelefone) {
$funcionario = Funcionario::pegaPorId($id);
if ($funcionario) {
$funcionario->nome = $novoNome;
$funcionario->salario = $novoSalario;
$funcionario->telefone = $novoTelefone;
$funcionario->alterar();
}
}
function removerFuncionario($id) {
$funcionario = Funcionario::pegaPorId($id);
if ($funcionario) {
$funcionario->remover();
}
}
function listarFuncionario($filtroNome) {
$funcionarios = Funcionario::listar($filtroNome);
echo "<table><thead><tr><th>Nome</th><th>Salário</th><th>Telefone</th>";
echo "<th>Ações</th>";//NOVA LINHA
echo "</tr></thead><tbody>";
foreach($funcionarios as $funcionario) {
echo "<tr><td>".$funcionario->nome."</td>";
echo "<td>".$funcionario->salario."</td>";
echo "<td>".$funcionario->telefone."</td>";
echo "<td><a
href='http://localhost:81/padaria/telas/funcionario/cadastro_funcionario.php?id=".$funcionario
->id."'>Alterar</a> | <a
href='http://localhost:81/padaria/telas/funcionario/cadastro_funcionario.php?id=".
$funcionario->id. "'>Remover</a></td>";
echo "</tr>";
}
echo "</tbody></table>";
}
?>