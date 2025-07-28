<?php
include 'conexion.php'; // Incluye el archivo de conexión

// Verifica que los datos se han enviado por POST y existen
$nombre_completo = isset($_POST['nombre']) ? $_POST['nombre'] : ''; 
$correo = isset($_POST['correo']) ? $_POST['correo'] : '';
$telefono = isset($_POST['telefono']) ? $_POST['telefono'] : '';
$contrasena = isset($_POST['password']) ? $_POST['password'] : ''; 

// Verificar si algún campo esencial está vacío (aunque el formulario HTML lo requiera, PHP es la última línea de defensa)
if (empty($nombre_completo) || empty($correo) || empty($telefono) || empty($contrasena)) {
    die("❌ Error: Todos los campos son obligatorios.");
}

// Hashear la contraseña antes de guardarla (¡MUY IMPORTANTE PARA LA SEGURIDAD!)
$contrasena_hash = password_hash($contrasena, PASSWORD_DEFAULT);

// Preparar la consulta SQL para evitar inyección SQL
$stmt = $conexion->prepare("INSERT INTO usuarios (nombre_completo, correo, telefono, contrasena) VALUES (?, ?, ?, ?)");

// Verificar si la preparación de la consulta fue exitosa
if ($stmt === false) {
    die("❌ Error al preparar la consulta: " . $conexion->error);
}

// Vincular parámetros. "ssss" indica que los 4 parámetros son strings.
$stmt->bind_param("ssss", $nombre_completo, $correo, $telefono, $contrasena_hash);

// Ejecutar la consulta
if ($stmt->execute()) {
    header("Location: registro_exitoso.php");
exit();
} else {
    echo "❌ Error en la inserción: " . $stmt->error;
}

// Cerrar la declaración y la conexión
$stmt->close();
$conexion->close();
?>