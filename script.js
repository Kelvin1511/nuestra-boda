// Target date set for October 30, 2026
const weddingDate = new Date("October 30, 2026 00:00:00").getTime();

const updateCountdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Format numbers with leading zeros
    document.getElementById("days").innerText = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(updateCountdown);
        document.querySelector(".countdown-section").innerHTML = "<h2 class='countdown-title'>Today is the big day!</h2>";
    }
}, 1000);

// Dynamic Photo Carousel Logic
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (slides.length === 0) return;
    
    if (index >= slides.length) currentSlideIndex = 0;
    else if (index < 0) currentSlideIndex = slides.length - 1;
    else currentSlideIndex = index;

    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (dots[i]) dots[i].classList.remove("active");
    });

    slides[currentSlideIndex].classList.add("active");
    if (dots[currentSlideIndex]) dots[currentSlideIndex].classList.add("active");
}

function moveSlide(step) {
    showSlide(currentSlideIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

// Automatic slide rotation every 4 seconds
setInterval(() => {
    moveSlide(1);
}, 4000);

// YouTube Music Player Logic - Bruno Mars
let player;
let isPlaying = false;

const songID = 'rIBRcQdzWQs'; 

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player-container', {
        height: '0',
        width: '0',
        videoId: songID,
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'loop': 1,
            'playlist': songID
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
    isPlaying = true;

    const enableAudio = () => {
        if (player && typeof player.playVideo === 'function') {
            player.playVideo();
            isPlaying = true;
            updateMusicButtonUI();
        }
        document.removeEventListener('click', enableAudio);
        document.removeEventListener('touchstart', enableAudio);
    };

    document.addEventListener('click', enableAudio);
    document.addEventListener('touchstart', enableAudio);
}

function updateMusicButtonUI() {
    const btnText = document.getElementById('music-text');
    const btnIcon = document.getElementById('music-icon');
    if (isPlaying) {
        btnText.innerText = "Pause Music";
        btnIcon.innerText = "⏸️";
    } else {
        btnText.innerText = "Play Music";
        btnIcon.innerText = "🎵";
    }
}

document.getElementById('music-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    if (!player || typeof player.playVideo !== 'function') return;

    if (!isPlaying) {
        player.playVideo();
        isPlaying = true;
    } else {
        player.pauseVideo();
        isPlaying = false;
    }
    updateMusicButtonUI();
});
