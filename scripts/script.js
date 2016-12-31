//Once the game starts, player should see Title, New Game button, and empty board.
$(document).ready(function() {
  console.log('Ready to try your luck?');

//Code for New Game Event
  $('#newGame').click(function() {
    var $firstName = prompt("Please enter your name");
    $('h3').text($firstName + "'s Bankroll");
    Gameplay.resetGame();
  })
});

//Bet Button Controls
$('#bet25').click(function() {
  Controller.betTwentyFive();
});
$('#bet50').click(function() {
  Controller.betFifty();
});
$('#bet100').click(function() {
  Controller.betOneHundred();
});

//Begin game object for Blackjack Attack
const Gameplay = {
//Array of deck of cards
//For testing purposes, only one suit will be included in deck
//For testing, face cards will be replaced by their numerical values
//                                    J   Q   K   A
  cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
  //Shuffle function
  //Citation: Borrowed code from Marc's jQuery memory game solution
  shuffle: function(arr) {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    console.log('Shuffling Cards');
    return arr;
  },
  //Function to reset game by bringing Bank Roll back to original amount and clearing the board.
  resetGame: function() {
    $('#money').html("$1000");
    $('#playerCardOne').html("");
    $('#dealerCardOne').html("");
    $('#playerCardTwo').html("");
    $('#dealerCardTwo').html("");
    console.log('Starting over!')
  },

  //Function to allow player to place bet, subtracting from bank roll
  //Will also add to bank roll if player wins hand
  bet: function() {



    Gameplay.dealCards();
  },

  //Once bet is placed, this function will call first 4 cards in shuffled array
  dealCards: function() {
    //At the beginning of each hand, each card will have it's html cleared
    //To simulate real blackjack, cards dealt will be alternated to diversify odds
    $('#playerCardOne').html("");
    $('#dealerCardOne').html("");
    $('#playerCardTwo').html("");
    $('#dealerCardTwo').html("");

    //Shuffle the array before each hand
    Gameplay.shuffle(Gameplay.cards);

    //Assigning Card Images to Card Values

  },

  //This function will check to see if player card total is 21. If card total is over 21, player/dealer will "bust".
  checkForVictory: function() {

  },

  //If cards do not equal 21, player will call this function to deal next card value in array
  hit: function() {

  },

  //If player wishes to hold, this function will end player turn and begin dealer turn
  hold: function() {

  },

//End of game object
};

//How the board changes based on Gameplay and flash messages
const BoardEffect = {

};

//Player control of board's features and in-game events
const Controller = {
  betTwentyFive: function() {
    var bankRoll = $('#bankRoll').html();
    var twentyFive = 25;
    $('#bankRoll').html(bankRoll - twentyFive);
  },
  betFifty: function() {
    var bankRoll = $('#bankRoll').html();
    var fifty = 50;
    $('#bankRoll').html(bankRoll - fifty);
  },
  betOneHundred: function() {
    var bankRoll = $('#bankRoll').html();
    var oneHundred = 100;
    $('#bankRoll').html(bankRoll - oneHundred);
  }
};
