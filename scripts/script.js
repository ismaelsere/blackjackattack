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
    $('#bankRoll').html("1000");
    $('#playerCardOne').html("");
    $('#dealerCardOne').html("");
    $('#playerCardTwo').html("");
    $('#dealerCardTwo').html("");
    $('#playerCardThree').html("");
    $('#dealerCardThree').html("");
    $('#playerCardFour').html("");
    $('#dealerCardFour').html("");
    $('#playerCardFive').html("");
    $('#dealerCardFive').html("");
    console.log('Welcome!')
  },

  //Function to allow player to place bet, subtracting from bank roll
  //Will also add to bank roll if player wins hand
  bet: function() {




  },

  //Once bet is placed, this function will call first 4 cards in shuffled array
  dealCards: function() {
    //At the beginning of each hand, each card will have it's html cleared
    //To simulate real blackjack, cards dealt will be alternated to diversify odds
    $('#playerCardOne').html("");
    $('#dealerCardOne').html("");
    $('#playerCardTwo').html("");
    $('#dealerCardTwo').html("");

    $('#playerCardOne').html(Gameplay.cards[0]);
    $('#dealerCardOne').html(Gameplay.cards[1]);
    $('#playerCardTwo').html(Gameplay.cards[2]);
    $('#dealerCardTwo').html(Gameplay.cards[3]);
    //Assigning Card Images to Card Values

  },

  //If cards do not equal 21, player will call this function to deal next card value in array
  hit: function() {
    if (Gameplay.cards[0] + Gameplay.cards[1] < 21) {
      $('#playerCardThree').html(Gameplay.cards[4]);
      $('#playerCardThree').removeClass("hidden");
    } else if ((Gameplay.cards[0] + Gameplay.cards[1] + Gameplay.cards[4]) < 21) {
      $('#playerCardFour').html(Gameplay.cards[5]);
      $('#playerCardFour').removeClass("hidden");
    };


    // $('#playerCardFive').html(Gameplay.cards[6]);
    // $('#playerCardFive').removeClass("hidden");
  },

  //This function will check to see if player card total is 21. If card total is over 21, player/dealer will "bust".
  checkForVictory: function() {

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

//Bet Button Controls
$('#bet25').click(function() {
  Controller.betTwentyFive();
  Gameplay.shuffle(Gameplay.cards);
  Gameplay.dealCards();
});
$('#bet50').click(function() {
  Controller.betFifty();
  Gameplay.shuffle(Gameplay.cards);
  Gameplay.dealCards();
});
$('#bet100').click(function() {
  Controller.betOneHundred();
  Gameplay.shuffle(Gameplay.cards);
  Gameplay.dealCards();
});
$('#hit').click(function() {
  Gameplay.hit();
})
