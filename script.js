// Replace with a dedicated business email before sharing this site with prospects.
const CONTACT_EMAIL = '';
const menuButton = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mobileNav.hidden = open;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded','false');
}));
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('lead-form');
const note = document.getElementById('form-note');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  if (!CONTACT_EMAIL.trim()) {
    note.textContent = 'Contact email is not configured yet. Please contact the SmartStuff team directly once their business contact details are published.';
    note.style.color = '#8a341a';
    return;
  }
  const data = new FormData(form);
  const message = [...data.entries()].map(([key,value]) => `${key}: ${value || '(not provided)'}`).join('\n');
  const subject = `SmartStuff vending inquiry — ${data.get('business')}`;
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  note.textContent = 'Your email app should open with your inquiry. Please send the message from there.';
});

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener('pageshow', () => {
  if (!window.location.hash) {
    window.scrollTo(0, 0);
  }
});
