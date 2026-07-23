/* HS MUSIC Academy | Shared interaction layer */
(() => {
  'use strict';

  const navbar = document.querySelector('.navbar');
  const progress = document.getElementById('scroll-progress');
  const toTop = document.getElementById('to-top');
  const preloader = document.getElementById('preloader');

  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
    if (progress) progress.style.transform = `scaleX(${pct})`;
    if (navbar) navbar.classList.toggle('is-scrolled', window.scrollY > 36);
    if (toTop) toTop.classList.toggle('is-visible', window.scrollY > 550);
  };
  window.addEventListener('scroll', updateScrollUI, { passive: true });
  updateScrollUI();

  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  window.addEventListener('load', () => {
    if (preloader && window.gsap) {
      gsap.to(preloader, { autoAlpha: 0, duration: .55, ease: 'power2.out', onComplete: () => preloader.remove() });
    } else if (preloader) {
      preloader.remove();
    }

    if (window.AOS) AOS.init({ duration: 720, easing: 'ease-out-cubic', once: true, offset: 45 });

    if (window.gsap) {
      if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
      const heroItems = document.querySelectorAll('.hero-animate');
      if (heroItems.length) gsap.from(heroItems, { y: 32, opacity: 0, duration: .85, stagger: .13, ease: 'power3.out', delay: .18 });
      gsap.utils.toArray('[data-gsap-reveal]').forEach((element) => {
        gsap.from(element, { scrollTrigger: { trigger: element, start: 'top 87%' }, y: 35, opacity: 0, duration: .8, ease: 'power3.out' });
      });
    }
  });

  document.querySelectorAll('[data-current-year]').forEach((year) => { year.textContent = new Date().getFullYear(); });

  if (window.Swiper && document.querySelector('.testimonial-swiper')) {
    new Swiper('.testimonial-swiper', {
      slidesPerView: 1, spaceBetween: 22, loop: true, autoplay: { delay: 5200, disableOnInteraction: false },
      pagination: { el: '.testimonial-pagination', clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }
    });
  }

  if (window.GLightbox) GLightbox({ selector: '.glightbox', touchNavigation: true, loop: true, zoomable: true });

  const filters = document.querySelectorAll('.gallery-filter');
  const galleryItems = document.querySelectorAll('.gallery-grid [data-category]');
  filters.forEach((button) => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach((item) => item.classList.toggle('active', item === button));
    galleryItems.forEach((item) => {
      const visible = filter === 'all' || item.dataset.category.includes(filter);
      item.style.display = visible ? '' : 'none';
    });
  }));

  document.querySelectorAll('.academy-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) { form.classList.add('was-validated'); return; }
      const notice = form.querySelector('.form-notice');
      if (notice) notice.classList.add('show');
      form.reset();
      form.classList.remove('was-validated');
    });
  });

  document.querySelectorAll('.navbar-collapse .nav-link').forEach((link) => link.addEventListener('click', () => {
    const collapse = document.querySelector('.navbar-collapse.show');
    if (collapse && window.bootstrap) bootstrap.Collapse.getOrCreateInstance(collapse).hide();
  }));
})();
/* ================= Floating Video ================= */

const watchBtn = document.getElementById("watch-btn");
const popup = document.getElementById("video-popup");
const closeBtn = document.getElementById("close-video");
const player = document.getElementById("ytplayer");

if (watchBtn && popup && closeBtn && player) {

  watchBtn.addEventListener("click", function () {
    popup.style.display = "flex";
    player.src = "https://www.youtube.com/embed/oliOxGKXi_E?autoplay=1&rel=0";
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    player.src = "";
  });

  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.style.display = "none";
      player.src = "";
    }
  });

}