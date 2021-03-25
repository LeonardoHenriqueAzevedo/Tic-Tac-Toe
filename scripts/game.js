let board = ['', '', '', '', '', '', '', '', ''];
let playerTimer = 0;
// Start with "o" and change to "x" when switch the players 
let symbols = ['o', 'x'];
let gameOver = false;

// Possibilities of victory
let winStates = [
    // Horizontal   
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
]


function handleMove(position) {
    // If gameOver stop the game
    if (gameOver) {
        return;
    };

    // If is empty we put the "o" or "x"
    if (board[position] == '') {
        board[position] = symbols[playerTimer];
    };

    // If have a win in this move gameOver = true 
    gameOver = isWin();


    // Switch the players
    if (!gameOver) {
        playerTimer = (playerTimer == 0) ? 1 : 0
    };

    return gameOver;
}

function isWin() {
    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];

        // If the checked positions are equal and at least one is not empty we have the winner
        if (board[pos1] == board[pos2] && board[pos1] == board[pos3] && board[pos1] != '') {
            return true;
        }

    }

    // If not equal we don't have the winner
    return false;
}