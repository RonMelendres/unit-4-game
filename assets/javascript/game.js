var wins = 0;
var losses = 0;
var scoreTotal = 0;
var randomTargetNumber = [Math.floor(Math.random())];
// [Math.floor(Math.random() * 120 - 19) + 19]

// var randomGemValue = [Math.floor(Math.random())];

var randomRubyValue = [Math.floor(Math.random())];
var randomSapphireValue = [Math.floor(Math.random())];
var randomEmeraldValue = [Math.floor(Math.random())];
var randomDiamondValue = [Math.floor(Math.random())];


var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossText = document.getElementById("losses-text");
var numberText = document.getElementById("number-text");
var scoreText = document.getElementById("score-text");

var ruby = document.getElementById("gem-1") || randomRubyValue;
randomRubyValue = [Math.floor(Math.random())];


var sapphire = document.getElementById("gem-2");
var emerald = document.getElementById("gem-3");
var diamond = document.getElementById("gem-4");



function intializeGame() {

    wins = 0;
    losses = 0;
    scoreTotal = 0;
    generateRandomTargetNum(19, 120);
    // generateRandomGemValue(1, 12);
    console.log(randomTargetNumber);
    // console.log(randomGemValue);
};
intializeGame();

function resetGame() {
    scoreTotal = 0;
    // gemValue=[];
    updateDom();
    generateRandomTargetNum(19, 120);
    console.log(randomTargetNumber);

    // generateRandomGemValue(1, 12);
    generateRandomRubyValue(1, 12);
    generateRandomSapphireValue(1, 12);

    // console.log(randomGemValue);
    // console.log(generateRandomGemValue);
    // console.log(randomRubyValue);

};

resetGame();

function updateDom() {

    directionsText.textContent = ""
    winsText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    numberText.textContent = "Target Number: " + randomTargetNumber;
    scoreText.textContent = "Your Score: " + scoreTotal;

}

updateDom();

function generateRandomTargetNum(min, max) {
    randomTargetNumber = Math.floor(Math.random() * (max - min)) + min;

};

generateRandomTargetNum(19, 120);

// function generateRandomGemValue(min, max) {
//     randomRubyValue = Math.floor(Math.random() * (max - min)) + min;
//     randomSapphireValue = Math.floor(Math.random() * (max - min)) + min;
//     randomEmeraldValue = Math.floor(Math.random() * (max - min)) + min;
//     randomDiamondValue = Math.floor(Math.random() * (max - min)) + min;
//     console.log("ruby" + randomRubyValue);
//     console.log("sapphire" + randomSapphireValue);
// };

// generateRandomGemValue(1, 12);

function generateRandomRubyValue(min, max) {
    randomRubyValue = Math.floor(Math.random() * (max - min)) + min;

    console.log("ruby" + randomRubyValue);

};

generateRandomRubyValue(1, 12);

function generateRandomSapphireValue(min, max) {

    randomSapphireValue = Math.floor(Math.random() * (max - min)) + min;

    console.log("sapphire" + randomSapphireValue);
};

generateRandomSapphireValue(1, 12);


// click functions for each gem below.

$(document).ready(function () {
    $(ruby).click(function () {  

    scoreTotal = scoreTotal + ruby //(the variable connected to the ruby)
    $("#score-text, scoreText").html(scoreTotal); //(this connects the score to that html text)
    // compareTargetNumberGemTotal ();  //(this calls out that if and else statement function into this gem function. Do that same for other gems)

        alert("It worked!");
        console.log("ruby")

    });

    $(sapphire).click(function () { 

    
    scoreTotal = scoreTotal + sapphire 
    $("#score-text").html(scoreTotal); 
    // compareTargetNumberGemTotal ();  

        alert("It worked!");
        console.log("sapphire")

    });

    $(emerald).click(function () {  

    scoreTotal = scoreTotal + emerald 
    $("#score-text").html(scoreTotal); 
    // compareTargetNumberGemTotal (); 

        alert("It worked!");
        console.log("emerald")

    });

    $(diamond).click(function () {  

    scoreTotal = scoreTotal + diamond 
    $("#score-text").html(scoreTotal); 
    // compareTargetNumberGemTotal ();  

        alert("It worked!");
        console.log("diamond")

    });
});

gemValues();

function gemValues() {
    if (randomRubyValue === randomSapphireValue) {
        generateRandomSapphireValue(1, 12);
    }
}



scoring();

function scoring() {
    if ($(ruby).click(function(){})) {
        scoreTotal += randomRubyValue;
};

// Click/Scoring
// 1: When you click on a gem, the score will increase.
// 2: Each gem should have a different value and one gem must have a value of one.


function compareTargetNumberGemTotal() {

    // if(compChoice.indexOf(userGuess) !== -1){
    //     console.log(userGuess);
    if (scoreTotal === randomTargetNumber) {
        wins++;
        updateDom();
        resetGame();
        generateRandomTargetNum();
        generateRandomGemValue();

    } else if (scoreTotal > randomTargetNumber) {
        losses--;
        updateDom();
        resetGame();
        generateRandomTargetNum();
        generateRandomGemValue();

    }
}

compareTargetNumberGemTotal();

// 2: During the game:
    // a: Once a gem is clicked, the value of that gem increases score. The value for each gem is different.
    // b: If the player score equals the target number, then the win total increases by 1.
    // c: However if the the player score exceeds the target number, the loss total increases by 1.
    // d: If either the win or loss condition is met, then the game:
        // -Resets the player score to 0.
        // -Randomly sets the target number value.
        // -Randomly sets the value of each gem. 
}