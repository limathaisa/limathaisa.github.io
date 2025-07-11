<?php
    class Cliente extends ClassePai {
        public $nome;
        public $telefone;

        function montaLinhaDados()
        {
            return $this->id.$this->separador.$this->nome.$this->separador.$this->telefone;
        }
    }
    
?>