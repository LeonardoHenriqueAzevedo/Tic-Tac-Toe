document.addEventListener('DOMContentLoaded', () => {
    // Catch all squares
    let squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {
    let square = event.target;
    let position = square.id;

    // handleMove de game.js
    if (handleMove(position)) {
        // Control the alert
        setTimeout(() => {
            if (playerTimer == 0) {
                alert(`O vencedor foi o Jogador 1!`);
            } else {
                alert(`O vencedor foi o Jogador 2!`);
            }
        }, 10);
    };

    updateSquare(position);
}

function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    // Put the symbols
    square.innerHTML = `<div class='${symbol}'></div>`
}