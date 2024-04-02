<?php
declare(strict_types=1);


use App\Controllers\UserController;
use Slim\Factory\AppFactory;





require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$app = AppFactory::create();

$app->get('/', UserController::class . ':hello');

$app->get('/api/carros', UserController::class . ':carros');

$app->run();