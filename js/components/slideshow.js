// Example slideshow functionality
class Slideshow {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.images = this.container.querySelectorAll('.slideshow-image');
        this.currentImageIndex = 0;
        this.showImage(this.currentImageIndex);
        this.start();
    }
    
    showImage(index) {
        this.images.forEach((img, i) => {
            img.classList.remove('show');
            img.classList.add('fade-out');
            if (i === index) {
                img.classList.add('show');
            }
        });
    }
    
    start() {
        setInterval(() => {
            this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
            this.showImage(this.currentImageIndex);
        }, 3000); // Change every 3 seconds
    }
}

document.addEventListener("DOMContentLoaded", function() {
    new Slideshow('left-slideshow');
    new Slideshow('right-slideshow');
});
