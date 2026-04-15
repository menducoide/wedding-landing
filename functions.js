const cuentaRegresiva = document.getElementById("cuenta-regresiva");
const fechaBoda = new Date("December 20, 2025 17:00:00").getTime();

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaBoda - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  cuentaRegresiva.innerHTML = `${dias.toString().padStart(2, "0")} : ${horas
    .toString()
    .padStart(2, "0")} : ${minutos.toString().padStart(2, "0")} : ${segundos
    .toString()
    .padStart(2, "0")}`;
  if (diferencia < 0) {
    clearInterval(intervalo);
    cuentaRegresiva.innerHTML = "¡Hoy es el gran día!";
  }
}, 1000);
