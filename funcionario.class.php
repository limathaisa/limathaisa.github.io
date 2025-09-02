<?php
include("class_pai.class.php");
class Funcionario extends ClassePai {
public $nome;
public $telefone;
public $salario;
const NOME_ARQUIVO = "../../db/funcionario.txt";
public function __construct($id, $nome, $salario, $telefone) {
parent::__construct($id, "../../db/funcionario.txt");
$this->nome = $nome;
$this->salario = $salario;
$this->telefone = $telefone;
}
static public function pegaPorId($id) {
$arquivo = fopen("../../db/funcionario.txt", "r");
while(!feof($arquivo)){
$linha = fgets($arquivo);
if(empty($linha))
continue;
$dados = explode(self::SEPARADOR, $linha);
if($dados[0] == $id){
fclose($arquivo);
return new Funcionario($dados[0], $dados[1], $dados[2], $dados[3]);
}
}
fclose($arquivo);
}
function montaLinhaDados()
{
return
$this->id.self::SEPARADOR.$this->nome.self::SEPARADOR.$this->salario.self::SEPARADOR.$this->telefone;
}
static public function listar($filtroNome) {
$arquivo = fopen("../../db/funcionario.txt", "r");
$retorno = [];
while(!feof($arquivo)){
$linha = fgets($arquivo);
if(empty($linha))
continue;
$dados = explode(self::SEPARADOR, $linha);
if(str_contains($dados[1], $filtroNome)){
array_push($retorno, new Funcionario($dados[0], $dados[1], $dados[2],
$dados[3]));
}
}
return $retorno;
}
}
?>

