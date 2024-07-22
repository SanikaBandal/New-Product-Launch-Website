// Function to start the countdown
function startCountdown() {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 24);

    const timerInterval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const currentTime = new Date();
        let remainingTime = targetTime - currentTime;

        if (remainingTime < 0) {
            clearInterval(timerInterval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }

        let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = formatTime(days);
        document.getElementById('hours').textContent = formatTime(hours);
        document.getElementById('minutes').textContent = formatTime(minutes);
        document.getElementById('seconds').textContent = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    updateCountdown();
}

startCountdown();

window.addEventListener('scroll', function() {
    const circle = document.getElementById('rotatingCircle');
    const brownBlock = document.getElementById('brownBlock');
    const leftImage = document.querySelector('.left-image');
    const scrollPosition = window.scrollY;

    // Rotate the circle based on scroll position
    circle.style.transform = `rotate(${scrollPosition}deg)`;

    // Get the height of the image and the brown block
    const imageHeight = leftImage.offsetHeight;
    const blockHeight = brownBlock.offsetHeight;
    
    // Calculate the maximum move amount
    const maxMoveAmount = imageHeight - blockHeight;
    
    // Calculate the amount to move the block, constrained within bounds
    const moveAmount = Math.min(-scrollPosition * 0.5, maxMoveAmount);

    brownBlock.style.transform = `translateY(${moveAmount}px)`; // Move up as you scroll down
});

window.addEventListener('scroll', function() {
    const video = document.querySelector('.violet-block video');
    const scrollPosition = window.scrollY;
    
    // Adjust the multiplier to control the movement speed of the video
    video.style.transform = `translateX(${scrollPosition * 0.5}px)`;
});
document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.gallery-item');
    const scrollPosition = window.scrollY + window.innerHeight;

    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > itemPosition) {
            item.classList.add('enlarged');
        } else {
            item.classList.remove('enlarged');
        }
    });
});
document.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.violetBlock');
    const scrollPosition = window.scrollY + window.innerHeight;

    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top + window.scrollY;

        if (scrollPosition > itemPosition) {
            item.classList.add('expanded');
        } else {
            item.classList.remove('expanded');
        }
    });
});

