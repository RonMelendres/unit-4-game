// 1: When you initialize game:
    // a: wins and losses are set to 0.
    // b: score total is set to 0.
    // c: target number is randomly set.
    // d: number vaule for each gem is set, however the vaules are hidden from the player.

var wins = 0;
var losses = 0;
var scoreTotal = 0;
var targetNumber = [];
var gemValue = [];

var randomTargetNumber = targetNumber[Math.floor(Math.random() * 120-19) + 19];

var randomGemValue = gemValue[Math.floor(Math.random() * 13) + 1];

        
var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text"); 
var lossText = document.getElementById("losses-text");
var numberText = document.getElementById("number-text");
var scoreText = document.getElementById("score-text");

function intializeGame(num){
    
    wins = num; 
    losses = num;
    scoreTotal = num;
    targetNumber = [];
    console.log(targetNumber),
    gemValue=[];
    updateDom();
    generateRandomTargetNum();

    
};
intializeGame(0);



function resetGame(){
    scoreTotal = 0;
    // targetNumber = [];
    gemValue=[];
    updateDom();
    generateRandomTargetNum();

};

resetGame();

function updateDom(){
    
    directionsText.textContent = ""
    winsText.textContent = "Wins: " + wins;
    lossText.textContent = "Losses: " + losses;
    numberText.textContent = "Target Number: " + targetNumber;
    scoreText.textContent = "Your Score: " + scoreTotal;
   
}

updateDom();

function generateRandomTargetNum(){
    randomTargetNumber = targetNumber[Math.floor(Math.random() * 120-19) + 19];
};

generateRandomTargetNum();
console.log(generateRandomTargetNum);

function generateRandomGemValue() {
    randomeGemValue = gemValue[Math.floor(Math.random() * 13) + 1];
};

generateRandomGemValue();




function compareTargetNumberGemTotal(){

    // if(compChoice.indexOf(userGuess) !== -1){
    //     console.log(userGuess);
        if (scoreTotal === targetNumber) {
            wins++;
            updateDom();
            resetGame();
            generateRandomTargetNum();
            generateRandomGemValue();
           
        } else if (scoreTotal > targetNumber) {
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