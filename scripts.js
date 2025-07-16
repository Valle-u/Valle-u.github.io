function toggleDescripcion(event, btn) {
    event.stopPropagation();
    // Cierra todas las descripciones activas menos la actual
    document.querySelectorAll('.descripcion-servicio.activa').forEach(function(desc) {
        if (desc !== btn.nextElementSibling) {
            desc.classList.remove('activa');
            if (desc.previousElementSibling && desc.previousElementSibling.classList.contains('btn-ver-mas')) {
                desc.previousElementSibling.textContent = 'Ver más';
            }
        }
    });
    // Alterna la descripción actual
    const desc = btn.nextElementSibling;
    desc.classList.toggle('activa');
    btn.textContent = desc.classList.contains('activa') ? 'Ver menos' : 'Ver más';
}

function cerrarPopupServicio() {
    document.getElementById('popupOverlay').classList.remove('activa');
    document.getElementById('popupServicio').classList.remove('activa');
    // Pausa el video si está abierto
    var video = document.getElementById('popupServicioContenido').querySelector('video');
    if(video) { video.pause(); video.currentTime = 0; }
}

document.querySelectorAll('.item-servicios-section-video').forEach(function(item) {
    item.addEventListener('click', function() {
        var videoHtml = item.querySelector('video').outerHTML;
        document.getElementById('popupServicioContenido').innerHTML = videoHtml;
        document.getElementById('popupOverlay').classList.add('activa');
        document.getElementById('popupServicio').classList.add('activa');
        setTimeout(function() {
            var video = document.getElementById('popupServicioContenido').querySelector('video');
            if(video) { video.play(); }
        }, 100);
    });
});

// Permite cerrar el popup haciendo click en el overlay
document.getElementById('popupOverlay').onclick = cerrarPopupServicio;

// Opcional: cerrar con ESC
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") cerrarPopupServicio();
});
