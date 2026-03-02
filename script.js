// script.js

// Interactivity Example
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
}

// Lazy Loading Images
document.querySelectorAll('img[data-src]').forEach(img => {
    img.src = img.getAttribute('data-src');
    img.onload = () => img.removeAttribute('data-src');
});

// Performance Monitoring
if (typeof(window.PerformanceObserver) !== 'undefined') {
    const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
            console.log(entry);
        });
    });
    observer.observe({entryTypes: ['mark', 'measure']});
}