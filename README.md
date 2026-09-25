Librería de Validaciones - Utilería JS
Autor: Mario E. Grajales
Problema que resuelve: Cuando hacemos formularios, casi siempre necesitamos validar correos, contraseñas seguras y edades. Esta librería centraliza estas validaciones comunes para no tener que escribir el mismo código desde cero cada vez, usando JavaScript puro sin depender de librerías pesadas.
Instalación
Para usar estas validaciones en tu proyecto, solo debes descargar el archivo utileria.js y guardarlo en la carpeta js/. Luego, agrega esta línea dentro de la etiqueta <head> de tu archivo HTML:
<script src="js/utileria.js"></script>


Uso y Ejemplos de Código
Aquí te muestro cómo puedes usar las funciones principales en tu propio archivo de JavaScript o dentro de etiquetas <script>:
1. Validar formato de correo
var miCorreo = "juan.perez@email.com";
var esValido = validarCorreo(miCorreo);

if (esValido) {
    console.log("El correo es correcto.");
} else {
    console.log("Formato inválido.");
}


2. Calcular edad exacta
var fechaNac = "2005-10-15";
var edad = calcularEdad(fechaNac);
console.log("El usuario tiene: " + edad + " años.");


3. Validar una contraseña segura
La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.
var pass = "HolaMundo123!";
if (validarPassword(pass)) {
    console.log("Contraseña fuerte aceptada.");
}


4. Función extra: Limpiar espacios
Esta es una función propia que creé para quitar los espacios accidentales al inicio o al final de lo que escribe el usuario.
var textoSucio = "   Pedro   ";
var textoLimpio = limpiarEspacios(textoSucio);
console.log(textoLimpio); // Imprime "Pedro"


Capturas de Pantalla y video
https://drive.google.com/drive/folders/1DtjbbPwYoZPdWJQrLV5YltrrUzjcaAId?usp=drive_link
