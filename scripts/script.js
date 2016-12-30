//Once the game starts, player should see Title, New Game button, and empty board.
$(document).ready(function() {
  console.log('Ready to try your luck?');

//Code for New Game Event
var $beginGameButton = $('#newGame');
$beginGameButton.on("click", Gameplay.resetGame);

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
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  },
  //Function to reset game by bringing Bank Roll back to original amount and clearing the board.
  resetGame: function() {
    console.log('Starting over!')
    //line of code to bring bank roll <p> back to $1,000.
    //code to remove any cards in play
  },

  //Function to allow player to place bet, subtracting from bank roll
  //Will also add to bank roll if player wins hand
  bet: function() {
    console.log('Shuffling Deck');
    Gameplay.shuffle(Gameplay.deck);



    Gameplay.dealCards();
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
