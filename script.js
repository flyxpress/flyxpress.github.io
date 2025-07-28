 function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("active");
}
  




window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById("loader").style.display = "none";
      document.getElementById("contenido").style.display = "block";
    }, 400); // 3000 milisegundos = 3 segundos
  });





const palabras = ["innovadores", "confiables", "rápidos", "seguros", "FLY XPRESS"];
  let i = 0;

  setInterval(() => {
    i = (i + 1) % palabras.length;
    document.getElementById("palabra").textContent = palabras[i];
  }, 1000); // Cambia cada 2 segundos



  let iniciado = false;

function iniciarContadores() {
  // Contador 1
  let numero = 2451;
  const limite = 2486;
  const velocidad = 100;
  const intervalo = setInterval(() => {
    if (numero >= limite) {
      clearInterval(intervalo);
    } else {
      numero++;
      document.getElementById("contador").textContent = numero;
    }
  }, velocidad);

  // Contador 2
  let numero2 = 4222;
  const limite2 = 4257;
  const velocidad2 = 100;
  const intervalo2 = setInterval(() => {
    if (numero2 >= limite2) {
      clearInterval(intervalo2);
    } else {
      numero2++;
      document.getElementById("contador2").textContent = numero2;
    }
  }, velocidad2);

  // Contador 3
  let numero3 = 0;
  const limite3 = 35;
  const velocidad3 = 100;
  const intervalo3 = setInterval(() => {
    if (numero3 >= limite3) {
      clearInterval(intervalo3);
    } else {
      numero3++;
      document.getElementById("contador3").textContent = numero3;
    }
  }, velocidad3);

  // Contador 4
  let numero4 = 15;
  const limite4 = 50;
  const velocidad4 = 100;
  const intervalo4 = setInterval(() => {
    if (numero4 >= limite4) {
      clearInterval(intervalo4);
    } else {
      numero4++;
      document.getElementById("contador4").textContent = numero4;
    }
  }, velocidad4);
}

// Observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !iniciado) {
      iniciarContadores();
      iniciado = true;
    }
  });
});

// Observa uno de los contadores (o el contenedor)
observer.observe(document.getElementById("contador"));


const btn = document.getElementById("btnTop");

  // Mostrar botón al hacer scroll
  window.onscroll = function () {
    btn.style.display = window.scrollY > 300 ? "block" : "none";
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


































  
























