let score = 0;

const target = 20;

const scoreDisplay = document.getElementById("score");
const playArea = document.getElementById("playArea");
const message = document.getElementById("message");
const game = document.getElementById("game");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";
    heart.classList.add("heart");

    heart.style.left =
        Math.random() * (window.innerWidth - 50) + "px";

    heart.style.top = "-50px";

    playArea.appendChild(heart);

    let pos = -50;

    const fall = setInterval(() => {

        pos += 4;

        heart.style.top = pos + "px";

        if (pos > window.innerHeight) {
            clearInterval(fall);
            heart.remove();
        }

    }, 20);

    heart.addEventListener("click", () => {

        clearInterval(fall);

        heart.remove();

        score++;

        scoreDisplay.textContent =
            `Hearts: ${score} / ${target}`;

        if (score >= target) {
            winGame();
        }
    });
}

function winGame() {

    game.style.display = "none";

    message.classList.remove("hidden");

    startConfetti();
}

setInterval(createHeart, 800);

function startConfetti() {

    for (let i = 0; i < 150; i++) {

        const piece = document.createElement("div");

        piece.innerHTML = "🎉";

        piece.style.position = "absolute";
        piece.style.left =
            Math.random() * window.innerWidth + "px";

        piece.style.top = "-50px";

        piece.style.fontSize = "30px";

        document.body.appendChild(piece);

        let y = -50;

        const fall = setInterval(() => {

            y += 5;

            piece.style.top = y + "px";

            if (y > window.innerHeight) {

                clearInterval(fall);

                piece.remove();
            }

        }, 20);
    }
}