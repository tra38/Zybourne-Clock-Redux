//Zybourne Clock Redux:
//The main character, Sylus, has discovered the Zybourne Clock, a time-traveling device
//that can change history. Sylus must use this Clock to keep society stable and avert a social revolution,
//boost technological research, and allow his side (the Bookworld-Rasenni Coalition) to defeat
//Johnny Five-Ace's dictatorship in the inevitable World War.

//Then, Sylus must destroy the Clock so that nobody else can change history.

// Your mission description:
// Overall mission: Change history by modifying events within the timeline
// Goals: A timeline can only hold 4 events. In order to change history, you must delete an event
//and replace it with a brand new event. When you change history, you affect three basic metrics:
//Social Stability, Technological Progress, and World War. You "win" when you can balance those
//three metrics to an acceptable level.
// Characters:
// *The Timeline, it can only hold 4 events at a time.
// *Hand of Events, you select from this hand what events you want to shift into the timeline.
// Any events you delete also goes into your Hand.
// Objects:
//*Events, with each Event carrying with it a short description and its effects on the broader
// metrics. (Ideally, events would also affect each other, but this is a MVP. Not a full fledged
// version of the product)
// -- Event(SocialStability, TechnologicalProgress, WorldWar)
// *Hand (All Events Not In Timeline)
// *Timeline (4 Events)
// Functions:
// DeleteEvent (remove the event from the timeline, add it to your Hand)
// AddEvent (add the event to the timeline, removing it from your Hand)
// DestroyClock (End the game, game will then judge the results of your actions)
//After every action, the timeline is regenerated again and shown to the players.
//This is important because it allows you to see the results of your actions.

//In the original version of Zybourne Clock Redux, you have to both DeleteEvent and AddEvent at
//the same time, but by splitting up the two commands, it is possible to purge the Timeline entirely
//and then rebuild it from the ground up. This can be...interesting. It does mean that you need a
//"default" history that may happen if everything is removed from the Timeline.

//The game must quickly and accurately explain the Fluff and Mechanics of the game to players.
//It is expected that those who are evaluating the game will have no knowledge of the source material.


// Pseudocode
// Game first displays the fluff to immerse the player and get him to understand the controls.
// Game displays the current state of the Timeline. Timeline also shows the status of the three metrics.
// Game also shows the Player's Hand, showing what events can be inserted into the timeline.

// *Player types in the command to DeleteEvent, causing that Event to be removed from the Timeline
// and inserted into his hand. The Timeline then updates and displays the results to the player.

// *Player types in the command to AddEvent, causing that Event to be removed from his Hand
// and inserted into the Timeline. The Timeline then updates and then displays the results to the player.

// *The Player is prohibited from placing more than 4 events into the Timeline. The Timeline can
// hold only 4 events.

// *When Player is sastified by the Timeline, he will then issue the command to Destroy Clock.
// This casues the Timeline to be "fixed". The Player is judged to have "won" if all three metrics
// are sastified.

//Clock is destroyed and the game tells you your score and how many timelines you have "created" while
//playing this game. This mechanic does rely on the Honor System though, and theoretically, a player
//can keep on playing even though the clock was 'destroyed'.

//Background Information (for the Reviewer)
//Zybourne Clock was a game project in 2003 that failed about 1 month after it
//began, and ended up being parodied heavily on the Internet. Interested in this project, I did my own
//research on it, and tried to create a game that reflected its original lore and content as much as possible,
//while paying lip service to some of the parody material out there and adding my own spin on events. (For
//example, Johnny Five-Ace, a minor character in the original version of Zybourne Clock, was turned
//into a major villian in my game, simply as a nod to the parody material.)

//The 'Zybourne Clock' was invented by Dr. Zybourne to try and avert a bloody war in the future. He created
//a time-traveling clock that can change the global climate, thereby making people smarter. However, this
//clock ended up being a powerful MacGuffin, as lots of people wanted to grab it and use it to change
//history for their own means. In this game, you play as Sylus, an R&D scientist who has just gained control
//of the Clock and wants to use it to change history to ensure that Rasenni wins the war against Capital.

//The inspiration for this game's mechanics was based on a quote from the canon material that stated:

//"We theorized that when you send an object through time, it does not create a new timeline that overrides
//the current like we had originally thought. When the object enters the timestream, time begins to correct
//itself. Let me use this example: Imagine four balls on the edge of a cliff. Say a direct copy of the ball
//nearest the cliff is sent to the back of the line of balls and takes the place of the first ball. The
//formerly first ball becomes the second, the second becomes the third, and the fourth falls off the cliff.
//Time works the same way."

//My interpretation of this quote is that the Timeline can only have 4 'events', just like a cliff can only
//have four balls. By changing what events are in the Timeline (pushing balls off the cliff and placing new
//balls onto the cliff), you affect history. However, that is the sole extent of your ability to modify
//time. It was a rather weird theory of time-modification that I do not think ever been seen before (and in fact, that very quote has been a subject of parody for being needlessly bizarre and obtuse).

// Reflection

//I have learned why unique games are rare in the global marketplace. To make a unique game means you have to
//program it, which can prove utterly challenging, especially if the mechanic you have in mind has never
//been done before, so you could not ask for advice. It also means that there's no previous 'experiences'
//that you can consult to help your game, so you have no guidance whatsoever to help you make your game.
//Finally, you do not know whether the mechanic would be fun in practice, or merely a technical curiosity,
//until AFTER you programmed it.

//I can see why big game companies would prefer to stick to known quanities than take risks. Some risks
//deserve not to be taken.

//The game itself has the potential to be fun though. It was interesting to play, and I was somewhat
//engaged in it. But the currently programmed Events are unbalanced, and will need some tinkering before
//they feel 'fair'. Future iterations can make the game more fun, so long as there is feedback to help
//guide the improvements.

//This project was very long and tiring! Simple mistakes such as the lack of semicolons and missing "()"
//really threw the project off. I did not like why Javascript was not giving me any errors, forcing me
//to write my own  (non-boolean) automated driver code tests just to even try to get a handle on things.

//One of the oddest parts of this challenge is trying to sastify the 2 objects requirements. Originally,
//I had plans for three Objects: PlayerHand, the Timeline, and Metrics, but I realized that PlayerHand
//and Timeline would be better off as Arrays. This meant that I only really had 1 object (the Metrics),
//so I had to improvise, creating a new Object (GameRating) to store important details that will
//be outputted to the player after he destroys the Zybourne Clock.

//According to Maria Piper, several DevBootCamp students complained about their code being 'hacky'
//and being upset about their bad programming. I believe I may have leaned myself in that direction
//with the use of the 'EmptyEvent' function, so that the code has something to "call". I am not
//that upset about it though, as I doubt there would have been a "good solution" for what I was
//planning on doing.

//I did not do a lot of refactoring. This may seem weird, as I spent  75 minutes refactoring,
//but it actually was not that odd at all. The initial version of program had ~367 lines of codes
//(including comments)! Such a long program meant that there was many room for improvement, and I
//can barely scratch the surface. Seeing that I was repeating myself a lot when making the Events,
//I created an Event Constructor, which caused me to research how inheritance and prototyping
//works in JavaScript. I also did some hacky stuff to try and get the Constructor to store
//certain arguments that will then be 'called' upon to fill in a function-template

//I noticed that I have deviated from the Pseudocode by not logging to the console the fluff
//to the story, so that players would be immersed. I have also made some design choices
//to make it easier for me to program, such as preventing players from deleting two events at a time,
//or having a feature to add/delete with one command. I am happy with what I came up with,
//as it sastified the instructions for this challenge. But sacrifices were made for the greater good.
