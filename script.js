function iniciar() {
  const nombre = document.getElementById("nombre").value;
  if (nombre.toLowerCase() === "flor") {
    document.querySelector(".login-container").style.display = "none";
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".main-content h2").innerText = `🌷 Esta página es para ti, ${nombre} 🌷`;
  } else {
    alert("Ups! Solo Flor puede entrar 💖");
  }
}

function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const emojis = document.getElementById("emojis");

  mensaje.innerText = "Flor, tu sonrisa tiene el poder de iluminar cualquier día y tu luz inspira todo a tu alrededor 💕✨";
  mensaje.style.opacity = 1;

  emojis.innerText = "🤗🤗😌😌🫶🫶❤️❤️";
  emojis.style.opacity = 1;
}

// Corazones al hacer clic en la foto
document.querySelectorAll('.photo').forEach(photo => {
  photo.addEventListener('click', (e) => {
    const heart = document.createElement('span');
    heart.className = 'heart';
    heart.innerText = '❤️';
    const rect = photo.getBoundingClientRect();
    heart.style.left = `${e.clientX - rect.left - 15}px`;
    heart.style.top = `${e.clientY - rect.top - 15}px`;
    photo.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1000);
  });
});

// Flip cards al hacer clic
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    const inner = card.querySelector('.flip-card-inner');
    inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
  });
});

// Corazoncitos flotando de fondo
function createFloatingHearts() {
  const container = document.getElementById('hearts-container');
  setInterval(() => {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.fontSize = (10 + Math.random() * 20) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 3) + 's';
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000); 
  }, 500);
}

createFloatingHearts();
