document.addEventListener("DOMContentLoaded", function () {
    const text = "EB DESIGNER";  // Text to type out
    const element = document.getElementById("web-designer");
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 150);  // Adjust typing speed here
        }
    }

    typeEffect();  // Start the typing animation

    // Add hover effect for menu icon
    const menuIcon = document.querySelector('.menu-icon');
    menuIcon.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1)';
        this.style.transition = 'transform 0.3s ease';
    });
    menuIcon.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});
