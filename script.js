const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  // 1. Toggle the class on the body (returns true if class was added, false if removed)
  const isDark = document.body.classList.toggle('dark-theme');

  // 2. Sync the ARIA attribute with the toggle state
  themeToggle.setAttribute('aria-pressed', isDark);
});