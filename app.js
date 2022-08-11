// get the player 1 and player 2 buttons
const p1Button = document.querySelector('#player1');
const p2Button = document.querySelector('#player2');
const resetButton = document.querySelector('#reset');

// get the player 1 and player 2 scores
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

// get the set maximum score
const select = document.querySelector('#select');
select.addEventListener('change', function() {
    maxScore = parseInt(this.value);
    reset();
})

let player1Score = 0;
let player2Score = 0;
let continueGame = true;

p1Button.addEventListener('click', function() {
    if (continueGame) {
        player1Score += 1;
        if (player1Score === maxScore) {
            continueGame = false;
            p1.style.color = 'green';
            p2.style.color = 'red';
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p1.textContent = player1Score;
    } 
});

p2Button.addEventListener('click', function() {
    if (continueGame) {
        player2Score += 1;
        if (player2Score === maxScore) {
            continueGame = false;
            p2.style.color = 'green';
            p1.style.color = 'red';
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2.textContent = player2Score;
    } 
});

resetButton.addEventListener('click', reset)

function reset() {
    p1.innerText = '0';
    p2.innerText = '0';
    player1Score = 0;
    player2Score = 0;
    continueGame = true;
    p2.style.color = 'black';
    p1.style.color = 'black';
    p1Button.disabled = false;
    p2Button.disabled = false;
}

