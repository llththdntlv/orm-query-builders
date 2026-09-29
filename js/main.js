document.addEventListener('DOMContentLoaded', () => {
  const burgerToggle = document.getElementById('burgerToggle');
  const navMenu = document.getElementById('navMenu');

  if (burgerToggle && navMenu) {
    burgerToggle.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });
  }
});
