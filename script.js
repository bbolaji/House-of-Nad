// script.js

// Fade in product cards on scroll
document.addEventListener('DOMContentLoaded', () => {
  const productCards = document.querySelectorAll('.product-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  productCards.forEach(card => {
    observer.observe(card);
  });
});

// Animate header text on load
window.addEventListener('load', () => {
  const header = document.querySelector('header h1');
  if (header) {
    header.classList.add('text-slide-in');
  }
});

// Simple feedback success message
function submitFeedback(event) {
  event.preventDefault();

  const feedbackForm = document.getElementById('feedback-form');
  const feedbackMessage = document.getElementById('feedback-message');

  // Simulate AJAX submission
  setTimeout(() => {
    feedbackMessage.textContent = 'Thank you for your feedback!';
    feedbackMessage.classList.add('success');
    feedbackForm.reset();
  }, 800);
}

// Attach listener if form exists
document.addEventListener('DOMContentLoaded', () => {
  const feedbackForm = document.getElementById('feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', submitFeedback);
  }
});
