document.addEventListener('DOMContentLoaded', function() {

    // --- Efecto de Escritura (Typing Effect) ---
    const typingElement = document.getElementById('typing-effect');
    const words = ["Creativo", "Funcional", "Moderno", "Eficiente"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
            // Borrando
            typingElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            if (charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length;
            }
        } else {
            // Escribiendo
            typingElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            if (charIndex === currentWord.length) {
                isDeleting = true;
                // Pausa antes de borrar
                setTimeout(type, 1500); 
                return;
            }
        }
        // Velocidad de escritura/borrado
        setTimeout(type, isDeleting ? 100 : 200);
    }
    
    // Iniciar el efecto después de una breve pausa
    setTimeout(type, 500);


    // --- Botón de Scroll hacia arriba ---
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollTopBtn.classList.add('show');
        } else {

            scrollTopBtn.classList.remove('show');
        }
    };

    scrollTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // --- Ocultar/Mostrar header al hacer scroll ---
    let lastScrollTop = 0;
    const header = document.querySelector('.main-header');

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop && scrollTop > header.offsetHeight) {
            header.style.top = `-${header.offsetHeight}px`; // Ocultar
        } else {
            header.style.top = '0'; // Mostrar
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

});
document.addEventListener('DOMContentLoaded', () => {
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
        if (videoPlayer.src !== videoContent[lang].src) {
            const currentTime = videoPlayer.currentTime; // Guarda el tiempo actual
            const isPaused = videoPlayer.paused; // Guarda si estaba pausado

            videoPlayer.src = videoContent[lang].src;
            videoPlayer.poster = videoContent[lang].poster; // Actualiza el póster
            
            // Recargar video para que el cambio de fuente surta efecto
            videoPlayer.load();

            // Intentar mantener el tiempo y estado de reproducción
            videoPlayer.currentTime = currentTime;
            if (!isPaused) {
                videoPlayer.play().catch(error => {
                    console.log('Error al intentar reproducir automáticamente el video:', error);
                    // Aquí podrías mostrar un mensaje al usuario para que haga clic en play
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
    setLanguage('es');
});
