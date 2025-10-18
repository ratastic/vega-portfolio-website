function toggleMenu() {
    const menu = document.getElementById('sidebarMenu');
    console.log("Hamburger clicked"); // test
    if (menu) {
      menu.classList.toggle('open');
    }
  }