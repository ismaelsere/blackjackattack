//Once the game starts, player should see Title, New Game button, and empty board.
$(document).ready(function() {
  console.log('Ready to try your luck?');

//Code for New Game Event
var $beginGameButton = $('newGame');
$beginGameButton.on("click", Gameplay.start);

//Pop up window for Player name entry Event
//Code to append player name to Bank Roll

});

//Begin game object for Blackjack Attack
const Gameplay = {
//Array of deck of cards
//For testing purposes, only one suit will be included in deck
  deck: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  //Shuffle function
  //Citation: Borrowed code from Marc's jQuery memory game solution
  shuffle: function(arr) {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], a[j] = x);
    return arr;
  },
  //Function to initiate deck shuffle and initiate game
  start: function() {
    console.log('Shuffling Deck');
    Gameplay.shuffle(Gameplay.deck);
    Gameplay.bet();
    Gameplay.dealCards();
  },

  //Function to allow player to place bet, subtracting from bank roll
  //Will also add to bank roll if player wins hand
  bet: function() {

  },

  //Once bet is placed, this function will call first 4 cards in shuffled array
  dealCards: function() {

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

//How the board changes based on Gameplay
const BoardEffect = {

};

//Player control of board's features
const Controller = {

};
