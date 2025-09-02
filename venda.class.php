<?php
include_once("class_pai.class.php");
include_once("cliente.class.php");
include_once("funcionario.class.php");
include_once("produto.class.php");
class Venda extends ClassePai {
public $cliente;
public $vendedor;//tipo Funcionario
public $produtosVendidos;
public $valorTotal;
function montaLinhaDados()
{
$linha =
$this->id
.self::SEPARADOR
.$this->cliente->id
.self::SEPARADOR
.$this->vendedor->id
.self::SEPARADOR
.$this->valorTotal
.self::SEPARADOR;
foreach($this->produtosVendidos as $produto) {
$linha.=$produto->id.self::SEPARADOR;
}
return rtrim($linha, self::SEPARADOR);
}
public function __construct($id, $cliente, $vendedor, $produtosVendidos, $valorTotal) {
parent::__construct($id, "../../db/venda.txt");
$this->cliente = $cliente;
$this->vendedor = $vendedor;
$this->produtosVendidos = $produtosVendidos;
$this->valorTotal = $valorTotal;
}
static public function pegaPorId($id) {
$arquivo = fopen("../../db/venda.txt", "r");
while(!feof($arquivo)){
$linha = fgets($arquivo);
if(empty($linha))
continue;
$dados = explode(self::SEPARADOR, $linha);
if($dados[0] == $id){
fclose($arquivo);
//PEGA OS IDS DOS PRODUTOS
$idsProdutos = array_slice($dados, 4, count($dados));
return new Venda($dados[0], Cliente::pegaPorId($dados[1]),
Funcionario::pegaPorId($dados[2]), Produto::pegaPorId($idsProdutos), $dados[3]);
}
}
fclose($arquivo);
}
static function pegaPorIds($ids) {
$retorno = [];
foreach($ids as $id) {
array_push($retorno, Produto::pegaPorId($id));
}
return $retorno;
}
}
?>