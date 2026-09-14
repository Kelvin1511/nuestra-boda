// Target date set for October 30, 2026
const weddingDate = new Date("October 30, 2026 00:00:00").getTime();

const updateCountdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers with leading zeros
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    // When wedding day arrives
    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector(".countdown-section").innerHTML = "<h2 class='countdown-title'>Today is the big day!</h2>";
    }
}, 1000);
