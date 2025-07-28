<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro Exitoso - FLY XPRESS</title>
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
        .success-card { /* Cambiado de welcome-card a success-card para diferenciar */
            background: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            padding: 40px;
            max-width: 600px;
            width: 90%;
        }
        .success-card h1 {
            color: #28a745; /* Color verde para éxito */
            margin-bottom: 20px;
        }
        .success-card p {
            font-size: 1.2rem;
            color: #333;
            margin-bottom: 30px;
        }
        .btn-login-redirect { /* Nuevo nombre para el botón */
            background-color: #007bff; /* Azul de Bootstrap para información/primario */
            color: white;
            border: none;
            padding: 10px 20px;
            border-radius: 8px;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }
        .btn-login-redirect:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="success-card">
        <h1>¡Cuenta creada con éxito!</h1>
        <p>Tu cuenta ha sido registrada correctamente en Fly Xpress.</p>
        <p>Por favor, inicia sesión para continuar.</p>
        <a href="registro.html" class="btn-login-redirect">Ir a Iniciar Sesión</a>
    </div>
</body>
</html>