let score = 0;

const scoreText = document.getElementById("score");
const button = document.getElementById("clickBtn");

button.addEventListener("click", () => {
  score = score + 1;
  scoreText.textContent = "Score: " + score;
});
