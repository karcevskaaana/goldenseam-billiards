document.addEventListener('DOMContentLoaded', function() {
    const productItems = document.querySelectorAll('.product-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    productItems.forEach(item => {
        observer.observe(item);
    });

    setTimeout(() => {
        productItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                item.classList.add('visible');
            }
        });
    }, 200);
});
