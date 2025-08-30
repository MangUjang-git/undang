AOS.init();

function openInvitation() {
  document.getElementById('bg-music').play();
  document.getElementById('cover').style.display = 'none';
}

// Countdown
const targetDate = new Date("2025-12-20T00:00:00").getTime();
const timerEl = document.getElementById("timer");

setInterval(() => {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff < 0) {
    timerEl.innerHTML = "Hari H Telah Tiba!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  timerEl.innerHTML = days + " Hari " + hours + " Jam "
    + minutes + " Menit " + seconds + " Detik ";
}, 1000);
