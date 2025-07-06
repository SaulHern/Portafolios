document.addEventListener('DOMContentLoaded', () => {
    // Lógica para el Video de Presentación (si existe en la página)
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
        if (videoTitle) videoTitle.textContent = videoContent[lang].title;
        if (videoDescription) videoDescription.textContent = videoContent[lang].description;

        // Actualizar fuente del video si es necesario
        // Comprobar si la fuente actual es diferente para evitar recargas innecesarias
        if (videoPlayer && videoPlayer.querySelector('source') && videoPlayer.querySelector('source').src !== videoContent[lang].src) {
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
            videoPlayer.play().catch(error => {
                console.log('Error al intentar reproducir automáticamente el video:', error);
                // Esto puede ocurrir si el navegador bloquea la reproducción automática.
                // Podrías mostrar un mensaje para que el usuario haga clic en play.
            });
        }
    }

    // Event listeners para los botones de idioma
    if (langButtons.length > 0) { // Asegura que los botones existan en la página
        langButtons.forEach(button => {
            button.addEventListener('click', () => {
                setLanguage(button.dataset.lang);
            });
        });
        // Establecer idioma inicial al cargar la página (por defecto español)
        setLanguage('es');
    }

    // Lógica para la Barra de Navegación Fija (Sticky Nav)
    const mainNavPortfolio = document.getElementById('main-nav-portfolio');
    const portfolioHeader = document.querySelector('.portfolio-header');

    if (mainNavPortfolio && portfolioHeader) {
        const headerOffset = portfolioHeader.offsetHeight; 

        function makeNavSticky() {
            if (window.scrollY > headerOffset) {
                mainNavPortfolio.classList.add('sticky-nav');
            } else {
                mainNavPortfolio.classList.remove('sticky-nav');
            }
        }
        window.addEventListener('scroll', makeNavSticky);
        // Llamar una vez al inicio para que se aplique si la página carga ya con scroll
        makeNavSticky();
    }


    // Lógica para Autorellenar Campo de Interés en agendar-cita.html
    const interesSelect = document.getElementById('interes');
    if (interesSelect) { // Solo si estamos en la página de agendar-cita.html
        const urlParams = new URLSearchParams(window.location.search);
        const paqueteParam = urlParams.get('paquete');
        const hostingParam = urlParams.get('hosting');

        if (paqueteParam) {
            interesSelect.value = `paquete-${paqueteParam}`;
        } else if (hostingParam) {
            interesSelect.value = `hosting-${hostingParam}`;
        }
    }

    // Lógica para los botones de Email y WhatsApp en el formulario de agendar-cita.html
    const appointmentForm = document.getElementById('appointment-form');
    if (appointmentForm) { // Solo si estamos en la página de agendar-cita.html
        const sendEmailButton = document.getElementById('send-email');
        const sendWhatsappButton = document.getElementById('send-whatsapp');

        sendEmailButton.addEventListener('click', () => {
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const telefono = document.getElementById('telefono').value;
            const interes = document.getElementById('interes').value;
            const mensaje = document.getElementById('mensaje').value;

            // Simple validación para campos obligatorios
            if (!nombre || !email || !interes) {
                alert('Por favor, completa los campos de Nombre, Email e Interés.');
                return;
            }

            const subject = `Solicitud de Cita - ${nombre} (${interes})`; // Incluye el interés en el asunto
            const body = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono || 'No proporcionado'}\nInteresado en: ${interes}\n\nMensaje:\n${mensaje || 'Sin mensaje adicional'}`;

            window.location.href = `mailto:albertosaul341@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });

        sendWhatsappButton.addEventListener('click', () => {
            const nombre = document.getElementById('nombre').value;
            const interes = document.getElementById('interes').value;
            const mensaje = document.getElementById('mensaje').value;

            // Simple validación para campos obligatorios
            if (!nombre || !interes) { // Email no es necesario para WhatsApp
                alert('Por favor, completa los campos de Nombre e Interés.');
                return;
            }

            const whatsappMessage = `¡Hola Saul! Soy ${nombre}. Me contacto desde tu web. Estoy interesado en el paquete/servicio: ${interes}.\n\nMensaje: ${mensaje || 'Sin mensaje adicional'}\n\nMi email es: ${document.getElementById('email').value || 'No proporcionado'}`;

            window.open(`https://wa.me/525520708423?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        });
    }

    // Lógica de animación para el título (Hola, soy Saul Hernández)
    const animatedHeading = document.getElementById('animated-heading');
    if (animatedHeading) {
        animatedHeading.classList.add('fade-in-up'); // Se activa la animación CSS
    }

    // Lógica del menú hamburguesa para móvil
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links'); // Las ul con los enlaces

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Activa/desactiva el menú
            hamburgerMenu.classList.toggle('open'); // Activa/desactiva la animación del icono
            document.body.classList.toggle('no-scroll'); // Opcional: Evitar scroll del body
        });

        // Opcional: Cerrar el menú si se hace clic en un enlace
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('open');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // Lógica para el botón de modo oscuro/claro
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        // Cargar preferencia del usuario o establecer modo claro por defecto
        const currentTheme = localStorage.getItem('theme') || 'light-mode';
        document.body.classList.add(currentTheme);
        themeToggleButton.innerHTML = currentTheme === 'dark-mode' ? '<span class="material-icons">light_mode</span>' : '<span class="material-icons">dark_mode</span>';

        themeToggleButton.addEventListener('click', () => {
            if (document.body.classList.contains('light-mode')) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
                themeToggleButton.innerHTML = '<span class="material-icons">light_mode</span>';
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
                themeToggleButton.innerHTML = '<span class="material-icons">dark_mode</span>';
            }
        });
    }
});
