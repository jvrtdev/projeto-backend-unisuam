<?php
declare(strict_types=1);


use App\Controllers\CarroController;
use Slim\Factory\AppFactory;





require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$app = AppFactory::create();

$app->get('/', CarroController::class . ':hello');

$app->get('/api/carros', CarroController::class . ':carros');

$app->get('/api/carros/{id}', CarroController::class . ':carros_id');

$app->run();