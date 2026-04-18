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


const alias = document.getElementById("aliasText").innerText;
const button = document.getElementById("copyAliasBtn");
const popup = document.getElementById("popup");

button.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(alias);
    showPopup();
  } catch (err) {
    alert("Error al copiar el alias");
  }
});

function showPopup() {
  popup.classList.add("show");
  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);
}


var player;
var musicOn = false;
var playerReady = false;

function onYouTubeIframeAPIReady() {
  try {
    document.getElementById("musicBtn").style.display = "none";
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
  } catch (error) {
    document.getElementById("spinner").style.display = "none";
  }

}

function onPlayerReady(event) {
  playerReady = true;
  document.getElementById("spinner").style.display = "none";
  document.getElementById("musicBtn").style.display = "block";
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



