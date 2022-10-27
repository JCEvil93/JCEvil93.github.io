const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
  document.querySelector('.NavigationBar-menuContainer').classList.toggle('NavigationBar-menuContainer--show');
  document.querySelector('.NavigationBar-hamburgerContainer').classList.toggle('NavigationBar-hamburgerContainer--activate');
});