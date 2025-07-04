// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 100;
  document.querySelectorAll('nav ul li a').forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// FAQ: Toggle open/close icon or animation
const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

// Product thumbnail gallery interaction (Shop section)
const mainImage = document.querySelector('.main-bottle');
const thumbnails = document.querySelectorAll('.thumbnail-gallery img');

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    mainImage.src = thumbnail.src;
    thumbnails.forEach(img => img.classList.remove('active-thumb'));
    thumbnail.classList.add('active-thumb');
  });
});

// Scroll animations (simple fade-in)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade').forEach(el => observer.observe(el));
