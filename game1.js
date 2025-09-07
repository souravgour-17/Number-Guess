let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.getElementById('check').addEventListener('click', function() {
    const guess = Number(document.getElementById('guess').value);
    if (!guess) {
        document.getElementById('message').textContent = '⛔ No number!';
    } else if (guess === secretNumber) {
        document.getElementById('message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.color = 'black';
        document.body.style.backgroundColor = '#50b347ff';
        if (score > highscore) {
            highscore = score;
            document.getElementById('highscore').textContent = highscore;
        }
    } else {
        if (score > 1) {
            document.getElementById('message').textContent = guess > secretNumber ? '📉 Too High!' : '📈 Too Low!';
            score--;
            document.getElementById('score').textContent = score;
        } else {
            document.getElementById('message').textContent = '💥 You lost the game!';
            document.getElementById('score').textContent = 0;
        }
    }
});
document.getElementById('again').addEventListener('click', function() {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;
    document.getElementById('score').textContent = score;
    document.getElementById('message').textContent = 'Start guessing...';
    document.getElementById('guess').value = '';
    document.body.style.backgroundColor = '#222';
});