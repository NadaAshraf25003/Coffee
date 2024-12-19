document.querySelectorAll('.slider-nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevent the default scroll behavior
        const target = event.target.getAttribute('href').substring(1); // Get the target ID
        const targetElement = document.getElementById(target); // Find the element
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' }); // Scroll only the slider
        }
    });
});
const imagess = document.querySelectorAll('.slider img'); // Get all images
let currentIndex = 0;

function autoScroll() {
    currentIndex = (currentIndex + 1) % imagess.length; // Increment index
    const targetElement = imagess[currentIndex]; // Get next image
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}

// Auto-scroll interval
let autoScrollInterval = setInterval(autoScroll, 3000); // Change image every 3 seconds

function resetAutoScroll() {
    clearInterval(autoScrollInterval); // Stop auto-scroll
    autoScrollInterval = setInterval(autoScroll, 3500); // Restart auto-scroll
}