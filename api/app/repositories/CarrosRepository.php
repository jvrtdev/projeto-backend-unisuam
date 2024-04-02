<?php 

declare(strict_types=1);

namespace App\Repositories;

use App\Database;
use PDO;

class CarrosRepository
{   
    protected $database;

    public function __construct(Database $database)
    {
        $this->database = $database;
    }

    public function listarCarros(): array
    {
        $pdo = $this->database->getConnection();

        $stmt = $pdo->query('SELECT * FROM carros');

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
    //criar função com o nome listarCarrosPorId aqui
    public function listarCarrosId($args): array
    {
        $pdo = $this->database->getConnection();

        $stmt = $pdo->query('SELECT * FROM carros WHERE id = '.$args["id"]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}