function toggleMenu() {
    const leftColumn = document.querySelector('.left');
    leftColumn.classList.toggle('active');
  }
  
  window.addEventListener('click', function(event) {
    const leftColumn = document.querySelector('.left');
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    
    if (!leftColumn.contains(event.target) && !hamburgerIcon.contains(event.target)) {
      leftColumn.classList.remove('active');
    }
  });