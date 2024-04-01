<?php

declare(strict_types=1);

namespace App;

use PDO;

class Database 
{
    public function getConnection(): PDO
    {
        $dsn = "mysql:host=127.0.0.1;dbname=projeto";
        
        $pdo = new PDO($dsn, 'root', 'root1234', [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
        ]);

        return $pdo;
    }
}