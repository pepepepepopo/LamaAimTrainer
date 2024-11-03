let score = 0;

// Function to update the score display
function updateScore() {
    document.getElementById("score").textContent = `Score: ${score}`;
}

// Function to generate a random position for bloons
function randomPosition() {
    const x = Math.random() * 370;
    const y = Math.random() * 260;
    return { x, y };
}

// Function to create a bloon element
function createBloon() {
    const bloon = document.createElement("div");
    bloon.classList.add("bloon");

    // Set random position
    const position = randomPosition();
    bloon.style.left = `${position.x}px`;
    bloon.style.top = `${position.y}px`;

    // Add click event to pop the bloon
    bloon.addEventListener("click", () => {
        bloon.remove();
        score++;
        updateScore();
    });

    document.getElementById("bloons-container").appendChild(bloon);
}

// Function to throw a dart (generate bloons)
function throwDart() {
    // Clear old bloons
    const bloonsContainer = document.getElementById("bloons-container");
    bloonsContainer.innerHTML = "";

    // Create new bloons (e.g., 5 bloons each throw)
    for (let i = 0; i < 5; i++) {
        createBloon();
    }
}

// Attach throwDart function to button
document.getElementById("throw-dart").addEventListener("click", throwDart);

// Initial score display
updateScore();