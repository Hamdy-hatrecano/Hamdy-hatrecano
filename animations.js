function createFloatingBalls() {
    const colors = ['#00ff88', '#00ffcc', '#00ccff', '#00ff44', '#44ff00'];
    
    for (let i = 1; i <= 5; i++) {
        const ball = document.createElement('div');
        ball.className = `floating-ball ball-${i}`;
        ball.style.background = colors[i-1];
        document.body.appendChild(ball);
    }
}

export { createFloatingBalls };