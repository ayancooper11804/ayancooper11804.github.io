const backgroundSection = document.getElementById('Background');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            backgroundSection.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

observer.observe(backgroundSection);