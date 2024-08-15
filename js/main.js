document.addEventListener("DOMContentLoaded", function() {
    // Function to update date and time
    function updateTime() {
        const now = new Date();
        document.getElementById("date").textContent = now.toLocaleDateString();
        document.getElementById("time").textContent = now.toLocaleTimeString();
    }
    
    // Update time every second
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to set date/time right away
    
    // Slideshow initialization (if any)
    // ...
});
