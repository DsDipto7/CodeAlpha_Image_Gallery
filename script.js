// script.js

// Select elements
const mainImage = document.getElementById('mainImage');
const imageCaption = document.getElementById('imageCaption');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideshowBtn = document.getElementById('slideshowBtn');
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Variables
let currentIndex = 0;
let slideshowInterval = null;

// Thumbnail click event
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        updateMainImage(index);
    });
});

// Update main image
function updateMainImage(index) {
    const selectedThumbnail = thumbnails[index];
    mainImage.src = selectedThumbnail.src;
    imageCaption.textContent = selectedThumbnail.dataset.caption;
    currentIndex = index;
}

// Navigation controls
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateMainImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateMainImage(currentIndex);
});

// Slideshow
slideshowBtn.addEventListener('click', () => {
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
        slideshowBtn.textContent = 'Start Slideshow';
    } else {
        slideshowInterval = setInterval(() => {
            nextBtn.click();
        }, 3000);
        slideshowBtn.textContent = 'Stop Slideshow';
    }
});

// Theme toggle
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (event.key === 'ArrowRight') {
        nextBtn.click();
    }
});

//Zoom Functionality
mainImage.addEventListener('click', () => {
    mainImage.classList.toggle('zoomed');
});


// Initialize the first image
updateMainImage(0);
