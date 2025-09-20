let score = 0;
let pointsPerClick = 1;

const scoreDisplay=document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const upgradeButton = document.getElementById('upgradeButton');

// Click main button
clickButton.addEventListener('click', () => {
    score += pointsPerClick;
   scoreDisplay.textContent = score;
});

// Buy upgrade
upgradeButton.addEventListener('click', () => {
    if (score >= 5) {
        pointsPerClick *= 2;
        score -= 5;
        scoreDisplay.textContent = score;
        alert('Points doubled!')
    } else {
        alert('Not enough points to upgrade!');
    }
});
