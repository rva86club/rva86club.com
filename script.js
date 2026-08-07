const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });
}

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) link.classList.add('active');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const topic = data.get('topic') || 'General question';
    const message = data.get('message') || '';

    const subject = `RVA 86 Club inquiry: ${topic}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Topic: ${topic}`,
      '',
      String(message)
    ].join('\n');

    window.location.href = `mailto:rva86club@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
