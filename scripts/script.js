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
//                                    J   Q   K   A                               J   Q   K   A                               J   Q   K   A                               J   Q   K   A
  cards: [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11],
  playerCards: [],
  dealerCards: [],
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
    Gameplay.playerCards = [];
    Gameplay.dealerCards = [];
    BoardEffect.clearMsg();
    BoardEffect.clearMsgPlayer();
    BoardEffect.clearMsgDealer();
    console.log('Welcome!')
  },

  //Below functions will allow player to place bet of their choice, subtracting from bank roll
  //Will also add to bank roll if player wins hand

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
  },

  //Once bet is placed, this function will call first 4 cards in shuffled array
  dealCards: function() {
    //At the beginning of each hand, each card will have it's html cleared
    //To simulate real blackjack, cards dealt will be alternated to diversify odds
    //Once cards are dealt, they will be added to the empty playerCards and dealerCards arrays for later use.
    //The playerCards and dealerCards arrays will also be cleared at the beginning of each hand
    $('#playerCardOne').html("");
    $('#dealerCardOne').html("");
    $('#playerCardTwo').html("");
    $('#dealerCardTwo').html("");
    $('#playerCardThree').html("").addClass("hidden");
    $('#dealerCardThree').html("").addClass("hidden");
    $('#playerCardFour').html("").addClass("hidden");
    $('#dealerCardFour').html("").addClass("hidden");
    $('#playerCardFive').html("").addClass("hidden");
    $('#dealerCardFive').html("").addClass("hidden");
    Gameplay.playerCards = [];
    Gameplay.dealerCards = [];
    BoardEffect.clearMsg();
    BoardEffect.clearMsgPlayer();
    BoardEffect.clearMsgDealer();

    $('#playerCardOne').html(Gameplay.cards[0]);
    $('#dealerCardOne').html(Gameplay.cards[1]);
    $('#playerCardTwo').html(Gameplay.cards[2]);
    $('#dealerCardTwo').html(Gameplay.cards[3]);
    Gameplay.playerCards.push(Gameplay.cards[0], Gameplay.cards[2]);
    Gameplay.dealerCards.push(Gameplay.cards[1], Gameplay.cards[3]);


    //Assigning Card Images to Card Values

  },

// Function to add up playerCards array and display to board
  playerSum: function() {
    var sumP = 0;
    for (i = 0; i < (Gameplay.playerCards).length; i++) {
      sumP += Gameplay.playerCards[i];
    } BoardEffect.flashMsgPlayer(sumP);
  },

//Function to add up dealerCards array and display to board
  dealerSum: function() {
    var sumD = 0;
    for (i = 0; i < (Gameplay.dealerCards).length; i++) {
      sumD += Gameplay.dealerCards[i];
    } BoardEffect.flashMsgDealer(sumD);
  },

  //If cards do not equal 21, player will call this function to deal next card value in array
  hit: function() {




    if (Gameplay.cards[0] + Gameplay.cards[2] < 21) {
      $('#playerCardThree').html(Gameplay.cards[4]);
      $('#playerCardThree').removeClass("hidden");
    } if ((Gameplay.cards[0] + Gameplay.cards[2] + Gameplay.cards[4]) < 21) {
      $('#playerCardFour').html(Gameplay.cards[5]);
      $('#playerCardFour').removeClass("hidden");
    } if ((Gameplay.cards[0] + Gameplay.cards[2] + Gameplay.cards[4] + Gameplay.cards[5]) < 21) {
      $('#playerCardFive').html(Gameplay.cards[6]);
      $('#playerCardFive').removeClass("hidden");
    };
    console.log('Hit!');
  },

  //If player wishes to hold, this function will end player turn and begin dealer turn.
  hold: function() {
    if (Gameplay.cards[1] + Gameplay.cards[3] < 20) {
      $('#dealerCardThree').html(Gameplay.cards[7]);
      $('#dealerCardThree').removeClass("hidden");
    } else if ((Gameplay.cards[1] + Gameplay.cards[3] + Gameplay.cards[7]) < 21) {
      $('#dealerCardFour').html(Gameplay.cards[8]);
      $('#dealerCardFour').removeClass("hidden");
    } else if ((Gameplay.cards[1] + Gameplay.cards[3] + Gameplay.cards[7] + Gameplay.cards[8]) < 21) {
      $('#dealerCardFive').html(Gameplay.cards[9]);
      $('#dealerCardFive').removeClass("hidden");
    };
    console.log('Hold!');
    Gameplay.checkForVictory();
  },

  //This function will check to see if player card total is 21. If card total is over 21, player/dealer will "bust".
  checkForVictory: function() {
    var playerCards = Gameplay.cards[0] + Gameplay.cards[2] + Gameplay.cards[4] + Gameplay.cards[5] + Gameplay.cards[6];
    if (playerCards <= 21) {
      BoardEffect.flashMsg(`You win!`);
    } else {
      BoardEffect.flashMsg(`Bust! Try again?`);
    }
  },

//End of game object
};

//How the board changes based on Gameplay and flash messages
const BoardEffect = {
//Citation: I learned how to create flash messages from examining Matt's solution to the tic-tac-toe homework. The code below is based on what I learned.
  flashMsg: function(msg) {
    $('#flashMsg').html(msg);
  },

  clearMsg: function() {
    $('#flashMsg').html(null);
  },

  flashMsgPlayer: function(msg) {
    $('#flashMsgPlayer').html(msg);
  },

  clearMsgPlayer: function() {
    $('#flashMsgPlayer').html(null);
  },

  flashMsgDealer: function(msg) {
    $('#flashMsgDealer').html(msg);
  },

  clearMsgDealer: function() {
    $('#flashMsgDealer').html(null);
  },

};

//Player control of board's features and in-game events
const Controller = {

};

//Button Controls
$('#bet25').click(function() {
  Gameplay.betTwentyFive();
  Gameplay.shuffle(Gameplay.cards);
  Gameplay.dealCards();
  Gameplay.playerSum();
  Gameplay.dealerSum();
});
$('#bet50').click(function() {
  Gameplay.betFifty();
  Gameplay.shuffle(Gameplay.cards);
  Gameplay.dealCards();
});
$('#bet100').click(function() {
  Gameplay.betOneHundred();
  Gameplay.shuffle(Gameplay.cards);
  Gameplay.dealCards();
});
$('#hit').click(function() {
  Gameplay.hit();
  Gameplay.playerSum();
});
$('#hold').click(function() {
  Gameplay.hold();
})
