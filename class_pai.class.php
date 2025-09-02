<?php
abstract class ClassePai {
public $id;
private $nomeArquivo="";
const SEPARADOR = "#";
const NOME_ARQUIVO = " ";
public function __construct($id, $nomeArquivo) {
$this->id = $id;
$this->nomeArquivo = $nomeArquivo;
}
abstract function montaLinhaDados();
public function encontraUltimoId(){
$arquivo = fopen($this->nomeArquivo, "r");
$idTemp = 1;
while(!feof($arquivo)){
$linha = fgets($arquivo);
if(empty($linha))
continue;
$dados = explode(self::SEPARADOR, $linha);
$idTemp = intval($dados[0])+1;
}
$this->id=$idTemp;
fclose($arquivo);
}
public function cadastrar() {
$this->encontraUltimoId();
//TODO: Cadastrar no arquivo.
$arquivo = fopen($this->nomeArquivo, "a");
fwrite($arquivo, $this->montaLinhaDados()."\n");
fclose($arquivo);
}
public function remover() {
$arquivo = fopen($this->nomeArquivo, "r+");
$auxiliar = "";
while(!feof($arquivo)){
$linha = fgets($arquivo);
var_dump($linha);
if(empty($linha))
continue;
$dados = explode(self::SEPARADOR, $linha);
if($dados[0] != $this->id){
$auxiliar .= $linha;
}
}
if(!empty($auxiliar)){
ftruncate($arquivo, 0);
rewind($arquivo);
fwrite($arquivo, $auxiliar);
}
fclose($arquivo);
}
public function alterar() {
$arquivo = fopen($this->nomeArquivo, "r+");
$auxiliar = "";
while(!feof($arquivo)){
$linha = fgets($arquivo);
var_dump($linha);
if(empty($linha))
continue;
$dados = explode(self::SEPARADOR, $linha);
if($dados[0] == $this->id){
$auxiliar .= $this->montaLinhaDados()."\n";
}
else {
$auxiliar .= $linha;
}
}
if(!empty($auxiliar)){
ftruncate($arquivo, 0);
rewind($arquivo);
fwrite($arquivo, $auxiliar);
}
fclose($arquivo);
}
}
?>