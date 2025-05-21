// Array of image paths
// const images = [
//    "Slide-0.01.jpg", "Slide-0.1.jpg", "Slide-0.2.jpg", "Slide-0.3.jpg","Slide-0.31.jpg", "Slide-0.32.jpg","Slide-0.33.jpg", "Slide-0.34.jpg","Slide-0.35.jpg","Slide-0.36.jpg","Slide-0.37.jpg", "Slide-0.38.jpg", "Slide-0.4.jpg", "Slide-0.4a.jpg", "Slide-0.5.jpg", "Slide-0.51a.jpg", "Slide-0.5a.jpg", "Slide-0.5b.jpg", "Slide-0.5c.jpg","Slide-0.5d.jpg", "Slide-0.6.jpg", "Slide-0.7.jpg", "Slide-0.71.jpg", "Slide-0.72.jpg", "Slide-0.73.jpg", "Slide-0.74.jpg", "Slide-0.75.jpg", "Slide-0.76.jpg", "Slide-0.77.jpg",  
//    "Slide-0.78.jpg","Slide-0.78a.jpg","Slide-0.78b.jpg", "Slide-0.78c.jpg", "Slide-0.78d.jpg", "Slide-0.78e.jpg", "Slide-0.78f.jpg", "Slide-0.8.jpg", "Slide-0.81.jpg", "Slide-0.82.jpg", "Slide-0.82a.jpg", "Slide-0.82b.jpg", "Slide-0.82c.jpg", "Slide-0.83.jpg", "Slide-0.84.jpg", "Slide-0.85.jpg",  "Slide-0.86.jpg", "Slide-0.87.jpg", "Slide-0.88.jpg", "Slide-0.88a.jpg", "Slide-0.88b.jpg", "Slide-0.88c.jpg", "Slide-0.88d.jpg", "Slide-0.88e.jpg", "Slide-0.88f.jpg", 
//    "Slide-a.jpg", "Slide-b.jpg", "Slide-c.jpg", "Slide-d.jpg", "Slide-e.jpg", "Slide-f.jpg","Slide-e.jpg", "Slide-f.jpg", "Slide-g.jpg", "Slide-h.jpg", "Slide-i.jpg", "Slide-1.jpg", "Slide-2.jpg", "Slide-3.jpg", "Slide-4.jpg", "Slide-5.jpg", "Slide-6.jpg", "Slide-7.jpg", "Slide-8.jpg", "Slide-9.jpg", "Slide-10.jpg", "Slide-11.jpg", "Slide-12.jpg",
//    "Slide-13.jpg", "Slide-14.jpg", "Slide-15.jpg", "Slide-16.jpg", "Slide-17.jpg", "Slide-18.jpg", "Slide-19.jpg", "Slide-20.jpg", "Slide-21.jpg", "Slide-22.jpg", "Slide-23.jpg",
//    "Slide-24.jpg", "Slide-25.jpg", "Slide-26.jpg", "Slide-27.jpg", "Slide-28.jpg", "Slide-29.jpg", "Slide-30.jpg", "Slide-31.jpg", "Slide-32.jpg", "Slide-33.jpg", "Slide-34.jpg",
//    "Slide-35.jpg", "Slide-36.jpg", "Slide-37.jpg", "Slide-38.jpg", "Slide-39.jpg", "Slide-40.jpg", "Slide-41.jpg", "Slide-42.jpg", "Slide-43.jpg", "Slide-44.jpg", "Slide-45.jpg", "Slide-46.jpg"
// ];

let currentIndex = 0; // Track the current image index
const slideshowElements = document.querySelectorAll('.slideshow'); // Get all images with the class 'slideshow'

function updateSlideshow() {
    // Update the src of the first image in the 'slideshow' class group
    slideshowElements.forEach(img => img.style.display = 'none'); // Hide all images
    slideshowElements[currentIndex].style.display = 'block'; // Show the current image

    currentIndex = (currentIndex + 1) % slideshowElements.length; // Loop back to the first image
}

// Initially hide all images except the first
slideshowElements.forEach(img => img.style.display = 'none');
slideshowElements[0].style.display = 'block';

// Change image every 10 seconds (10000ms)
setInterval(updateSlideshow, 10000);
