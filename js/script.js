// 1. Select the elements from your HTML
const slideTrain = document.getElementById('slide-train');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// 2. Set the starting slide and total number of slides
let counter = 0;
const totalSlides = 3;

// 3. Logic for the "Next" button
nextBtn.addEventListener('click', () => {
    counter++;
    // If we reach the end, jump back to the first slide (0)
    if (counter >= totalSlides) {
        counter = 0;
    }
    updateSlide();
});

// 4. Logic for the "Previous" button
prevBtn.addEventListener('click', () => {
    counter--;
    // If we go back past the first slide, jump to the last slide (2)
    if (counter < 0) {
        counter = totalSlides - 1;
    }
    updateSlide();
});

// 5. The function that actually moves the images
function updateSlide() {
    // We calculate the percentage to move: (100 / 3) = 33.333
    const percentage = counter * (100 / totalSlides);

    // This line moves the "slides" div to the left
    slideTrain.style.transform = `translateX(-${percentage}%)`;
}

const playerTrack = document.getElementById('player-track');
const pNext = document.getElementById('p-next');
const pPrev = document.getElementById('p-prev');

let playerIndex = 0;
// With 18 players showing 3 at a time, there are 6 "pages" (18 / 3 = 6)
const totalPages = 6;

pNext.addEventListener('click', () => {
    playerIndex++;
    if (playerIndex >= totalPages) {
        playerIndex = 0; // Loop back to first 3
    }
    movePlayerTrack();
});

pPrev.addEventListener('click', () => {
    playerIndex--;
    if (playerIndex < 0) {
        playerIndex = totalPages - 1; // Go to last 3
    }
    movePlayerTrack();
});

function movePlayerTrack() {
    // Moves by 100% of the container width each time
    playerTrack.style.transform = `translateX(-${playerIndex * 100}%)`;
}