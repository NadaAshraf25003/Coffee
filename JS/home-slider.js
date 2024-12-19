const imagess = document.querySelectorAll('.slider img'); // Get all images
const sliderContainer = document.querySelector('.slider'); // Get the slider container
let currentIndexx = 0;

function autoScroll() {
    currentIndexx = (currentIndexx + 1) % imagess.length; // Increment index
    const targetElement = imagess[currentIndexx]; // Get next image
    // Calculate the scroll position
    const scrollPosition = targetElement.offsetLeft - sliderContainer.offsetLeft;
    sliderContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
}

// Auto-scroll interval
let autoScrollInterval = setInterval(autoScroll, 3000); // Change image every 3 seconds

function resetAutoScroll() {
    clearInterval(autoScrollInterval); // Stop auto-scroll
    autoScrollInterval = setInterval(autoScroll, 3500); // Restart auto-scroll
}

// Event listener for manual scrolling
document.querySelectorAll('.slider-nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default scroll behavior
        const target = event.target.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(target); // Find the element
        if (targetElement) {
            const scrollPosition = targetElement.offsetLeft - sliderContainer.offsetLeft;
            sliderContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' }); // Scroll only the slider
            resetAutoScroll(); // Reset auto-scroll
        }
    });
});
