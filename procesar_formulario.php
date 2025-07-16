<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars(trim($_POST["nombre"]));
    $apellido = htmlspecialchars(trim($_POST["apellido"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $telefono = htmlspecialchars(trim($_POST["telefono"]));

    $destinatario = "tucorre@MooneMaker.com"; // Cambia esto por tu correo electrónico
    $asunto_email = "Nuevo mensaje de contacto desde el formulario";

    $contenido = "Nombre: " . $nombre . "\r\n";
    $contenido .= "Apellido: " . $apellido . "\r\n";
    $contenido .= "Correo electrónico: " . $email . "\r\n";
    $contenido .= "Teléfono: " . $telefono . "\r\n";

    $headers = "From: no-reply@tudominio.com" . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($destinatario, $asunto_email, $contenido, $headers)) {
        echo "Mensaje enviado con éxito.";
    } else {
        echo "Error al enviar el mensaje. Intente nuevamente.";
    }
} else {
    header("Location: landing.html");
    exit();
}
?>