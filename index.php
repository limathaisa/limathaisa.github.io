<?php
  require_once __DIR__ . "/controller/GenericController.php";
  require_once __DIR__ . "/controller/LivroController.php";
  require_once __DIR__ . "/controller/UsuarioController.php";
  $metodo = $_SERVER['REQUEST_METHOD'];
  $modulo = $_GET['modulo'];
  $controller = null;
  // localhost/index.php?modulo=livro
  switch($modulo) {
    case "usuario":
        $controller = new UsuarioController();
        break;
    case "livro":
        $controller = new LivroController();
        break;
    default: 
        return json_encode("{erro: true, mensagem: 'Módulo Inválido'}");
  }
  $dadosRecebidos = json_decode(file_get_contents("php://input", true));
  switch($metodo) {
    case "POST":
        $controller->cadastrar($dadosRecebidos);
        echo json_encode(["erro"=>false, "mensagem"=> "Cadastrado com sucesso!"]);
        exit;
    case "GET":
        echo json_encode($controller->listar($dadosRecebidos));
        exit;
    case "PUT":
        echo json_encode($controller->alterar($dadosRecebidos));
        exit;
    case "DELETE":
        $controller->remover($dadosRecebidos);
        echo json_encode(["erro"=>false, "mensagem"=> "Removido com sucesso!"]);
        exit;
  }

