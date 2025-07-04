// Toggle search box
document.querySelector('.search-icon').addEventListener('click', () => {
  document.querySelector('.search-box').classList.toggle('active');
});

// Hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});

// Product Gallery (arrows/dots/thumbnails)
let galleryIndex = 0;
const galleryImages = document.querySelectorAll('.thumbnail-gallery img');
const mainImage = document.querySelector('.main-bottle');

galleryImages.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    galleryIndex = index;
    mainImage.src = thumb.src;
  });
});

// Radio option updates Add to Cart link
const planRadios = document.querySelectorAll('input[name="plan"]');
const fragranceRadios = document.querySelectorAll('input[name="fragrance1"]');
const addToCartBtn = document.querySelector('.add-cart');

function updateAddToCartURL() {
  const plan = document.querySelector('input[name="plan"]:checked')?.parentElement?.innerText.trim().replace(/\s/g, '');
  const fragrance = document.querySelector('input[name="fragrance1"]:checked') ? 'Fragrance' + [...fragranceRadios].findIndex(r => r.checked) : '';
  if (plan && fragrance) {
    addToCartBtn.href = `https://example.com/cart?plan=${plan}&scent=${fragrance}`;
  }
}

planRadios.forEach(r => r.addEventListener('change', updateAddToCartURL));
fragranceRadios.forEach(r => r.addEventListener('change', updateAddToCartURL));

// Expandable radio boxes
planRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('expanded'));
    radio.closest('.option').classList.add('expanded');
  });
});

// Count up animation
function animateCountUp(el, end) {
  let current = 0;
  const increment = Math.ceil(end / 100);
  const counter = setInterval(() => {
    current += increment;
    if (current >= end) {
      current = end;
      clearInterval(counter);
    }
    el.textContent = current + '%';
  }, 20);
}

const percentageSection = document.querySelector('.percentage-section');
const percents = document.querySelectorAll('.percentage-section .percent');

let counted = false;
window.addEventListener('scroll', () => {
  if (!counted && percentageSection.getBoundingClientRect().top < window.innerHeight) {
    percents.forEach(p => {
      const end = parseInt(p.dataset.target);
      animateCountUp(p, end);
    });
    counted = true;
  }
});

// FAQ Accordion
document.querySelectorAll('.faq details').forEach(item => {
  item.addEventListener('toggle', () => {
    if (item.open) {
      document.querySelectorAll('.faq details').forEach(other => {
        if (other !== item) other.removeAttribute('open');
      });
    }
  });
});

// Scrollable Testimonials
const testimonialContainer = document.querySelector('.testimonial-scroll');
testimonialContainer.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  testimonialContainer.scrollLeft += evt.deltaY;
});

window.onload = function () {
  const mainImage = document.getElementById("mainImage");

  const thumbnails = document.querySelectorAll(".thumb");
  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", function () {
      mainImage.src = this.dataset.large;
    });
  });
};
