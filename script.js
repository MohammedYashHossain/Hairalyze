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
      entry.target.classList.add('visible');
      if (entry.target.dataset.delay) {
        entry.target.style.transitionDelay = entry.target.dataset.delay + 's';
      }
    }
  });
}, observerOptions);

document.querySelectorAll('[data-motion]').forEach(element => {
  observer.observe(element);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}); 