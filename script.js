const backgroundSection = document.getElementById('Background');
const skillsSection = document.getElementById('Skills');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');

            // Animate each skill with delay
            if (entry.target.id === 'Skills') {
                const skills = entry.target.querySelectorAll('.skill');
                skills.forEach((skill, index) => {
                    skill.style.setProperty('--delay', `${index * 0.1}s`);
                })
            }
        }
    });
}, {
    threshold: 0.1
});

observer.observe(backgroundSection);
observer.observe(skillsSection);