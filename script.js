// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('.nav-links a, .btn.hire-me, .btn.outline');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Typing effect for tagline
const tagline = document.querySelector('.tagline');
if (tagline) {
  const text = tagline.textContent;
  tagline.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      tagline.textContent += text.charAt(i);
      i++;
      setTimeout(type, 60);
    }
  }
  type();
}

// Utility icons actions
const textSizeBtn = document.querySelector('.utility-btn[aria-label="Text Size"]');
const fullScreenBtn = document.querySelector('.utility-btn[aria-label="Full Screen"]');

if (textSizeBtn) {
  let large = false;
  textSizeBtn.addEventListener('click', () => {
    document.body.style.fontSize = large ? '' : '1.15em';
    large = !large;
  });
}

if (fullScreenBtn) {
  fullScreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
}

// Contact form feedback (stub)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message Sent! (Form handling to be implemented)');
    contactForm.reset();
  });
} 