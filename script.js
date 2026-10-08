// Configure before collecting leads. The site deliberately avoids sending inquiries to an unverified address.
const CONTACT_EMAIL = ''; // e.g. hello@yourdomain.com
const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  mobileNav.hidden = isOpen;
});
mobileNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const form = document.querySelector('#lead-form');
const note = document.querySelector('#form-note');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fd = new FormData(form);
  const body = `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}\nBusiness/location: ${fd.get('business')}\nCity: ${fd.get('city')}\nType: ${fd.get('type') || 'Not specified'}\n\nMessage:\n${fd.get('message') || 'None'}`;
  const subject = `SmartStuff location inquiry — ${fd.get('business')}`;
  if (!CONTACT_EMAIL) {
    note.textContent = 'Contact email has not been configured yet. Your inquiry was not sent. Please check back soon.';
    note.style.color = '#9b4b15';
    return;
  }
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  note.textContent = 'Your email app should open with a prefilled message. Please press Send there to complete the inquiry.';
});
