$(document).ready(function () {
    var imageArr = ["ruby.jpeg", "sapphire.jpeg","emerald.jpeg", "diamond.jpeg"];
    var wins = 0;
    var losses = 0;
    var scoreTotal = 0;
    var directionsText = $("#directions-text");
    var winsText = $("#wins-text").text("Wins: " + wins);
    var lossText = $("#losses-text").text("Losses: " + losses); 
    var scoreText = $("#score-text").text("Your Score: " + scoreTotal);
    // var ruby = $("#gem-1"); 
    // var sapphire = $("#gem-2");
    // var emerald = $("#gem-3");
    // var diamond = $("#gem-4");

    //resets variables wins, losses, scoretotal to 0
    //
    function InitializeGame(){

        wins = 0;
        losses = 0;
        scoreTotal = 0;
        createDomImageElements()
        generateRandomTargetNum(19, 120)//come back to this

        //dynamically generate DOM image elements

    }

    function createDomImageElements(){


        for (var i =0; i < imageArr.length; i++){
            //for each str generate a new img tag and append to page
            // Next we create a for loop to create crystals for every numberOption.

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("gem");

            // Each imageCrystal will be given a src link to the crystal image
            imageCrystal.attr("src", "assets/images/" + imageArr[i]);

            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            imageCrystal.attr("data-crystalvalue", generateRandomValue(1, 12));

            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#imageDiv").append(imageCrystal);
        }      
    
    }

    function generateRandomValue(min, max) {

        var randomValue = Math.floor(Math.random() * (max - min)) + min;
        return randomValue;

    };

    updateDom();
    function updateDom() {

        directionsText.textContent = ""
        winsText.textContent = "Wins: " + wins;
        lossText.textContent = "Losses: " + losses;
        // numberText.textContent = "Target Number: " + randomTargetNumber;
        scoreText.textContent = "Your Score: " + scoreTotal;

    };

    var numberText = $("#number-text").text("Target Number: " + generateRandomTargetNum(19, 120));

    function generateRandomTargetNum(min, max) {
        randomTargetNumber = Math.floor(Math.random() * (max - min)) + min;
        numberText = $("#number-text").text("Target Number: " + randomTargetNumber);

    };

    InitializeGame()
    

    $(".gem").click(function () { 
        $("#score-text").html("Your Score: " + scoreTotal);

        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue);

        
        scoreTotal += gemValue;

        // generateRandomValue(1,12);
        
        

        // scoreTotal += randomValue;

        // if ($(".gem").click(function(){
        //     var randomValue = Math.floor(Math.random() * (12 - 1)) + 1;
        //     scoreTotal += randomVaule;
        // })

        
            
            
        

        
        
        
        // console.log("HELLLO!");
        console.log(this);
    ;
    
    //when you click on the image gem, the the value of that gem gets added to the total score.
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // $("#gem-1").click(function () {  

    //     // scoreTotal += "Your Score: " + randomRubyValue; //(the variable connected to the ruby)
    //     $("#score-text").html(scoreTotal); //(this connects the score to that html text)
    //     // compareTargetNumberGemTotal ();  //(this calls out that if and else statement function into this gem function. Do that same for other gems)
        
    //     scoreTotal += randomRubyValue;
            
    //         alert("It worked!");
    //         console.log("ruby")

    // });

    // $(sapphire).click(function () { 

    
    // // scoreTotal = "Your Score: " + randomSapphireValue; 
    // $("#score-text").html(scoreTotal); 
    // // compareTargetNumberGemTotal ();  

    //     scoreTotal += randomSapphireValue;

    //     alert("It worked!");
    //     console.log("sapphire")

    // });

    // $(emerald).click(function () {  

    // // scoreTotal = "Your Score: " + randomEmeraldValue; 
    // $("#score-text").html(scoreTotal); 
    // // compareTargetNumberGemTotal (); 

    // scoreTotal += randomEmeraldValue;

    //     alert("It worked!");
    //     console.log("emerald")

    // });

    // $(diamond).click(function () {  

    // // scoreTotal = "Your Score: "+ randomDiamondValue; 
    // $("#score-text").html(scoreTotal); 
    // // compareTargetNumberGemTotal ();  

    // scoreTotal += randomDiamondValue;

    //     alert("It worked!");
    //     console.log("diamond")

    // });
});

// gemValues();

// function gemValues() {
//     if (randomRubyValue === randomSapphireValue) {
//         generateRandomSapphireValue(1, 12);
//     }
// }



// scoring();

// function scoring() {
//     if ($(ruby).click(function(){})) {
//         scoreTotal += randomRubyValue;
// };

// Click/Scoring
// 1: When you click on a gem, the score will increase.
// 2: Each gem should have a different value and one gem must have a value of one.

// compareTargetNumberGemTotal();
// function compareTargetNumberGemTotal() {

    
//     if (scoreTotal === randomTargetNumber) {
//         wins++;
//         updateDom();
//         resetGame();
//         generateRandomTargetNum();
        
//     } else if (scoreTotal > randomTargetNumber) {
//         losses--;
//         updateDom();
//         resetGame();
//         generateRandomTargetNum();

//     }
// }
});
