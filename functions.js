const WEDDING_DATE = "2026-06-06T20:30:00-03:00";


// Countdown
const wedding = new Date(WEDDING_DATE);


const elD = document.getElementById("d");
const elH = document.getElementById("h");
const elM = document.getElementById("m");
const elS = document.getElementById("s");

function tick() {
  const now = new Date();
  const diff = wedding.getTime() - now.getTime();

  if (diff <= 0) {
    elD.textContent = "0"; elH.textContent = "0"; elM.textContent = "0"; elS.textContent = "0";
    weddingWhen.textContent = "¡Hoy es el gran día!";
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  elD.textContent = String(days);
  elH.textContent = String(hours).padStart(2, "0");
  elM.textContent = String(minutes).padStart(2, "0");
  elS.textContent = String(seconds).padStart(2, "0");
}
tick();
setInterval(tick, 1000);


function copiarAlias() {
  const alias = document.getElementById("aliasText").innerText;
  console.log(alias)
  navigator.clipboard.writeText(alias)
    .then(() => {
      console.log("Alias copiado");
    })
    .catch(err => {
      console.error("Error al copiar: ", err);
    });
}

let player;
let musicOn = false;
let playerReady = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    height: '0',
    width: '0',
    videoId: 'nSDgHBxUbVQ',
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: 'nSDgHBxUbVQ',
      modestbranding: 1
    },
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  playerReady = true;
  event.target.setVolume(40); // 🔊 fuerza volumen
}

function toggleMusic() {
  if (!playerReady) {
    console.warn("Player no listo todavía");
    return;
  }

  const btn = document.getElementById("musicBtn");

  if (!musicOn) {
    player.playVideo();     // 🔑 debe ejecutarse DESPUÉS de ready
    btn.textContent = "volume_up";
  } else {
    player.pauseVideo();
    btn.textContent = "volume_off";
  }

  musicOn = !musicOn;
}

