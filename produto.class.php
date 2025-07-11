<?php
    class Produto extends ClassePai {
        public $nome;
        public $preco;

        function montaLinhaDados()
        {
            return $this->id.$this->separador.$this->nome.$this->separador.$this->preco;
        }
    }

?>