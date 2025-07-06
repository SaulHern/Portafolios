document.addEventListener('DOMContentLoaded', () => {

    // --- Mapeo de Textos para la Traducción de Idioma (GLOBAL) ---
    // Asegúrate de que todos los textos que quieras traducir en CUALQUIER PÁGINA
    // estén aquí con su 'data-lang-key' correspondiente en el HTML.
    const translations = {
        es: {
            "main_title": "Saul H. | Portafolio Frontend Developer",
            "animated_heading": "Hola, soy Saul Hernández",
            "hero_tagline": "Creador de Páginas Web, Convierte tus Ideas en una Realidad.",
            "nav_inicio": "Inicio",
            "nav_sobre_mi": "Sobre Mí",
            "nav_proyectos": "Proyectos",
            "nav_valor": "Valor",
            "nav_paquetes": "Paquetes",
            "nav_video": "Video",
            "nav_contacto": "Contacto",
            "about_me_title": "Sobre Mí",
            "about_me_text": "Soy Saul Hernández, un apasionado desarrollador frontend con un ojo para el diseño y una mente orientada a la funcionalidad. Mi objetivo es construir experiencias web intuitivas, eficientes y visualmente atractivas que no solo cumplan, sino que superen las expectativas de mis clientes. Con Syntora, transformo ideas en soluciones digitales robustas, aplicando las últimas tecnologías y las mejores prácticas de la industria.",
            "value_prop_title": "Mi Propuesta de Valor",
            "value_prop_text": "En Syntora, transformo tus ideas en experiencias web funcionales y visualmente impactantes. Mi enfoque es crear soluciones digitales a medida que no solo lucen increíbles, sino que también impulsan tus objetivos de negocio.",
            "projects_title": "Mis Proyectos",
            "project_agency_title": "Landing Page Agencia Digital",
            "project_agency_desc": "Página de aterrizaje completa y profesional para una agencia digital, con secciones de servicios, premios, testimonios y formulario de contacto. ¡Este es mi proyecto estrella!",
            "project_restaurant_title": "Mi Restaurante Demo",
            "project_restaurant_desc": "Aplicación web interactiva para pedidos de comida online, con gestión de carrito dinámica, navegación fluida por categorías y simulación de funcionalidades clave.",
            "project_sweet_title": "Dulce Tentación",
            "project_sweet_desc": "Una página web vibrante y visualmente atractiva diseñada para una pastelería o tienda de postres. Destaca por su presentación de productos y navegación amigable.",
            "project_guide_title": "Guía de Estudio Interactiva",
            "project_guide_desc": "Un recurso online creado para facilitar el aprendizaje y la organización de temas de estudio, incorporando elementos interactivos para una experiencia de usuario enriquecida.",
            "btn_view_demo": "Ver Demo",
            "btn_code": "Código",
            "video_title": "Conoce Mi Trabajo en Video",
            "video_description": "Un breve video donde presento mis habilidades, mi proceso de trabajo y por qué soy la mejor opción para tu próximo proyecto web.",
            "btn_bottom_packages": "Ver Paquetes de Diseño Web",
            "btn_bottom_services_contact": "Servicios y Contacto",
            "btn_bottom_schedule_appointment": "Agendar Cita",
            "footer_copyright": "2025 Saul H. Todos los derechos reservados.",
            // Textos para paquetes.html
            "packages_page_title": "Paquetes de Servicios - Saul H.",
            "packages_intro_text": "Precios ajustados para ayudarte a obtener una presencia web profesional y atractiva, diseñada para impulsar tus objetivos.",
            "basic_package_title": "Básico",
            "basic_package_feature1": "1 Sección (Landing Page simple o tarjeta de contacto digital)",
            "basic_package_feature2": "Diseño Adaptable a Móviles",
            "basic_package_feature3": "SEO Básico",
            "basic_package_feature4": "1 Formulario de Contacto",
            "basic_package_feature5": "Hosting en GitHub Pages",
            "choose_basic": "Elegir Básico",
            "advanced_package_title": "Avanzado",
            "advanced_package_feature1": "Hasta 5 Secciones estáticas",
            "advanced_package_feature2": "Diseño Responsivo y optimizado",
            "advanced_package_feature3": "Integración de contenido (textos, imágenes, videos)",
            "advanced_package_feature4": "1 Formulario de Contacto funcional",
            "advanced_package_feature5": "Integración de iconos de redes sociales",
            "advanced_package_feature6": "Hosting Gratuito GitHub Pages",
            "choose_advanced": "Elegir Avanzado",
            "premium_package_title": "Premium",
            "premium_package_feature1": "Hasta 7 Secciones o una App interactiva",
            "premium_package_feature2": "Diseño UI/UX personalizado",
            "premium_package_feature3": "Funcionalidades interactivas avanzadas (API, LocalStorage, Acordeones)",
            "premium_package_feature4": "Optimización para SEO avanzada",
            "premium_package_feature5": "Hosting Gratuito GitHub Pages",
            "premium_package_feature6": "Soporte Básico Post-Entrega",
            "choose_premium": "Elegir Premium",
            "hosting_options_title": "Opciones de Hosting y Dominio (Extras al Paquete)",
            "hosting_intro_text": "Todos mis paquetes incluyen un hosting gratuito básico (GitHub Pages). Para un rendimiento superior, una presencia más profesional y funcionalidades avanzadas, recomiendo considerar estas opciones de hosting y dominio pagadas. Estos precios son estimados anuales y no incluyen una tarifa de gestión.",
            "basic_hosting_title": "Hosting y Dominio Básico",
            "basic_hosting_feature1": "Dominio .com/.net/.org (1 año)",
            "basic_hosting_feature2": "Hosting Compartido Estándar",
            "basic_hosting_feature3": "Certificado SSL Gratuito",
            "basic_hosting_feature4": "1 Cuenta de Email Profesional",
            "choose_basic_hosting": "Elegir Básico",
            "advanced_hosting_title": "Hosting y Dominio Avanzado",
            "advanced_hosting_feature1": "Dominio .com/.io (1 año)",
            "advanced_hosting_feature2": "Hosting Compartido Premium (más recursos)",
            "advanced_hosting_feature3": "Certificado SSL Gratuito",
            "advanced_hosting_feature4": "Cuentas de Email Ilimitadas",
            "advanced_hosting_feature5": "Caching Avanzado para Velocidad",
            "choose_advanced_hosting": "Elegir Avanzado",
            "premium_hosting_title": "Hosting y Dominio Premium",
            "premium_hosting_feature1": "Dominio a Elección (1 año, incluyendo .mx)",
            "premium_hosting_feature2": "Hosting Gestionado (WordPress/Cloud)",
            "premium_hosting_feature3": "Certificado SSL y CDN Integrado",
            "premium_hosting_feature4": "Backups Diarios Automáticos",
            "premium_hosting_feature5": "Soporte Técnico Prioritario 24/7",
            "choose_premium_hosting": "Elegir Premium",
            // Textos para contacto.html
            "contact_page_title": "Contacto y Servicios - Saul H.",
            "contact_services_title": "¿Qué Incluyen Mis Servicios?",
            "contact_services_desc": "Descubre la gama completa de funcionalidades y características que te ofrezco en cada proyecto, diseñadas para asegurar el éxito de tu presencia digital.",
            "custom_web_design": "Diseño Web Personalizado",
            "responsive_frontend_dev": "Desarrollo Frontend Responsivo",
            "content_integration": "Integración de Contenido (textos, imágenes)",
            "basic_seo_opt": "Optimización para Motores de Búsqueda (SEO Básico)",
            "functional_contact_forms": "Formularios de Contacto Funcionales",
            "github_pages_hosting": "Configuración Inicial en GitHub Pages (hosting gratuito)",
            "basic_post_delivery_support": "Soporte Básico Post-Entrega",
            "api_key_handling": "Manejo de API Key",
            "local_storage_management": "Manejo de LocalStorage",
            "faq_accordions": "Acordeones FAQ",
            "contact_info_title": "Información de Contacto",
            "contact_info_desc": "Estoy listo para escuchar tus ideas y transformar tu visión en una realidad digital. Contáctame a través de los siguientes medios.",
            "saul_hernandez_name": "Saul Hernández",
            "my_github": "Mi GitHub",
            "ready_to_start": "¿Listo para empezar? ",
            "schedule_appointment_cta": "Agenda una Cita",
            // Textos para agendar-cita.html
            "schedule_appointment_page_title": "Agendar Cita - Saul H.",
            "schedule_appointment_main_title": "Agendar una Cita",
            "schedule_appointment_main_desc": "¡Gracias por tu interés en mis servicios! Por favor, completa este formulario para agendar una consulta gratuita. Me pondré en contacto contigo a la brevedad.",
            "your_full_name": "Tu Nombre Completo:",
            "your_email": "Tu Email:",
            "your_phone_optional": "Tu Teléfono (opcional):",
            "i_am_interested_in": "Estoy interesado en:",
            "select_option": "Selecciona una opción",
            "basic_package": "Paquete Básico",
            "advanced_package": "Paquete Avanzado",
            "premium_package": "Paquete Premium",
            "basic_hosting_domain": "Hosting y Dominio Básico",
            "advanced_hosting_domain": "Hosting y Dominio Avanzado",
            "premium_hosting_domain": "Hosting y Dominio Premium",
            "general_inquiry": "Consulta General",
            "describe_project_questions": "Describe brevemente tu proyecto o tus dudas:",
            "send_email": "Enviar por Email",
            "send_whatsapp": "Enviar por WhatsApp",
            "contact_note_bottom": "También puedes contactarme directamente vía WhatsApp con el botón flotante."
        },
        en: {
            "main_title": "Saul H. | Frontend Developer Portfolio",
            "animated_heading": "Hi, I'm Saul Hernández",
            "hero_tagline": "Web Page Creator, Turn Your Ideas into Reality.",
            "nav_inicio": "Home",
            "nav_sobre_mi": "About Me",
            "nav_proyectos": "Projects",
            "nav_valor": "Value",
            "nav_paquetes": "Packages",
            "nav_video": "Video",
            "nav_contacto": "Contact",
            "about_me_title": "About Me",
            "about_me_text": "I am Saul Hernández, a passionate frontend developer with an eye for design and a mind oriented towards functionality. My goal is to build intuitive, efficient, and visually appealing web experiences that not only meet, but exceed my clients' expectations. With Syntora, I transform ideas into robust digital solutions, applying the latest technologies and best industry practices.",
            "value_prop_title": "My Value Proposition",
            "value_prop_text": "At Syntora, I transform your digital ideas into functional and visually impactful web experiences. My focus is on creating tailored digital solutions that not only look incredible, but also drive your business goals.",
            "projects_title": "My Projects",
            "project_agency_title": "Digital Agency Landing Page",
            "project_agency_desc": "A complete and professional landing page for a digital agency, featuring sections on services, awards, testimonials, and a contact form. This is my flagship project!",
            "project_restaurant_title": "My Restaurant Demo",
            "project_restaurant_desc": "Interactive web application for online food ordering, with dynamic cart management, smooth category navigation, and key feature simulation.",
            "project_sweet_title": "Sweet Temptation",
            "project_sweet_desc": "A vibrant and visually appealing website designed for a pastry shop or dessert store. It stands out for its product presentation and user-friendly navigation.",
            "project_guide_title": "Interactive Study Guide",
            "project_guide_desc": "An online resource created to facilitate learning and organizing study topics, incorporating interactive elements for an enriched user experience.",
            "btn_view_demo": "View Demo",
            "btn_code": "Code",
            "video_title": "Learn About My Work in Video",
            "video_description": "A brief video where I present my skills, my work process, and why I am the best choice for your next web project.",
            "btn_bottom_packages": "View Web Design Packages",
            "btn_bottom_services_contact": "Services & Contact",
            "btn_bottom_schedule_appointment": "Schedule Appointment",
            "footer_copyright": "2025 Saul H. All rights reserved.",
            // Textos para paquetes.html
            "packages_page_title": "Service Packages - Saul H.",
            "packages_intro_text": "Adjusted prices to help you get a professional and attractive web presence, designed to boost your goals.",
            "basic_package_title": "Basic",
            "basic_package_feature1": "1 Section (Simple Landing Page or digital business card)",
            "basic_package_feature2": "Mobile Responsive Design",
            "basic_package_feature3": "Basic SEO",
            "basic_package_feature4": "1 Contact Form",
            "basic_package_feature5": "Hosting on GitHub Pages",
            "choose_basic": "Choose Basic",
            "advanced_package_title": "Advanced",
            "advanced_package_feature1": "Up to 5 Static Sections",
            "advanced_package_feature2": "Responsive & Optimized Design",
            "advanced_package_feature3": "Content Integration (text, images, videos)",
            "advanced_package_feature4": "1 Functional Contact Form",
            "advanced_package_feature5": "Social Media Icons Integration",
            "advanced_package_feature6": "Free GitHub Pages Hosting",
            "choose_advanced": "Choose Advanced",
            "premium_package_title": "Premium",
            "premium_package_feature1": "Up to 7 Sections or Interactive App",
            "premium_package_feature2": "Custom UI/UX Design",
            "premium_package_feature3": "Advanced Interactive Features (API, LocalStorage, Accordions)",
            "premium_package_feature4": "Advanced SEO Optimization",
            "premium_package_feature5": "Free GitHub Pages Hosting",
            "premium_package_feature6": "Basic Post-Delivery Support",
            "choose_premium": "Choose Premium",
            "hosting_options_title": "Hosting & Domain Options (Package Extras)",
            "hosting_intro_text": "All my packages include basic free hosting (GitHub Pages). For superior performance, a more professional presence, and advanced features, I recommend considering these paid hosting and domain options. These prices are annual estimates and not include a management fee.",
            "basic_hosting_title": "Basic Hosting & Domain",
            "basic_hosting_feature1": ".com/.net/.org Domain (1 year)",
            "basic_hosting_feature2": "Standard Shared Hosting",
            "basic_hosting_feature3": "Free SSL Certificate",
            "basic_hosting_feature4": "1 Professional Email Account",
            "choose_basic_hosting": "Choose Basic",
            "advanced_hosting_title": "Advanced Hosting & Domain",
            "advanced_hosting_feature1": ".com/.io Domain (1 year)",
            "advanced_hosting_feature2": "Premium Shared Hosting (more resources)",
            "advanced_hosting_feature3": "Free SSL Certificate",
            "advanced_hosting_feature4": "Unlimited Email Accounts",
            "advanced_hosting_feature5": "Advanced Caching for Speed",
            "choose_advanced_hosting": "Choose Advanced",
            "premium_hosting_title": "Premium Hosting & Domain",
            "premium_hosting_feature1": "Domain of Choice (1 year, including .mx)",
            "premium_hosting_feature2": "Managed Hosting (WordPress/Cloud)",
            "premium_hosting_feature3": "SSL Certificate & Integrated CDN",
            "premium_hosting_feature4": "Automatic Daily Backups",
            "premium_hosting_feature5": "24/7 Priority Technical Support",
            "choose_premium_hosting": "Choose Premium",
            // Textos para contacto.html
            "contact_page_title": "Contact & Services - Saul H.",
            "contact_services_title": "What Do My Services Include?",
            "contact_services_desc": "Discover the full range of features and functionalities I offer in each project, designed to ensure the success of your digital presence.",
            "custom_web_design": "Custom Web Design",
            "responsive_frontend_dev": "Responsive Frontend Development",
            "content_integration": "Content Integration (text, images)",
            "basic_seo_opt": "Basic SEO Optimization",
            "functional_contact_forms": "Functional Contact Forms",
            "github_pages_hosting": "Initial GitHub Pages Setup (free hosting)",
            "basic_post_delivery_support": "Basic Post-Delivery Support",
            "api_key_handling": "API Key Handling",
            "local_storage_management": "LocalStorage Management",
            "faq_accordions": "FAQ Accordions",
            "contact_info_title": "Contact Information",
            "contact_info_desc": "I'm ready to hear your ideas and transform your vision into a digital reality. Contact me through the following channels.",
            "saul_hernandez_name": "Saul Hernández",
            "my_github": "My GitHub",
            "ready_to_start": "Ready to start? ",
            "schedule_appointment_cta": "Schedule an Appointment",
            // Textos para agendar-cita.html
            "schedule_appointment_page_title": "Schedule Appointment - Saul H.",
            "schedule_appointment_main_title": "Schedule an Appointment",
            "schedule_appointment_main_desc": "Thank you for your interest in my services! Please complete this form to schedule a free consultation. I will contact you shortly.",
            "your_full_name": "Your Full Name:",
            "your_email": "Your Email:",
            "your_phone_optional": "Your Phone (optional):",
            "i_am_interested_in": "I am interested in:",
            "select_option": "Select an option",
            "basic_package": "Basic Package",
            "advanced_package": "Advanced Package",
            "premium_package": "Premium Package",
            "basic_hosting_domain": "Basic Hosting & Domain",
            "advanced_hosting_domain": "Advanced Hosting & Domain",
            "premium_hosting_domain": "Premium Hosting & Domain",
            "general_inquiry": "General Inquiry",
            "describe_project_questions": "Briefly describe your project or questions:",
            "send_email": "Send via Email",
            "send_whatsapp": "Send via WhatsApp",
            "contact_note_bottom": "You can also contact me directly via WhatsApp using the floating button."
        }
    };

    // Función global para aplicar la traducción
    function applyTranslation(lang) {
        document.querySelectorAll('[data-es], [data-en], [data-lang-key]').forEach(element => {
            let key;
            if (element.hasAttribute('data-lang-key')) {
                key = element.getAttribute('data-lang-key');
                if (translations[lang] && translations[lang][key]) {
                    element.textContent = translations[lang][key];
                }
            } else if (element.hasAttribute(`data-${lang}`)) {
                element.textContent = element.getAttribute(`data-${lang}`);
            }
        });

        // Actualizar el título de la página (ya es global, lo ajustamos para cada página)
        const pageTitleElement = document.querySelector('head title');
        if (pageTitleElement) {
            const currentPath = window.location.pathname.split('/').pop();
            if (currentPath === 'index.html' || currentPath === '') {
                pageTitleElement.textContent = translations[lang].main_title;
            } else if (currentPath === 'paquetes.html') {
                pageTitleElement.textContent = translations[lang].packages_page_title;
            } else if (currentPath === 'agendar-cita.html') {
                pageTitleElement.textContent = translations[lang].schedule_appointment_page_title;
            } else if (currentPath === 'contacto.html') {
                pageTitleElement.textContent = translations[lang].contact_page_title;
            }
        }
    }


    // Lógica para el Video de Presentación (si existe en la página)
    const videoPlayer = document.getElementById('presentation-player');
    const langButtonsVideo = document.querySelectorAll('.presentation-video-section .lang-button'); // Solo los botones del video

    if (videoPlayer) { // Asegurarse de que el videoPlayer exista en la página
        const videoTitle = document.getElementById('video-title');
        const videoDescription = document.getElementById('video-description');
        
        function setVideoSpecificContent(lang) {
            videoTitle.textContent = translations[lang].video_title;
            videoDescription.textContent = translations[lang].video_description;

            const currentSource = videoPlayer.querySelector('source');
            const currentSrc = currentSource ? currentSource.src : '';

            if (currentSrc !== videoContent[lang].src) { // Evitar recargas si ya es el mismo idioma
                const currentTime = videoPlayer.currentTime;
                const isPaused = videoPlayer.paused;

                // Eliminar fuente existente
                while (videoPlayer.firstChild) {
                    videoPlayer.removeChild(videoPlayer.firstChild);
                }

                // Añadir nueva fuente
                const newSource = document.createElement('source');
                newSource.src = videoContent[lang].src;
                newSource.type = 'video/mp4';
                videoPlayer.appendChild(newSource);
                
                videoPlayer.poster = videoContent[lang].poster; // Actualiza el póster
                
                videoPlayer.load();
                videoPlayer.currentTime = currentTime;
                if (!isPaused) {
                    videoPlayer.play().catch(error => { console.log('Video autoplay blocked:', error); });
                }
            }
        }
        
        // Event listeners para los botones de idioma del video
        if (langButtonsVideo.length > 0) {
            langButtonsVideo.forEach(button => {
                button.addEventListener('click', () => {
                    const lang = button.dataset.lang;
                    // No llamamos a applyTranslation global aquí si ya lo hace el global selector
                    setVideoSpecificContent(lang); // Solo contenido específico del video
                });
            });
            // Establecer idioma inicial del video al cargar la página
            setVideoSpecificContent(localStorage.getItem('language') || 'es');
        }
    }

    // --- Lógica de la Barra de Navegación Fija (Sticky Nav) ---
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
        makeNavSticky(); // Llama una vez al inicio
    }


    // --- Lógica para Autorellenar Campo de Interés en agendar-cita.html ---
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

    // --- Lógica para los botones de Email y WhatsApp en el formulario de agendar-cita.html ---
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

            const subject = `Solicitud de Cita - ${nombre} (${interes})`;
            const body = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono || 'No proporcionado'}\nInteresado en: ${interes}\n\nMensaje:\n${mensaje || 'Sin mensaje adicional'}`;

            window.location.href = `mailto:albertosaul341@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });

        sendWhatsappButton.addEventListener('click', () => {
            const nombre = document.getElementById('nombre').value;
            const interes = document.getElementById('interes').value;
            const mensaje = document.getElementById('mensaje').value;

            // Simple validación para campos obligatorios
            if (!nombre || !interes) {
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

    // --- Lógica del Menú Hamburguesa para Móvil ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links'); // El <ul> con los enlaces
    const allNavLinks = document.querySelectorAll('.nav-links a'); // Todos los <a> dentro del menú
    
    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active'); // Muestra/oculta el menú lateral
            hamburgerMenu.classList.toggle('open'); // Anima el icono de hamburguesa
            document.body.classList.toggle('no-scroll'); // Previene scroll del body
        });

        // Cerrar menú al hacer clic en un enlace
        allNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    hamburgerMenu.classList.remove('open');
                    document.body.classList.remove('no-scroll');
                }
            });
        });
    }

    // --- Lógica para el Botón de Modo Oscuro/Claro (GLOBAL) ---
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
            // Después de cambiar el tema, fuerza la actualización del video si está visible
            if (videoPlayer) {
                // Pequeño truco para que el video se adapte a un posible cambio de tema en su poster/fondo
                videoPlayer.load(); 
                videoPlayer.play().catch(e => console.log("Video autoplay blocked after theme switch:", e));
            }
        });
    }

    // --- Lógica para el Selector de Idioma (GLOBAL) ---
    const globalLangButtons = document.querySelectorAll('.language-selector-global .lang-button');
    // Cargar preferencia de idioma del usuario o establecer español por defecto
    const currentLanguage = localStorage.getItem('language') || 'es';
    
    // Aplicar traducción inicial y activar el botón correcto
    applyTranslation(currentLanguage); // Llama a la función global de traducción
    globalLangButtons.forEach(button => {
        if (button.dataset.lang === currentLanguage) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    globalLangButtons.forEach(button => {
        button.addEventListener('click', () => {
            const newLang = button.dataset.lang;
            if (newLang !== localStorage.getItem('language')) { // Solo si el idioma es diferente
                localStorage.setItem('language', newLang);
                applyTranslation(newLang); // Aplica la traducción a todos los elementos marcados
                
                // Actualiza los botones activos
                globalLangButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Si hay un reproductor de video en la página, también actualiza su idioma específico
                if (videoPlayer) {
                    const videoTitle = document.getElementById('video-title');
                    const videoDescription = document.getElementById('video-description');
                    // Actualiza el texto específico del video
                    videoTitle.textContent = translations[newLang].video_title;
                    videoDescription.textContent = translations[newLang].video_description;
                    
                    const currentSource = videoPlayer.querySelector('source');
                    const currentSrc = currentSource ? currentSource.src : '';

                    if (currentSrc !== videoContent[newLang].src) { // Cambiar video si la fuente es diferente
                         const currentTime = videoPlayer.currentTime;
                         const isPaused = videoPlayer.paused;
                         while (videoPlayer.firstChild) { videoPlayer.removeChild(videoPlayer.firstChild); }
                         const newSource = document.createElement('source');
                         newSource.src = videoContent[newLang].src;
                         newSource.type = 'video/mp4';
                         videoPlayer.appendChild(newSource);
                         videoPlayer.poster = videoContent[newLang].poster;
                         videoPlayer.load();
                         videoPlayer.currentTime = currentTime;
                         if (!isPaused) { videoPlayer.play().catch(e => console.log("Video autoplay blocked:", e)); }
                    }
                }
            }
        });
    });
});
