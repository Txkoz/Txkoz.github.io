/*----- constants -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

/*----- app's state (variables) -----*/

let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('reset-button').addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        return winner ? winner : board.includes('') ? null : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn === 'X' ? 'O' : 'X';
    win = getWinner();
    // Fonction qui envoi la variable win
    ajouterPoint(win);
    render();
};

function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `Égalité!` : win ? `${win} a gagné!` : `C'est au ${turn} de jouer!`;
    };

init();

// Mon code //
// Variables pour suivre le nombre de victoires de X et O
let XWins = 0;
let OWins = 0;

// Variable qui va chercher la div X et O dans le html
let gagnerParX = document.getElementById("X");
let gagnerParO = document.getElementById("O");

// Obtenir l'élément HTML avec l'ID "image-de-moi"
const MA_PHOTO = document.getElementById("image-de-moi");
// Ajouter un événements de clic à l'élément, déclenchant la fonction emailMoi
MA_PHOTO.addEventListener("click",emailMoi);


// Retourner l'URL de la page et ensuite ouvrir un nouveau message sur mail à l'email ci-dessous
function emailMoi(){
    window.location.href = "mailto:2352901@etudiant.cegepvicto.ca";
}



// Fonction qui recoit le gagnant (X ou O) et qui ajoute les points selon lequelle a gagner
function ajouterPoint(win){ 
    // Si X gagne,
    if(win == 'X'){
        // Augmente le njombre de fois que X à gagné
        XWins++;
        // Crée un variable dans le storage local de la page et y ajoute la valeur de XWins
        localStorage.setItem("XWins",XWins);
        // Changer le texte a l'intérieur de la div pour afficher le nombre de fois que X à gagné
        gagnerParX.innerHTML = "Gagner par X : " + XWins;
    }
    else if(win == "O"){    
        // Augmente le njombre de fois que O à gagné
        OWins++;
        //Crée un variable dans le storage local de la page et y ajoute la valeur de OWins
        localStorage.setItem("OWins",OWins);
        // Changer le texte a l'intérieur de la div pour afficher le nombre de fois que O à gagné
        gagnerParO.innerHTML = "Gagner par O : " + OWins;
    }
}