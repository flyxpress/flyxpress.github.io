  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Detecta cuando el 10% del elemento es visible
  });

  cards.forEach(card => observer.observe(card));

  
window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("contenido").style.display = "block";
    }, 400); // 3000 milisegundos = 3 segundos
  });
 function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
  
  const btn = document.getElementById("btnTop");

  // Mostrar botón al hacer scroll
  window.onscroll = function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
