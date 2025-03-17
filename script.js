const baseURL = "http://115.241.194.20/sis/Examination/Reports/StudentSearchHTMLReport_student.aspx?R=MjAyMzA5MBI2NTZ4&T=-8584723613578166740";

function encodeBase64Text() {
    let inputText = document.getElementById("inputText").value;
    if (!inputText.trim()) {
        alert("Please enter text to encode!");
        return;
    }
    let encodedText = btoa(inputText);
    updateURL(encodedText);
}

function updateURL(encodedValue) {
    let newURL = baseURL.replace("MjAyMzA5MBI2NTZ4", encodedValue);
    document.getElementById("updatedURL").innerText = newURL;
}

function copyToClipboard() {
    let urlText = document.getElementById("updatedURL").innerText;
    navigator.clipboard.writeText(urlText).then(() => {
        alert("Updated URL copied to clipboard!");
    });
}

// Create glowing effect on click
document.addEventListener('click', (event) => {
    const glow = document.createElement('div');
    glow.classList.add('glow');
    glow.style.width = '100px'; // Size of the glow
    glow.style.height = '100px'; // Size of the glow
    glow.style.background = 'rgba(255, 0, 127, 0.5)'; // Glow color
    glow.style.left = `${event.clientX - 50}px`; // Center the glow
    glow.style.top = `${event.clientY - 50}px`; // Center the glow
    document.body.appendChild(glow);

    // Remove the glow after animation
    setTimeout(() => {
        glow.remove();
    }, 500);
});

// Grid Animation with RGB effect on cursor move
const canvas = document.getElementById("gridCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawGrid(mouseX, mouseY) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let spacing = 50;
    for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
            let distance = Math.sqrt((mouseX - x) ** 2 + (mouseY - y) ** 2);
            let glow = Math.max(0, 255 - distance / 2);
            ctx.strokeStyle = `rgba(${glow}, ${255 - glow}, ${glow}, 0.5)`;
            ctx.strokeRect(x, y, spacing, spacing);
        }
    }
}

document.addEventListener("mousemove", (e) => {
    drawGrid(e.clientX, e.clientY);
});