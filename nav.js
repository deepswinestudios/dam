function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  const ham  = document.querySelector('.hamburger');
  const isOpen = menu.classList.contains('open');
  if (isOpen) {
    menu.querySelectorAll('a,.m-cta').forEach(el => { el.style.transitionDelay='0s'; });
    menu.classList.remove('open'); ham.classList.remove('open');
    setTimeout(() => { menu.querySelectorAll('a,.m-cta').forEach(el => { el.style.transitionDelay=''; }); }, 450);
  } else {
    menu.classList.add('open'); ham.classList.add('open');
  }
}

(function() {
  const nav = document.getElementById('topNav');
  const logoImg = nav ? nav.querySelector('.nav-logo img') : null;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 60;
    if (nav) nav.classList.toggle('scrolled', scrolled);
    if (logoImg) logoImg.style.height = scrolled ? '44px' : '110px';
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 0.08 + 's';
    observer.observe(el);
  });
})();
