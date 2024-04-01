<?php
declare(strict_types=1);


use App\Controllers\UserController;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;



require __DIR__ . '/../vendor/autoload.php';

$app = AppFactory::create();

$app->get('/', UserController::class . ':hello');

$app->get('/api/carros', UserController::class . ':carros');

$app->get('/api/carros/{id}', UserController::class . ':carros_id');

$app->run();