// auth.js — wires up the signup and login forms to the JSON API.
// Runs only on signup.html / login.html (each includes this file and
// has the relevant <form data-signup-form> / <form data-login-form>).

function showMessage(el, text, type) {
  el.textContent = text;
  el.className = 'form-message is-' + type;
}

const signupForm = document.querySelector('[data-signup-form]');
if (signupForm) {
  const message = document.querySelector('[data-form-message]');
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fullName = signupForm.fullName.value.trim();
    const email = signupForm.email.value.trim();
    const password = signupForm.password.value;
    const confirmPassword = signupForm.confirmPassword.value;

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, email, password, confirmPassword })
      });
      const data = await res.json();

      if (!res.ok) {
        showMessage(message, data.error || 'Something went wrong. Please try again.', 'error');
        return;
      }

      showMessage(message, 'Account created! Redirecting…', 'success');
      setTimeout(() => (window.location.href = 'index.html'), 700);
    } catch (err) {
      showMessage(message, 'Could not reach the server. Please try again.', 'error');
    }
  });
}

const loginForm = document.querySelector('[data-login-form]');
if (loginForm) {
  const message = document.querySelector('[data-form-message]');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginForm.email.value.trim();
    const password = loginForm.password.value;

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (!res.ok) {
        showMessage(message, data.error || 'Something went wrong. Please try again.', 'error');
        return;
      }

      showMessage(message, 'Welcome back! Redirecting…', 'success');
      setTimeout(() => (window.location.href = 'index.html'), 700);
    } catch (err) {
      showMessage(message, 'Could not reach the server. Please try again.', 'error');
    }
  });
}
