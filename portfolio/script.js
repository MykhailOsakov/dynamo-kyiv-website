const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

function closeNavigation() {
  if (!menuButton || !navigation) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Otvoriť navigáciu');
  navigation.classList.remove('is-open');
}

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Otvoriť navigáciu' : 'Zavrieť navigáciu');
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeNavigation();
  });

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
      closeNavigation();
    }
  });
}

const profilePhoto = document.querySelector('[data-profile-photo]');
const portraitFrame = document.querySelector('.portrait-frame');
const photoPlaceholder = document.querySelector('[data-photo-placeholder]');

if (profilePhoto && portraitFrame && photoPlaceholder) {
  const showPhoto = () => {
    portraitFrame.classList.add('has-photo');
    photoPlaceholder.hidden = true;
  };

  profilePhoto.addEventListener('load', showPhoto);
  profilePhoto.addEventListener('error', () => {
    portraitFrame.classList.remove('has-photo');
    photoPlaceholder.hidden = false;
  });

  if (profilePhoto.complete && profilePhoto.naturalWidth > 0) showPhoto();
}

const year = document.querySelector('[data-current-year]');
if (year) year.textContent = String(new Date().getFullYear());

const revealElements = document.querySelectorAll('[data-reveal]');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => observer.observe(element));
  document.documentElement.classList.add('js-motion');
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
