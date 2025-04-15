// Collapsible блоки
const collapsibles = document.querySelectorAll('.collapsible');
collapsibles.forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        } 
    });
});

// Кнопка "Наверх"
const backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Анимация прогресс-баров
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
    });
});