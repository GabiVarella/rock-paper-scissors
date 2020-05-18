/*==>==>==>==> CONSTANTS ==>==>==>==>*/
const beepAudio = new Audio('http://soundbible.com/mp3/Robot_blip-Marianne_Gagnon-120342607.mp3');
const shootAudio = new Audio('http://soundbible.com/mp3/shooting_star-Mike_Koenig-1132888100.mp3');
const rps = {
    rock :{
        img: "images/rock.png",
        beats : "scissors",
    },
    paper :{
        img: "images/paper.png",
        beats : "rock",
    },
    scissors :{
        img: "images/scissors.png",
        beats : "paper"
    }
}


/*==>==>==>==> APP STATE (VARIABLES) ==>==>==>==>*/
let winner; 
let scores; 
let results;



/*==>==>==>==> CACHED ELEMENTS REFERENCES ==>==>==>==>*/
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const tieScoreEl = document.getElementById("tie-score");
const playerResultEl = document.getElementById("player-img");
const computerResultEl = document.getElementById("computer-img");


/*==>==>==>==> EVENT LISTENERS ==>==>==>==>*/
document.querySelector("button").addEventListener("click", handleGo);


/*==>==>==>==> FUNCTIONS ==>==>==>==>*/
init();

function init() {
    winner = null;
    results = {
        player : "rock",
        computer : "rock"
    }

    scores = {
        player : 0,
        computer : 0,
        tie : 0
    }
    render();
};

function handleGo() {
    console.log(scores);
};

function render(){
    playerScoreEl.innerText = scores.player;
    computerScoreEl.innerText = scores.computer;
    tieScoreEl.innerText = scores.tie;
    playerResultEl.style.backgroundImage = `url(${rps[results.player]})`;
    computerResultEl.style.backgroundImage = `url(${rps[results.computer]})`;
};


