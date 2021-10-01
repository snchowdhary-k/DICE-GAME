const randomNum1 = Math.floor(Math.random() * 6) + 1;
const img1 = document.querySelector(".img1");
img1.setAttribute("src", `images/dice${randomNum1}.png`);

const randomNum2 = Math.floor(Math.random() * 6) + 1;
const img2 = document.querySelector(".img2");
img2.setAttribute("src", `images/dice${randomNum2}.png`);

const title = document.querySelector("h1");

if (randomNum1 > randomNum2) {
  title.textContent = "🚩Player 1 wins!";
} else if (randomNum1 < randomNum2) {
  title.textContent = "Player 2 wins!🚩";
} else {
  title.textContent = "Draw!";
}
