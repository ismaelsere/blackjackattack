# Blackjack
## MVP User Stories
As a user, I want to be able to start a new game.
  The user sees the game title and a New Game button.

As a user, I want to be able to enter my name to make it more personal.
  The user presses the New Game button and receives a prompt to enter their name.
  Once the user enters their name, it is then appended to the player object within the overall game.

As a user, I want to see how much money I have.
  The player should see a div with the current bankroll.
  Once the user enters their name, Player should be appended to "Player Name".
  The total dollar amount in this div should change to reflect the amount of money the player has left whenever they bet, win, or lose.

As a user, I want to be able to bet money each hand I play in different increments.
  The game loop will begin once the player chooses how much they want to bet for the current hand.
  For this game, the player can bet in increments of $25, $50, and $100 amounts.
  There will be a max bet of $100 each hand.
  The user will need a way to clearly communicate to the game how much they wish to bet for each hand.

As a user, I want to to be able to get additional cards to make 21, or hold onto what I have.
  After placing their bet, the user will receive two cards which can have a total combined amount of 2 to 21.
  Based on their current card total, the player will need to choose either to "hit", to receive additional cards to equal 21, or "hold", to keep their current hand.
  Whichever decision the player makes, their will need to be an appropriate amount of divs added to the board.

As a user, I want to know if I've gone over 21 or "bust."
  The player will be given a flash message of "bust" if their combined cards equal an amount over 21.
  The current game loop will then end, and the player will need to place another bet to begin the game loop again.

As a user, I want to know if I've won.
  If the player's card total is <= 21, but at an amount higher than the card total for the dealer, the player will win the current hand.
  The player will see a flash message indicating that they won/beat the dealer.

As a user, I want to know if the dealer has hit 21 or "bust."
  The player will need to see one card displayed from the dealer's hand in order to make the decision of whether to "hit" or "hold."
  After the player makes their decision, the dealer will begin to "hit" to reach 21 and beat the player's card total.
  If the dealer makes it to 21 or gains a card total higher than the player, the player then loses.
  If the dealer gains a card total higher than 21, they will "bust" and the player will win the hand.

## Recommended User Stories
As a user, I want to be able to choose how to play an Ace card.

As a user, I want to know if my hand automatically hits Blackjack!

As a user, I want to know if I've tied with the dealer.

As a user, I want to reset the game if I hit Game Over.

## Advanced User Stories
As a user, I want to be able to split my hand if possible.

As a user, I want to be able to double down my hand.

As a user, I want to know if I can have 'insurance' if a dealer appears to have Blackjack!

As a user, I would like to know my odds depending on what the dealer has and be given a recommendation on how to play.
