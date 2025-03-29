const game = document.getElementById('playground');

let winner = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
let boardArray = new Array(9).fill('E');
let turns = 0;
function checkWinner() {
    for (let [i, j, k] of winner) {
        if (boardArray[i] != 'E' && boardArray[i] === boardArray[j] && boardArray[j] === boardArray[k]) {
            return 1;
        }
    }
    return 0;

}

// function sizeFull(){
//     for(let i of boardArray){
//         if(i=='E')return 0;
//     }
//     return 1;
// }

let check = false;

const printer = (event) => {
    const element = event.target;

    if (boardArray[element.id] === 'E') {

        if (check == false) {
            element.innerHTML = 'O';
            boardArray[element.id] = 'O';
            check = true;
            turns++;

            if (checkWinner()) {
                document.querySelector('h1').innerHTML = 'O is Winner';
                game.removeEventListener('click', printer);
                return;
            }
            if (turns >= 9) {
                let el = document.querySelector('h1');
                el.innerHTML = 'Match Draw';
                el.style.color = 'Red';
            }
        }
        else {
            element.innerHTML = 'X';
            boardArray[element.id] = 'X';
            check = false;
            turns++;

            if (checkWinner()) {
                document.querySelector('h1').innerHTML = 'X is Winner';
                game.removeEventListener('click', printer);
                return;
            }
            if (turns >= 9) {
                let el = document.querySelector('h1');
                el.innerHTML = 'Match Draw';
                el.style.color = 'Red';
            }
        }
    }

};

game.addEventListener('click', printer);

const reset = document.querySelector('button');
reset.addEventListener('click', () => {
    location.reload();
});

