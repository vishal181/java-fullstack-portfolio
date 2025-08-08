// Fade-in on scroll
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Resume button click animation
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = '0 0 20px #00bfff';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = 'none';
  });
});
