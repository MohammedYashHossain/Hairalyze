document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
      q.nextElementSibling.style.maxHeight = null;
    });

    if (!isActive) {
      item.classList.add('active');
      const answer = item.nextElementSibling;
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'all 0.6s ease-out';
  observer.observe(section);
}); 