<?php

    abstract class ClassePai {
        public $id;
        private $nomeArquivo="";
        protected $separador = "#";
        public function __construct($id, $nomeArquivo) {
            $this->id = $id;
            $this->nomeArquivo = $nomeArquivo;
        }
        abstract function montaLinhaDados();
        public function cadastrar() {
            //TODO: Cadastrar  no arquivo.
            $arquivo = fopen($this->nomeArquivo, "a");
            fwrite($arquivo, $this->montaLinhaDados());
            fclose($arquivo);
        }
        public function remover() {
            //TODO: Remover funcionário do arquivo.
        }
        public function listar() {
            //TODO: Listar funcionários do arquivo.
        }
        public function alterar() {
            //TODO: Alterar linha do funcionário funcionário no arquivo.
        }
    }

?>