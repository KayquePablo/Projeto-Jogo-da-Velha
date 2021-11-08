// iniciar minhas variaveis

let board = ['', '', '', '', '', '', '', '', ''];

let playerTime = 0;

let symbol = ['o', 'x'];

let gameOver = false


let winStates = [ //Possibilades de vitoria//
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

function handleMove(position) {

    if (gameOver) {
        return;
    }

    if (board[position] == "") { // se a casa estiver vazia continuia

        board[position] = symbol[playerTime]; //coloque X ou O na casa escolhida de acordo com o jogador da vez

        gameOver = isWin(); // ouve uma vitoria ?

        if (gameOver == false) { // Se não ouver um vencedor retorna falso e passa a vez para outro jogador 

            playerTime = (playerTime == 0) ? 1 : 0

        }
    }

    return gameOver;
}

function isWin() { //Essa função sera executada toda vez que ouver uma jogada e verifica se houve ganhador

    for (let i = 0; i < winStates.length; i++) { 
        let seq = winStates[i]; // Seq e igual a uma [sequencia] de vitoria

        let po1 = seq[0]; //Identifica index de cada array, sendo que o primeiro e "0"
        let po2 = seq[1];
        let po3 = seq[2];

        //checa se as posicoes sao iguais anulando as demais
        if (board[po1] == board[po2] &&
            board[po1] == board[po3] &&
            board[po1] != "") {
            return true;
        }
    }

    return false;
}