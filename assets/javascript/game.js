$(document).ready(function () {

    var imageArr = ["ruby.jpeg", "sapphire.jpeg", "emerald.jpeg", "diamond.jpeg"];
    var wins = 0;
    var losses = 0;
    var scoreTotal = 0;
    var directionsText = $("#directions-text");
    var winsText = $("#wins-text").text("Wins: " + wins);
    var lossText = $("#losses-text").text("Losses: " + losses);
    var scoreText = $("#score-text").text("Your Score: " + scoreTotal);
    var randomTargetNumber = 0;

    function InitializeGame() {

        wins = 0;
        losses = 0;
        scoreTotal = 0;
        createDomImageElements();
        generateRandomTargetNum(19, 120);

    }

    function resetGame() {
        scoreTotal = 0;
        scoreText = $("#score-text").text("Your Score: " + scoreTotal);
        generateRandomTargetNum(19, 120);
        generateRandomValue();

        for (var j = 0; j < imageArr.length; j++) {
            $("#gem" + j).attr("data-crystalvalue", generateRandomValue(1, 12));
        }

        // updateDom();
    }

    function createDomImageElements() {


        for (var i = 0; i < imageArr.length; i++) {
            //for each str generate a new img tag and append to page
            // Next we create a for loop to create crystals for every numberOption.

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");

            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("gem");
            imageCrystal.attr("id", "gem" + i);

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
        winsText = $("#wins-text").text("Wins: " + wins);
        lossText = $("#losses-text").text("Losses: " + losses);
        scoreText = $("#score-text").text("Your Score: " + scoreTotal);

    };

    var numberText = 0;

    function generateRandomTargetNum(min, max) {
        randomTargetNumber = Math.floor(Math.random() * (max - min)) + min;
        numberText = $("#number-text").text("Target Number: " + randomTargetNumber);
        // console.log(randomTargetNumber);

    };

    InitializeGame();
 
    $("#imageDiv").on("click", ".gem", function () {
        var gemValue = ($(this).attr("data-crystalvalue"));
        gemValue = parseInt(gemValue);

        scoreTotal = scoreTotal + gemValue;
        
        if (scoreTotal === randomTargetNumber) {
            wins++;
            
            updateDom();
            resetGame();
        }
        
        if (scoreTotal > randomTargetNumber) {
            losses++;
            updateDom();
            resetGame();
        }

        updateDom();


    }); //related to (document).ready

    });
