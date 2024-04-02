<?php
namespace App\Controllers;

use App\Database;
use App\Repositories\CarrosRepository;
use PDO;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class CarroController {
    public function hello(Request $request, Response $response)
    {   
        $response->getBody()->write("Hello world!");
        return $response;
    }
    
    public function carros(Request $request, Response $response) 
    {
        $database = new Database;
        
        $repository = new CarrosRepository($database);

        $data = $repository->listarCarros();

        
        $body = json_encode($data);  
        
        $response->getBody()->write($body);
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function carros_id(Request $request, Response $response, $args)
    //falta alterar essa função usando repository
    {
        $database = new Database;
        $pdo = $database->getConnection();

        $stmt = $pdo->query('SELECT * FROM carros WHERE id = '.$args["id"]);

        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        
        $body = json_encode($data);  
        
        $response->getBody()->write($body);
        return $response->withHeader('Content-Type', 'application/json');
    }


}