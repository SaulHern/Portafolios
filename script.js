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
