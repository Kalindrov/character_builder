var blackCards = [];
var whiteCards = [];
var createdCards = [];
var savedCombos = [];

var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
var player5 = [];
var player6 = [];
var player7 = [];
var player8 = [];

var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 10;

var p1Display = document.getElementById("p1Score");
var p2Display = document.getElementById("p2Score");
var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var hasWon1 = document.getElementById("hasWon1");
var hasWon2 = document.getElementById("hasWon2");
var newGame = document.getElementById("newGame");
var eventLine1 = document.getElementById("eventLine1");
var eventLine2 = document.getElementById("eventLine2");

var player1Hand = document.getElementById("player1Hand");
var player2Hand = document.getElementById("player2Hand");

var player1Entry = "Player 1 Event Line: ";
var player2Entry = "Player 2 Event Line: ";

var isBlank1 = true;
var isBlank2 = true;
var isBlank3 = true;
var isBlank4 = true;

var blank1 = [];
var blank2 = [];

var blank3 = "_____";
var blank4 = "_____";

var set = 0;

var card1a = document.getElementById("card1a");
var card2a = document.getElementById("card2a");
var card3a = document.getElementById("card3a");
var card4a = document.getElementById("card4a");
var card5a = document.getElementById("card5a");

var card1b = document.getElementById("card1b");
var card2b = document.getElementById("card2b");
var card3b = document.getElementById("card3b");
var card4b = document.getElementById("card4b");
var card5b = document.getElementById("card5b");

var card1aBlank = "fuck";
var card2aBlank = "white people";
var card3aBlank = "ancient aliens";
var card4aBlank = "krav maga";
var card5aBlank = "psychologically hump";

var card1bBlank = "conspiracy theories";
var card2bBlank = "lesbians";
var card3bBlank = "mountain goats";
var card4bBlank = "donkey punch";
var card5bBlank = "poking";

card1a.textContent = card1aBlank;
card2a.textContent = card2aBlank;
card3a.textContent = card3aBlank;
card4a.textContent = card4aBlank;
card5a.textContent = card5aBlank;

card1b.textContent = card1bBlank;
card2b.textContent = card2bBlank;
card3b.textContent = card3bBlank;
card4b.textContent = card4bBlank;
card5b.textContent = card5bBlank;

var answers = [];

function display1() {
eventLine1.textContent = 
player1Entry +
"White people like to " 
+ blank1 + 
" other " 
+ blank2 + 
", until they can no longer stand it.";
}

function display2() {
    eventLine2.textContent = 
    player2Entry +
    "White people like to " 
    + blank3 + 
    " other " 
    + blank4 + 
    ", until they can no longer stand it.";
    }

eventLine1.textContent = 
player1Entry +
"White people like to _____ other _____ , until they can no longer stand it.";

eventLine2.textContent =
player2Entry +
"White people like to _____ other _____ , until they can no longer stand it.";

// total whiteCards needed is players * 9 + 1 ( which in this case is 73)

card1a.addEventListener("click", function(){
    if (isBlank1) {
        blank1 = [];
        blank1.push(card1aBlank);
        set++;
        display1();
        console.log(blank1);
        console.log(set);
    } else {
        blank2 = [];
        blank2.push(card2aBlank);
        set++;
        display1();
        console.log(card2aBlank);
        console.log(set);
    }
});

card2a.addEventListener("click", function(){
    if (isBlank2) {
        blank2 = [];
        blank2.push(card2aBlank);
        display1();
        console.log(card2aBlank);
        console.log(set);
    } else {
        blank1 = [];
        blank1.push(card2aBlank);
        display1();
        console.log(card2aBlank);
        console.log(set);
    }
});

card3a.addEventListener("click", function(){
    if (isBlank2) {
        blank2 = [];
        blank2.push(card3aBlank);
        display1();
        console.log(card3aBlank);
        console.log(set);
    } else {
        blank1 = [];
        blank1.push(card3aBlank);
        display1();
        console.log(card3aBlank);
        console.log(set);
    }
});

card4a.addEventListener("click", function(){
    if (isBlank1) {
        blank1 = [];
        blank1.push(card4aBlank);
        display1();
        console.log(card4aBlank);
        console.log(set);
    } else {
        blank2 = [];
        blank2.push(card4aBlank);
        display1();
        console.log(card4aBlank);
        console.log(set);
    }
});

card5a.addEventListener("click", function(){
    if (isBlank1) {
        blank1 = [];
        blank1.push(card5aBlank);
        display1();
        console.log(card5aBlank);
        console.log(set);
    } else {
        blank2 = [];
        blank2.push(card5aBlank);
        display1();
        console.log(card5aBlank);
        console.log(set);
    }
});

card1b.addEventListener("click", function(){
    if (isBlank3) {
        blank3 = [];
        blank3.push(card1bBlank);
        set++;
        display2();
        console.log(card1bBlank);
        console.log(set);
    } else {
        blank4 = [];
        blank4.push(card2bBlank);
        set++;
        display2();
        console.log(card2bBlank);
        console.log(set);
    }
});

card2b.addEventListener("click", function(){
    if (isBlank4) {
        blank4 = [];
        blank4.push(card2bBlank);
        display2();
        console.log(card2bBlank);
        console.log(set);
    } else {
        blank3 = [];
        blank3.push(card2bBlank);
        display2();
        console.log(card2bBlank);
        console.log(set);
    }
});

card3b.addEventListener("click", function(){
    if (isBlank3) {
        blank3 = [];
        blank3.push(card3bBlank);
        display2();
        console.log(card3bBlank);
        console.log(set);
    } else {
        blank4 = [];
        blank4.push(card3bBlank);
        display2();
        console.log(card3bBlank);
        console.log(set);
    }
});

card4b.addEventListener("click", function(){
    if (isBlank3) {
        blank3 = [];
        blank3.push(card4bBlank);
        display2();
        console.log(card4bBlank);
        console.log(set);
    } else {
        blank4 = [];
        blank4.push(card4bBlank);
        display2();
        console.log(card4bBlank);
        console.log(set);
    }
});

card5b.addEventListener("click", function(){
    if (isBlank3) {
        blank3 = [];
        blank3.push(card5bBlank);
        display2();
        console.log(card5bBlank);
        console.log(set);
    } else {
        blank5 = [];
        blank5.push(card5bBlank);
        display2();
        console.log(card5bBlank);
        console.log(set);
    }
});

p1Button.addEventListener("click", function(){
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            hasWon1.classList.add("winner");
            hasWon1.textContent = "Player 1 has WON!";
            gameOver = true; 
        }
        console.log(p1Score);
        p1Display.textContent = "Player 1: " + p1Score;
    }
});

p2Button.addEventListener("click", function(){
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            hasWon2.classList.add("winner");
            hasWon2.textContent = "Player 2 has WON!";
            gameOver = true;
        }
        console.log(p2Score);
        p2Display.textContent = "Player 2: " + p2Score;
    }
});

newGame.addEventListener("click", function(){
    p1Score = 0;
    p2Score = 0;
    hasWon1.classList.remove("winner");
    hasWon2.classList.remove("winner");
    hasWon1.textContent = "Player 1: " + p1Score;
    hasWon2.textContent = "Player 2: " + p2Score;
    gameOver = false;
});


