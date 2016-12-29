//Once the game starts, player should see Title, New Game button, and empty board.
$(document).ready(function() {
  console.log('Ready to try your luck?');

//Code for New Game Event
var $startButton = $('newGame');
$startButton.on("click", game.start);

//Pop up window for Player name entry Event
//Code to append player name to Bank Roll

});

//This is the game object for Blackjack Attack
var game = {
//Array of deck of cards
  deck: [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace'],
  
}
