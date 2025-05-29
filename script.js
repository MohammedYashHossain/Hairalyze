// FAQ expand/collapse
document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    let answer = item.nextElementSibling;
    if (item.classList.contains('active')) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = null;
    }
  });
});

// FAQ fade-in on scroll
const faqSection = document.querySelector('.faq');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      faqSection.style.animation = 'fadeSlideIn 1.5s ease-out forwards';
      observer.unobserve(faqSection);
    }
  });
}, { threshold: 0.3 });

faqSection.style.opacity = '0';
faqSection.style.transform = 'translateY(40px)';
observer.observe(faqSection);

// Testimonial rotation
const testimonialSection = document.querySelector('.testimonials');
const testimonials = testimonialSection.querySelectorAll('.testimonial-container');
let currentTestimonial = 0;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    testimonial.style.display = 'none';
  });
  testimonials[index].classList.add('active');
  testimonials[index].style.display = 'flex';
}

function startRotation() {
  testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
  }, 10000);
}

function stopRotation() {
  clearInterval(testimonialInterval);
}

testimonialSection.addEventListener('mouseenter', stopRotation);
testimonialSection.addEventListener('mouseleave', startRotation);

showTestimonial(currentTestimonial);
startRotation();
