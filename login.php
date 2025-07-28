<?php
// Inicia la sesión PHP. Esto es crucial para mantener al usuario logueado.
session_start(); 

// Incluye el archivo de conexión a la base de datos
include 'conexion.php'; 

// Verifica si los datos se han enviado por el método POST
if ($_SERVER["REQUEST_METHOD"] == "POST") { // <--- Inicia el bloque IF para el método POST

    // Recoge los datos del formulario de inicio de sesión
    $correo_ingresado = isset($_POST['correo']) ? $_POST['correo'] : '';
    $contrasena_ingresada = isset($_POST['password']) ? $_POST['password'] : '';

    // Verifica que los campos no estén vacíos
    if (empty($correo_ingresado) || empty($contrasena_ingresada)) {
        die("❌ Error: Ambos campos (correo y contraseña) son obligatorios para iniciar sesión.");
    }

    // Preparar la consulta SQL para buscar el usuario por correo electrónico
    // Usamos consultas preparadas para prevenir inyección SQL
    $stmt = $conexion->prepare("SELECT id, nombre_completo, correo, contrasena FROM usuarios WHERE correo = ?");
    
    // Verificar si la preparación de la consulta fue exitosa
    if ($stmt === false) {
        die("❌ Error al preparar la consulta: " . $conexion->error);
    }

    // Vincular el parámetro: "s" indica que es un string (correo)
    $stmt->bind_param("s", $correo_ingresado);

    // Ejecutar la consulta
    $stmt->execute();

    // Obtener el resultado de la consulta
    $resultado = $stmt->get_result();

    // Verificar si se encontró un usuario con ese correo
    if ($resultado->num_rows === 1) {
        // Obtener los datos del usuario
        $usuario = $resultado->fetch_assoc();

        // Verificar la contraseña: password_verify() compara la contraseña ingresada
        // con la contraseña hasheada almacenada en la base de datos.
        if (password_verify($contrasena_ingresada, $usuario['contrasena'])) {
            // Contraseña correcta: Iniciar sesión

            // Guardar datos del usuario en la sesión para usarlos en otras páginas
            $_SESSION['usuario_id'] = $usuario['id'];
            $_SESSION['usuario_nombre'] = $usuario['nombre_completo'];
            $_SESSION['usuario_correo'] = $usuario['correo'];

            // Redirigir al usuario a una página de bienvenida o panel
            header("Location: bienvenida.php"); 
            exit(); // Es importante usar exit() después de header()
        } else {
            // Contraseña incorrecta
            echo "❌ Error: Contraseña incorrecta.";
        }
    } else {
        // No se encontró un usuario con ese correo
        echo "❌ Error: Correo no registrado o credenciales inválidas.";
    }

    // Cerrar la declaración
    $stmt->close();

} else { // <--- Aquí es donde se cierra el IF principal.
    // Si alguien intenta acceder a login.php directamente sin enviar el formulario (es decir, por GET)
    echo "Acceso no permitido.";
}

// Cerrar la conexión a la base de datos al final
$conexion->close();
?>