function validarCorreo(correo) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function soloLetras(texto) {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    var textoNumero = numero.toString();
    return textoNumero.length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    var fechaNac = new Date(fechaNacimiento);
    var hoy = new Date();
    var edad = hoy.getFullYear() - fechaNac.getFullYear();
    var mes = hoy.getMonth() - fechaNac.getMonth();
   
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}
function esMayorDeEdad(fechaNacimiento) {
    var edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}
function validarPassword(password) {
    var tieneMayuscula = /[A-Z]/.test(password);
    var tieneMinuscula = /[a-z]/.test(password);
    var tieneNumero = /[0-9]/.test(password);
    var tieneEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    
    return password.length >= 8 && tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial;
}
function limpiarEspacios(texto) {
    return texto.trim();
}

function esNumeroPositivo(numero) {
    return parseInt(numero) > 0;
}