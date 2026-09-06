// main.js — runs on every page. Checks whether a session cookie is
// valid and swaps the nav's Login/Signup buttons for a greeting +
// logout button when the visitor is signed in.

(async function initNav() {
  const actions = document.querySelector('[data-nav-actions]');
  if (!actions) return;

  try {
    const res = await fetch('/api/auth/me');
    const data = await res.json();

    if (data.user) {
      actions.innerHTML = `
        <span class="nav__greeting">Hi, ${escapeHtml(data.user.fullName.split(' ')[0])}</span>
        <button class="btn btn--outline btn--sm" data-logout>Log out</button>
      `;
      const logoutBtn = actions.querySelector('[data-logout]');
      logoutBtn.addEventListener('click', async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        window.location.reload();
      });
    }
  } catch (err) {
    // If the API isn't reachable, the nav just keeps its default
    // logged-out state — nothing to do here.
  }
})();

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
