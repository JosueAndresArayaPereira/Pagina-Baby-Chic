// Cambia la imagen automáticamente cada 3 segundos
setInterval(function() {
    cambiarImagen();
}, 3000);

function cambiarImagen() {
    // Obtiene la posición actual del src
    var posicion = parseInt(document.getElementById('imagen1').src.charAt(document.getElementById('imagen1').src.length - 5));

    // Calcula la nueva posición
    var nuevaPosicion = posicion + 1;

    // Asegura que la nueva posición esté entre 1 y 3 (o el número total de imágenes)
    nuevaPosicion = (nuevaPosicion > 3) ? 1 : nuevaPosicion;

    // Construye la nueva ruta
    var nuevaRutaCompleta = 'imagenes/image' + nuevaPosicion + '.png';

    // Cambia la imagen con un efecto de desvanecimiento
    document.getElementById('imagen1').style.transform = 'scale(0)';
    setTimeout(function() {
        document.getElementById('imagen1').src = nuevaRutaCompleta;
        document.getElementById('imagen1').style.transform = 'scale(1)';
    }, 500); // Tiempo de espera para el desvanecimiento
}