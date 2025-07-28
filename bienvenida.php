<?php
session_start(); // Inicia la sesión para acceder a las variables de sesión

// Verifica si el usuario NO está logueado (si no hay 'usuario_id' en la sesión)
if (!isset($_SESSION['usuario_id'])) {
    // Si no está logueado, lo redirige de vuelta a la página de login
    header("Location: iniciodesesion.html"); // O la URL de tu página de login
    exit();
}

// Si está logueado, muestra un mensaje de bienvenida personalizado
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenido - FLY XPRESS</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f8f9fa;
            font-family: sans-serif;
            text-align: center;
        }
        .welcome-card {
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            padding: 40px;
            max-width: 600px;
            width: 90%;
        }
        .welcome-card h1 {
            color: #FF6700;
            margin-bottom: 20px;
        }
        .welcome-card p {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 30px;
        }
        .btn-logout {
            background-color: #dc3545; /* Rojo de Bootstrap para peligro/cerrar sesión */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .btn-logout:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <div class="welcome-card">
        <h1>¡Bienvenido, <?php echo htmlspecialchars($_SESSION['usuario_nombre']); ?>!</h1>
        <p>Has iniciado sesión con éxito en Fly Xpress.</p>
        <p>Tu correo es: <?php echo htmlspecialchars($_SESSION['usuario_correo']); ?></p>
        <a href="Prueba encabezado2.html" class="btn-logout">Pagina principal</a>
    </div>
</body>
</html>