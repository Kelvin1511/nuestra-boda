// Fecha fijada para el 30 de Octubre de 2026
const weddingDate = new Date("October 30, 2026 00:00:00").getTime();

const updateCountdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Cálculos de días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formatear a dos dígitos (ej. 05 en lugar de 5)
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // Cuando llegue la fecha de la boda
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector(".countdown-section").innerHTML = "<h2 class='countdown-title'>¡Hoy es el gran día!</h2>";
    }
}, 1000);