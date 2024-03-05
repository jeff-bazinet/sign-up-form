const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', (e) => {
  if (e.target.checkValidity()) {
    alert("All Form Entries Are Valid. 3-2-1 BLAST OFF!")
    e.preventDefault();
  } else {
    Array.from(e.target.elements).forEach((i) => {
      if (i.checkValidity()) {
        i.classList.remove('invalid');
      } else {
        i.classList.add('invalid');
      }
    });
    e.preventDefault();
  }
});

const firstName = document.querySelector('input[name="first-name"]');
firstName.addEventListener('input', (e) => {
  if (e.target.checkValidity()) {
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
  }
});

const lastName = document.querySelector('input[name="last-name"]');
lastName.addEventListener('input', (e) => {
  if (e.target.checkValidity()) {
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
  }
});

const email = document.querySelector('input[name="email"]');
email.addEventListener('input', (e) => {
  if (e.target.checkValidity()) {
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
  }
});

const phoneNumber = document.querySelector('input[name="phone-number"]');
phoneNumber.addEventListener('input', (e) => {
  if (e.target.checkValidity()) {
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
  }
});

const password = document.querySelector('input[name="password"]');
password.addEventListener('input', (e) => {
  if (e.target.checkValidity()) {
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
  }
});

const confirmPassword = document.querySelector('input[name="confirm-password"]');
confirmPassword.addEventListener('input', (e) => {
  if (e.target.checkValidity()) {
    e.target.classList.remove('invalid');
  }
  else {
    e.target.classList.add('invalid');
  }
});