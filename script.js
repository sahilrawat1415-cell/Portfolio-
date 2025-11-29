document.addEventListener('DOMContentLoaded', () => {
    // 1. Typing Effect
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const textToType = typingElement.getAttribute('data-text') || typingElement.innerText;
        typingElement.innerText = '';
        let charIndex = 0;

        function type() {
            if (charIndex < textToType.length) {
                typingElement.innerText += textToType.charAt(charIndex);
                charIndex++;
                setTimeout(type, 50

                );
            }
        }
        type();
    }

    // 2. Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // 3. Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('nav');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('open');

            // Toggle icon
            if (navLinks.classList.contains('active')) {
                menuBtn.textContent = '✕';
            } else {
                menuBtn.textContent = '☰';
            }
        });
    }
});
