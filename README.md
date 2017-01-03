# Blackjack Attack!
## Written and Coded by Matt Martinez
###Overview
For my unit 1 project, I decided to go with Blackjack. I have been a long time fan of the game, and I felt that my past experience would give me an edge as I planned out my HTML, CSS, and Javascript. Throughout this project, I found myself being challenged to piece my code together in more than one way in order to find a solution. This aspect of the project was invaluable to me, as I felt I thoroughly was able to grasp and begin to understand the concepts of each programming language. Admittedly, despite the fact that I did not accomplish all that I had hoped, I am proud of the work that I was able to produce.

###Planning Process
I started my project by creating user stories broken down into three main sections: MVP, Recommended, and Advanced. My plan was to tackle the MVP requirements first in order to build out the main components of my game. Once I accomplished that, I planned to implement the Recommended and Advanced features to the best of my ability. Here are links to my User Stories.

After writing out my user stories, I decided to sketch out a wireframe of my project so I could visualize how to lay everything out. A link to my mock-up can be found here.

Finally, I created check lists specific to each programming language so I could track my project progress and see how everything would build upon each other. My links to my checklists can be found here as well.

###MVP Progress
At the time of writing this README, I have successfully completed 4/6 MVP requirements with significant efforts made towards completing the final 2 requirements. My approach focused around creating a primary game loop where the player would bet an amount to receive cards, decide whether to hit or fold, and wait to see what cards the dealer holds. After the dealer's turn, the loop would end and the player would restart it by placing another bet. This approach helped shape my understanding of how the Javascript should be structured moving forward. Below is a screenshot of my final game board.


###Technical Challenges
During my work, I experienced two significant obstacles during my project.

The first was deciding how to create my bet function. I knew that I did not want to use a form to accept bets and instead opted for three flat options of $25, $50, and $100. I felt that this would make the game straightforward for the user and also assist with the actual programming. When it came time to manipulate the DOM to have the bet reflected in each button, I found difficulty making a single function work and instead created three different functions that would work for each bet button. This gave me a path forward, yet it also made things more complicated as I needed to repeat my code. This is especially evident as I was creating the jQuery click events to start the initial game loop. Looking back, I wish I would have strived harder to make the form approach to receiving bets work as I am still left with the issue of awarding the player their winning amount should they beat the dealer.

My second significant obstacle came from my CSS styling. I originally used the "position: relative" style selector to organize my game board how I wanted it. Everything worked great, until I wanted to have the values added into the player/dealer card divs. The addition of the text node caused all of the cards to shift downward out of place, thus rendering my layout unstable. To fix this, I created four larger div areas within my gameBoard div that would house the different elements. These areas were: dealerArea, Bank, Player Area, and Button Area. Once I had these divs established with relative positioning, I floated the actual card divs to keep them in place. This solved the big issue of the cards jumping around my screen, even when text nodes were added. While I was able to solve this problem effectively, the amount of time I spent solving this was significant. In retrospect, I wish I had payed more attention to how relative positioning works so I could have spent more time ironing out my Javascript. That being said, I am happy to have learned from this obstacle.

###Unsolved Problems
At the time of writing, I still have the following aspects of my game to iron out:
1) Hit function - Presently, all of the extra card divs I created appear when the hit button is pressed. This forces the player to lose control of their hand as they cannot choose to hold after just one hit event. This programming structure works well for my dealer function as I programmed it to run once the player presses hold.
2) Bet/CheckForVictory Functions - I still have not figured out how to amend the issue I created by having three bet buttons. I need to re-work my code to be able to have a single bet function that will award the player their winnings when they beat the dealer or hit 'blackjack.'
3) Royal Cards and Card Images - Due to time constraints, I focused more on getting my code to work rather than appending the appropriate card images and including Royal Cards into my main array. Currently, the royal and ace cards are represented by their numerical value but there I don't have the appropriate construct in place to account for distinguishing between them.

###Conclusion
I must emphasize how much fun I had during this project. It was a great learning experience and I am still blown away that I was able to produce the work that I currently have after just two weeks of learning. As the days continue, I plan on ironing out the unsolved problems I mentioned for my own personal benefit.
