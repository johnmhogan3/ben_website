function exploreNow() {
    alert("Let's explore the world!");
}

// Existing script...

function exploreNow() {
    alert("Let's explore the world!");
}

function draw() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw a rectangle
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(50, 50, 200, 100);

    // Draw a circle
    ctx.beginPath();
    ctx.Rect(300, 150, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#0000FF';
    ctx.fill();

    // Draw a line
    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(400, 400);
    ctx.strokeStyle = '#00FF00';
    ctx.lineWidth = 5;
    ctx.stroke();
}