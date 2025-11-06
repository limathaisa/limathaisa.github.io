<?php
require_once __DIR__ . "/classe_pai.php";
class Livro extends ClassePai {

    public $titulo;
    public $autor;
    public $editora;
    public $anoPublicacao;
    public $genero;
    public $localizacao;
    public $ISSN;

    public function toEntity($dados){
        return new Livro(
            $dados[0],
            $dados[1],
            $dados[2],
            $dados[3],
            $dados[4],
            $dados[5],
            $dados[6],
            $dados[7]
        );
    }

    public function __construct($id, $titulo, $autor, $editora, $anoPublicacao, $genero, $localizacao, $ISSN) {
        parent::__construct($id, "database/livros.txt");
        $this->titulo = $titulo;
        $this->autor = $autor;
        $this->editora = $editora;
        $this->anoPublicacao = $anoPublicacao;
        $this->genero = $genero;
        $this->localizacao = $localizacao;
        $this->ISSN = $ISSN;
    }

    static public function listar($filtroNome) {
            $arquivo = fopen("database/livros.txt", "r");
            $retorno = [];
            while(!feof($arquivo)){
                $linha = fgets($arquivo);
                if(empty($linha))
                    continue;
                $dados = explode(self::SEPARADOR, $linha);
                if(str_contains($dados[1], $filtroNome)){
                    array_push($retorno, new Livro(
            $dados[0],
            $dados[1],
            $dados[2],
            $dados[3],
            $dados[4],
            $dados[5],
            $dados[6],
            $dados[7]
        ));
                }
                
            }
            return $retorno;
    }

    function montaLinhaDados()
    {
        return $this->id.self::SEPARADOR.
               $this->titulo.self::SEPARADOR.
               $this->autor.self::SEPARADOR.
               $this->editora.self::SEPARADOR.
               $this->anoPublicacao.self::SEPARADOR.
               $this->genero.self::SEPARADOR.
               $this->localizacao.self::SEPARADOR.
               $this->ISSN;
    }
}
?>