import { createFloatingBalls } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const eyes = document.querySelectorAll('.eye');

    // Create floating balls
    createFloatingBalls();

    // Create prank message
    const prankMessage = document.createElement('div');
    prankMessage.className = 'prank-message';
    prankMessage.textContent = 'ضحكت عليك يابن العبيطة 😜';
    document.body.appendChild(prankMessage);

    // Function to toggle eyes
    const toggleEyes = (closed) => {
        eyes.forEach(eye => {
            if (closed) {
                eye.classList.add('closed');
            } else {
                eye.classList.remove('closed');
            }
        });
    };

    // Function to show prank with random ball
    const showPrank = () => {
        // Get random ball
        const randomBallNumber = Math.floor(Math.random() * 5) + 1;
        const randomBall = document.querySelector(`.ball-${randomBallNumber}`);
        
        // Add message animation class
        randomBall.classList.add('message-ball');
        prankMessage.classList.add('active');

        // Remove classes after animation
        setTimeout(() => {
            randomBall.classList.remove('message-ball');
            prankMessage.classList.remove('active');
        }, 2000);
    };

    // Event listeners for password input
    passwordInput.addEventListener('input', (e) => {
        toggleEyes(e.target.value.length > 0);
    });

    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        showPrank();
    });
});