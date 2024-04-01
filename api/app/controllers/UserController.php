<?php
namespace App\Controllers;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class UserController {
        public function hello(Request $request, Response $response)
        {   
            $response->getBody()->write("Hello world!");
            return $response;
        }
}