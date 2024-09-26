document.addEventListener('DOMContentLoaded', function() {
    const leftCurtain = document.querySelector('.curtain.left');
    const rightCurtain = document.querySelector('.curtain.right');
    const messageContainer = document.querySelector('.message-container');

    // Function to open curtains
    function openCurtains() {
        leftCurtain.style.transform = 'translateX(-100%)';
        rightCurtain.style.transform = 'translateX(100%)';

        // Display message and fireworks after curtains open
        setTimeout(() => {
            messageContainer.style.display = 'block';
        }, 2000);
    }

    // Event listener to open curtains on click
    leftCurtain.addEventListener('click', openCurtains);
    rightCurtain.addEventListener('click', openCurtains);
});
