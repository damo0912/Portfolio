// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Typing Animation
    const texts = [
        "Student",
        "Front-End Developer",
        "Video Editor",
        "Graphic Designer"
    ];
    
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';    
    
    const typingElement = document.getElementById('typing-text');
    
    function type() {
        if (count === texts.length) {
            count = 0;
        }
        
        currentText = texts[count];
        
        letter = currentText.slice(0, ++index);
        
        typingElement.textContent = letter;
        
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Pause before next word
        } else {
            setTimeout(type, 80);
        }
    }
    
    // Start typing
    setTimeout(() => {
        type();
    }, 800);
    
    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navbarHeight = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.scrollY - navbarHeight;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Close modal when clicking outside or escape (Bootstrap handles this)
    console.log('%c✅ Portfolio website loaded successfully!', 'color: #fff; font-size: 14px;');
});