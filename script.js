document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el Video de Presentación
    const videoPlayer = document.getElementById('presentation-player');
    const langButtons = document.querySelectorAll('.lang-button');
    const videoTitle = document.getElementById('video-title');
    const videoDescription = document.getElementById('video-description');

    // Datos del video y texto por idioma
    const videoContent = {
        es: {
            title: 'Conoce Mi Trabajo en Video',
            description: 'Un breve video donde presento mis habilidades, mi proceso de trabajo y por qué soy la mejor opción para tu próximo proyecto web.',
            src: 'videos/presentacion-es.mp4',
            poster: 'images/video-poster-es.jpg' // Opcional: una imagen de póster para el video en español
        },
        en: {
            title: 'Learn About My Work in Video',
            description: 'A brief video where I present my skills, my work process, and why I am the best choice for your next web project.',
            src: 'videos/presentacion-en.mp4',
            poster: 'images/video-poster-en.jpg' // Opcional: una imagen de póster para el video en inglés
        }
    };

    function setLanguage(lang) {
        // Actualizar botón activo
        langButtons.forEach(button => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Actualizar contenido de texto
        videoTitle.textContent = videoContent[lang].title;
        videoDescription.textContent = videoContent[lang].description;

        // Actualizar fuente del video si es necesario
        // Comprobar si la fuente actual es diferente para evitar recargas innecesarias
        if (videoPlayer.querySelector('source') && videoPlayer.querySelector('source').src !== videoContent[lang].src) {
            const currentTime = videoPlayer.currentTime; // Guarda el tiempo actual
            const isPaused = videoPlayer.paused; // Guarda si estaba pausado

            // Eliminar fuente existente y añadir la nueva
            while (videoPlayer.firstChild) {
                videoPlayer.removeChild(videoPlayer.firstChild);
            }
            const newSource = document.createElement('source');
            newSource.src = videoContent[lang].src;
            newSource.type = 'video/mp4'; // Asegura el tipo correcto
            videoPlayer.appendChild(newSource);
            
            videoPlayer.poster = videoContent[lang].poster; // Actualiza el póster
            
            // Recargar video para que el cambio de fuente surta efecto
            videoPlayer.load();

            // Intentar mantener el tiempo y estado de reproducción
            videoPlayer.currentTime = currentTime;
            if (!isPaused) {
                // Solo intentar reproducir si el video no estaba pausado
                videoPlayer.play().catch(error => {
                    console.log('Error al intentar reproducir automáticamente el video:', error);
                    // Esto puede ocurrir si el navegador bloquea la reproducción automática.
                    // Podrías mostrar un mensaje para que el usuario haga clic en play.
                });
            }
        }
    }

    // Event listeners para los botones de idioma
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            setLanguage(button.dataset.lang);
        });
    });

    // Establecer idioma inicial al cargar la página (por defecto español)
    // Asegurarse de que el DOM esté listo antes de llamar a setLanguage
    setLanguage('es');

    // Lógica para la Barra de Navegación Fija (Sticky Nav)
    const mainNavPortfolio = document.getElementById('main-nav-portfolio');
    const headerHeight = document.querySelector('.portfolio-header').offsetHeight; // Altura del header superior

    function makeNavSticky() {
        // La navegación se vuelve "sticky" después de que el header superior ha pasado
        if (window.scrollY > headerHeight) {
            mainNavPortfolio.classList.add('sticky-nav');
        } else {
            mainNavPortfolio.classList.remove('sticky-nav');
        }
    }

    // Añadir estilos para .sticky-nav en tu CSS:
    // .main-nav-portfolio.sticky-nav {
    //     position: fixed;
    //     top: 0;
    //     left: 0;
    //     width: 100%;
    //     box-shadow: 0 2px 10px rgba(0,0,0,0.4);
    //     background-color: rgba(26, 26, 26, 0.95); /* Un poco transparente */
    //     padding: 10px 0; /* Más compacto */
    // }
    // Puedes añadir window.addEventListener('scroll', makeNavSticky); si quieres este efecto.
    // Para este diseño, la barra ya es sticky por defecto con position: sticky; en el CSS.
    // La lógica JS es más útil si se quiere un efecto de cambio de tamaño/color al hacer scroll.
});
