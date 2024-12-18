const images_slider = document.querySelectorAll('.col img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popupImage');
const imageCounter = document.getElementById('imageCounter');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const closePopup = document.getElementById('closePopup');

let currentIndex2 = 0;

images_slider.forEach((image, index) => {
    image.addEventListener('click', () => {
        currentIndex2 = index;
        openPopup(image.src);
    });
});

function openPopup(src) {
    popupImage.src = src;
    updateCounter();
    popup.style.display = 'flex';
}

function updateCounter() {
    imageCounter.textContent = `${currentIndex2 + 1} / ${images_slider.length}`;
}

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Close the popup when clicking outside the image
popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

prevButton.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 > 0) ? currentIndex2 - 1 : images_slider.length - 1;
    popupImage.src = images[currentIndex].src;
    updateCounter();
});

nextButton.addEventListener('click', () => {
    currentIndex2 = (currentIndex2 < images_slider.length - 1) ? currentIndex2 + 1 : 0;
    popupImage.src = images_slider[currentIndex2].src;
    updateCounter();
});