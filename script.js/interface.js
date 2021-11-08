document.addEventListener('DOMContentLoaded', () => { //Quando a pagina carregar execute essa função 

    let squares = document.querySelectorAll(".square"); //selecione todas a classe square(casa)

    squares.forEach((square) => { //Adiciona em toda a classe square(casa) essa função
        square.addEventListener('click', handleClick) //apos a square(casa) for clicada acione essa função
    });



    // id de pontuação inicial quando a página é carregada
    let player1Wins = document.getElementById("player1Wins");
    let player2Wins = document.getElementById("player2Wins");
    player1Wins.innerHTML = 0;
    player2Wins.innerHTML = 0;
});

// zera a pontuação dos jogadores
let ctPlayer1 = 0;
let ctPlayer2 = 0;

// salvar o vencedor da partida 


function handleClick(event) {
    // verifica o nome dos jogadores
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let player1Name = player1.value;
    let player2Name = player2.value;

    let square = event.target; // informa a localização da square(casa) clicada
    let position = square.id;

    let playerName = "";

    if (handleMove(position)) { // Envie para a função movimento a posição da square(casa) escolhida

        // identifica e pontua o vencedor
        if (playerTime == 0) {
            ctPlayer1++;
            player1Wins.innerHTML = ctPlayer1;
        } else {
            ctPlayer2++;
            player2Wins.innerHTML = ctPlayer2;
        }

        // a mensagem vai aparecer 10ms depois da ultima jogada, assim o ultimo objeto adicionado aparece na tela, se não colocar o timeout a msg aparece mas o objeto não
        if (player1Name != "" || player2Name != "") {
            if (playerTime == 0) {
                playerName = player1Name;
            }
            else {
                playerName = player2Name;
            }

            setTimeout(() => {
                alert("FIM DE JOGO! \n O vencedor foi " + playerName);
            }, 20);
        }
        else if (player1Name == "" || player2Name == "") {
            if (playerTime == 0) {
                playerName = "O";
            }
            else {
                playerName = "X";
            }
            setTimeout(() => {
                alert("FIM DE JOGO! \n O vencedor foi " + playerName);
            }, 20);
        }
    }

    // verifica se houve empate no jogo


    updateSquare(position);
}

// atualiza apenas o quadrado
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`;
}


function updateSquare() { //Atualiza todo o Bord(Tabuleiro)

    // identificando os nomes do jogadores 
    let player1 = document.getElementById("player1");
    let player2 = document.getElementById("player2");
    let player1Name = player1.value;
    let player2Name = player2.value;
    let playerName = "";

    let square = document.querySelectorAll(".square");

    square.forEach((square) => {
        let position = square.id;
        let symbol = board[position];

        if (Symbol != "") {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    });

    // verifica a vez do jogador
    if (player1Name != "" || player2Name != "") {
        if (playerTime == 0) {
            playerName = player1Name;
        } else {
            playerName = player2Name;
        }
    }
}

function reiniciar() {
    let squares = document.querySelectorAll(".square")
    board = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;
    squares.forEach((square) => {
        square.innerHTML = '';
    })
}