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

var Metrics = {
    WorldWar: 50,
	TechnologicalProgress: 50,
	SocialStability: 50
};

var GameRating = {
	Score: 0,
	Timelines: 0,
}

//ResetMetrics is called at the start of a new Timeline! This is necessary so that the Events can properly be
//able to affect the Metrics without worrying about the effects of previous Timelines.
var ResetMetrics = function()
{
	Metrics.WorldWar = 50;
	Metrics.TechnologicalProgress = 50;
	Metrics.SocialStability = 50;
	GameRating.Score = 0;
	CityFive = false;
}


var BlankLine = function()
{
	console.log("\n");
};

//All Events inherit from this Constructor Function. It stores all our inputs into Object values,
//so that we can later use those values when we 'call' them.
var Event = function Event(WorldWar, SocialStability, TechnologicalProgress, Message, Event_Variable) {
	this.WorldWar = WorldWar;
	this.SocialStability = SocialStability;
	this.TechnologicalProgress = TechnologicalProgress;
	this.Message = Message;
	this.Event_Variable = Event_Variable;
}

//Protoype allows us to implement pseudoclasses into Javascript.
//It is necessary to define the 'call' method on the Event Constructor so that we can trigger the
//event's effects.
Event.prototype = {
	call: function() {
		console.log(this.Message);
		BlankLine();
		Metrics.WorldWar += this.WorldWar;
		Metrics.SocialStability += this.SocialStability;
		Metrics.TechnologicalProgress += this.TechnologicalProgress;
		if (this.Event_Variable == "CityFive")
		{
			CityFive = true;
		}
	}
	};

//At the beginning of the game, the following four events are inserted into the Timeline and are triggered.
//new Event(WorldWar, SocialStability, TechnologicalProgress, Message)
var CityFiveBuilt = new Event(-20,0,20, "CITY FIVE BUILT - Bookworld, Rasenni and Capital agreed to build a major coal-mining facility called City 5. Though all three superpowers became economically prosperous, they became overly reliant on City 5 to provide for their coal needs. The supersoldier Johnny Five-Ace realized that if City 5 was destroyed, it could ruin the global economy and allow for Capital to conquer the other two superpowers.","CityFive")

var TheOrder = new Event(0,20,-20, "THE ORDER - The major world powers established a global religion called The Order, which promoted social stability at all costs. Every human is a 'squeaky gear' that must serve the prescribed instructions of the Great Machine, lest the machine breaks down and an Error Message is Thrown. Deviant scientists were burned by steampunk clerics wishing to protect the Great Machine.");

//In the original version of Zybourne Clock, Dr. Zybourne developed his time-travelling Clock after the World War. But I do not want to implement events being dependent on each other until AFTER the MVP.
var ClockInvented = new Event(-20,0,20, "CLOCK INVENTED - Dr. Zybourne invented a time-traveling Clock that would modify the global climate. He hoped that changing the global climate will boost human evolution, making them more technologically advanced. This technological advancement also led to an improvement of Capital's armed forces, allowing for Johnny Five-Ace to conduct research into terrifying weapons of mass destruction.");

var Zepplins = new Event(-20,20,0, "ZEPPLINS - Despite the various techniques used by the superpowers to keep order, periodic industrial strikes and workers' uprisings still took place. The military-industrial complex of Capital came up with a solution: arming zeppelins with bombs and threatening to blow up any rebellious city.  Johnny Five-Ace made a lot of money selling these highly-valued weapons to the other superpowers, which he used to improve Capital's own military might.");

//These events are in the Player's hand at the start of Zybourne Clock Redux. This is just a MVP, so I only have two events here for now.
var ChildSpybots = new Event(20,-20,0, "CHILD SPYBOTS - 'Ministry Incorporated', a weapons producer in Rasenni, developed unique spybots that can sneak into top-secret compounds by posing as little girls. These spybots are remarkbly effective, allowing for Rasenni to secretly spy on Capital's military forces and prepare for Johnny Five-Ace's plans. However, some of the child spybots rebelled against their creators after complaining about 'unfair wages'. These spybots formented labor uprisings throughout the world.")

var Vaundermause = new Event(20,0,-20, "VAUNDERMAUSE - Vaundermause (real name: Thomas Redding) was an infamous bounty hunter who hated technology after someone threw a steam-powered brick into his stained-glass windows. Vaundermause was secretly hired by Rasenni to launch sabotoge operations against Capital's military-industrial complex. Vaundermause successfully burned down numerous R&D labs, before Johnny Five-Ace defeated Vaundermause in hand-to-hand combat.")

//This function is responsible for logging the 'Key Events' to the console, letting players judge their
//performance. These 'Key Events' are impacted by the metrics (and the metrics are impacted by the events the 
//players CAN control). This function does need some refactoring, as it seems way too huge, but its hugeness 
//is based on a simple design priniciple: if something is complex enough, you will not
//be able to predict its behavior. This will lead to "emergent gameplay", as players will find features that
//the programmer did not intend.

//If I was to continue working on this MVP, I would have to find some way to refactor this long Results
//function. However, I do not really expect me to change this function much, as there is not much to add in 
//there. It is complete as it is.
var Results = function () {
	var WorldWarTrigger = function() {
		if (CityFive === true) //Key Event text can change depending on if City 5 existed or not
		{
			 console.log("KEY EVENT - CITY 5 WAR: As the world superpowers continue to expand their energy needs, they began to dispute over how the coal would be divided at the strategic location of City 5. Both Bookworld and Rasenni got greedy and pressured Capital to surrender its rights to the coal at City 5. This proved unpopular with the masses, allowing for Johnny Five-Ace to launch a military coup and establish a dictatorship. He launched the 'CITY 5 WAR' by fieldtesting a 'permanent flamethrower' onto the disputed territory, incinerating City 5, killing millions of civilians, and damaging the economy of both Bookworld and Rasenni.");
		}
		else
		{
			console.log("KEY EVENT - COAL WARS: As the world superpowers continue to expand their energy needs, they began to fight with each other over strategic coal reserves. During these small-scale skrimishes, Johnny Five-Ace performed admirably, eventually rising in the ranks to be the Supreme General of Capital. He then established a dictatorship and mobilized Capital's forces to 'end' the Cold Wars by destroying the other superpowers. Bookworld and Rasenni quickly formed a cease-fire to combine their forces against the Capital threat.");
		}
		BlankLine();
		WorldWarEnd();
	};
	var WorldWarEnd = function () {
		if (Metrics.WorldWar < 40) 
		{
			console.log("Johnny Five-Ace quickly smashed the combined forces of Bookworld and Rasenni with the help of Anti-Grav Tanks, Telsa Cannons, and the coveted Johnny Gun. The Bookworld-Rasenni Coalition collapsed and Capital took over the entire world. Johnny Five-Ace quickly consolidated his rule, creating a massive personality cult designed to give legitimacy to his dictatorship and grooming his best friend, Scholtz, to succeed him.");
			BlankLine();
			JohnnyReign();
		}
		else if (Metrics.WorldWar > 60)
		{
			console.log("The military might of Capital did not even begin to match the combined strength of the Bookworld-Rasenni Coalition, and Johnny Five-Ace went underground to avoid being captured and executed by the victorous Coalition forces. The Republic of Capital was once again re-established, and peace once again ensured.");
			BlankLine();
			CapitalOccupied();
		}
		else
		{
			console.log("Though Johnny Five-Ace made remarkable progress in fighting against the Bookworld-Rasenni Coalition, his forces was soon bogged down fighting against guerrillas. Neither side were willing to surrender, and so a bloody stalemate ensured. It appeared that humanity was headed towards extiniction, if the conflict does not stop.");
			BlankLine();
			OngoingWar();
		}
	};

	var JohnnyReign = function () {
		if (Metrics.SocialStability > 60)
		{
			console.log("KEY EVENT - THE MADNESS: Johnny Five-Ace's regime became increasingly erratic and brutal, as he became addicted to absolute power. Hundreds of thousands of people were executed for violating strange decrees like 'no card-counting in poker', or sent to prison camps where they were forced to create cigars that only Johnny Five-Ace could use. Even Scholtz would end up living in these prison camps, for the crime of not taking enough photographs of Johnny.");
			BlankLine();
			console.log("But, of course, such a brutal dictatorship would never last. After Johnny Five-Ace's natural death, his loyalist cronies soon fought among themselves for the spoils. While still claiming adherence to Johnny's whims, they established their own private fiefdoms. Shifting alliances and mutual hositility became the buzzwords of the day.");
		}
		else if (Metrics.SocialStability < 40 )
		{
			console.log("KEY EVENT - SYNDICALIST REVOLUTION: After Johnny Five-Ace's natural death, Scholtz attempted to maintain control over his empire. But Scholtz lacked the same talent and charisma that Five-Ace had, and new social changes were taking place in Capital that were spiraling out of control. Workers' unrest began to spread unchecked, and soon a worldwide revolution took place. Scholtz was captured and executed, and the new regime began tearing down all elements of the 'old order'. However, even the new regime could not prevent chaos and anarchy from spreading.");
			BlankLine();
			console.log("The Syndicalist rebels soon began to fight among themselves on the basis of greed and ideology, thereby destroying what little unity that remained of Johnny's empire. These rebels established their own private fiefdoms. Shifting alliances and mutual hositility became the buzzwords of the day.");
		}
		else
		{
			console.log("KEY EVENT - THE JOHNNY-CLONES: After Johnny Five-Ace's natural death, Scholtz attempted to maintain control over his empire. He relied on a new cadre of supersoliders (cloned from the DNA of Johnny Five-Ace) to keep the masses in check. This worked, for a time. But eventually, these supersoliders demanded more power from Scholtz. As Scholtz feared being overthrown by the Johnny-Clones, Scholtz gave into those demands.");
			BlankLine();
			console.log("After Scholtz's natural death, the Johnny-Clones soon began to fight among themselves on the basis of greed and ideology, thereby destroying the unity of Johnny's empire. These clones established their own private fiefdoms. Shifting alliances and mutual hositility became the buzzwords of the day.");
		}
		BlankLine();
		Savage_TechnologicalProgress();
	};

	var CapitalOccupied = function() {
		if (Metrics.SocialStability > 60)
		{
			console.log("KEY EVENT - ERA OF PEACE: The restored Republic of Capital proved to be docile to the wishes of the Bookworld-Rasenni Coalition. The Coalition was able to make long-term plans without fear that they can be disrupted by popular uprisings or be forced to negotiate with the lower-classes. In fact, as society prospered, the masses grew to tolerate the elites, who at least are able to keep the trains on time. This allowed Bookworld and Rasenni to focus on the big issue of the day: how to deal with Peak Coal.");
			BlankLine();
			Civilized_TechnologicalProgress();
		}
		else if (Metrics.SocialStability < 40)
		{
			console.log("KEY EVENT - SECOND CAPITAL WAR: The restored Republic of Capital was very unpopular with the Capital masses, who saw the government as a puppet of the Bookworld-Rasenni Coalition and believed that they do not have to listen to the wishes of the upper classes but instead can do whatever they want and please. The popular Johnny Five-Ace came out of hiding to lead a revolution to overthrow the Republic. The Coalition and Capital was once again at war with each other. However Johnny Five-Ace was not interested in winning this war, but instead in destroying the Coalition and thereby securing his vengeance. Johnny developed potent bioweapons that would cause massive civilian casualities within the Coalition.");
			BlankLine();
			console.log("Even though the Coalition ultimately won the Second Capital War, it was a pyrrhic victory. Without any civilian labor force to to sustain economic growth, both Bookworld and Rasenni collapsed. Capital too collapsed under the onslaught of the Coalition. Without any central government to mantain order, the world quickly fell into chaos and anarchy. Powerful warlords soon established their own private fiefdoms. Shifting alliances and mutual hositility became the buzzwords of the day.");
			BlankLine();
			Savage_TechnologicalProgress();
		}
		else {
			console.log("KEY EVENT - CAPITAL PROTESTS: The restored Republic of Capital was very unpopular with the Capital masses, who saw the government as a puppet of the Bookworld-Rasenni Coalition and believed that they do not have to listen to the wishes of the upper classes but instead can do whatever they want and please. The masses waited patiently for Johnny Five-Ace to come out of hiding, but he never did (rumors claimed that Johnny had left the planet to find new adventures). So the masses launched a series of non-violent protests on their own, demanding that the 'Republic' actually start taking their opinions into account. The protests were eventually quelled by a series of political compromises and dialogue between the protesters and the Coalition.");
			BlankLine();
			console.log("After the uprising, there was no more unrest in Capital. In fact, as society prospered, the masses grew to tolerate the elites, who at least are able to keep the trains on time. This allowed Bookworld and Rasenni to focus on the big issue of the day: how to deal with Peak Coal.");
			BlankLine();
			Civilized_TechnologicalProgress();
		}
	};

	var OngoingWar = function() {
		if (Metrics.SocialStability > 60)
		{
			console.log("KEY EVENT - THE TECHNOCRACY: The bloody stalemate and prepetual war had caused many scientists to lose faith in all three superpowers. Two such scientists, Dr. Zybourne and Dr. Malprop, went rogue and seized complete control of Bookworld's R&D program. Both Zybourne and Malprop argued that since the politicians have failed, it was now the responsiblity of scientists to create a 'new and better world'.");
			BlankLine();
			console.log("More scientists defected to the forces of Dr. Malprop, and he eventually got enough strength to annihilate all three superpowers and establish a unified Technocracy. The masses strongly supported the return of stability, allowing Dr. Malprop and his supporters to focus on the big issue of the day: how to deal with Peak Coal.");
			BlankLine();
			Civilized_TechnologicalProgress();
		}
		else if (Metrics.SocialStability < 40)
		{
			console.log("KEY EVENT - JOHNNY'S DISAPPERANCE: Johnny Five-Ace tried every trick in the book to destroy the prepetual war, but only saw failure. Though he can destroy the leadership of Bookworld-Rasenni Coalition easily, more people took their place. Johnny watched as even his most loyal soldiers engaged in brutal counter-insurgency tactics that only made the Bookworld-Rasenni Coalition more appealing to the masses. Johnny Five-Ace, disgusted at his own incompetence and the disloyalty of his soldiers, resigned from his post and went into hiding.");
			BlankLine();
			console.log("Without any central government to mantain order, the world quickly fell into chaos and anarchy. Powerful warlords soon established their own private fiefdoms. Shifting alliances and mutual hositility became the buzzwords of the day.");
			BlankLine();
			Savage_TechnologicalProgress();
		}
		else
		{
			console.log("KEY EVENT - THE TREATY OF OVERTURE: While Johnny Five-Ace could not suppress the insurgency entirely, he was able to severely weaken the Bookworld-Rasenni Coalition to the point that they could not pose a threat to his regime. After Johnny's natural death, Scholtz agreed to negotiate with the Bookworld-Rasenni Coalition to end the war. In return for laying down their arms, the Bookworld-Rasenni Coalition was given amnesty and local autonomy.");
			BlankLine();
			console.log("Though nobody really won the World War, peace has returned at last. The treaty allowed Scholtz and his loyalist cronies to focus on the big issue of the day: how to deal with Peak Coal.");
			BlankLine();
			Civilized_TechnologicalProgress();
		}
	};

	var Civilized_TechnologicalProgress = function() {	
		if (Metrics.TechnologicalProgress > 60)
		{
			console.log("KEY EVENT - THE EXDOUS. The world leadership decided that there was not enough coal on the planet to sustain humanity. Therefore, they heroically decided that the planet was obsolete and not worth living on. Humanity slowly began migrating away from our world over to other planets throughout the galaxy, draining the unlucky planet dry before moving onto the next victim. Civilization was spreading, and will keep on spreading, without end, without point...");
		}
		else if (Metrics.TechnologicalProgress < 40)
		{
			console.log("KEY EVENT - EXTINICTION. The global leadership decided that Peak Coal was impossible to stop, and so instead focused on keeping power at all costs. They focused on mass-murdering their enemies, without regard for petty concerns like survival. When there was no more enmies to slaughter, the leadership decided to murder each other in useless power struggles. Coal was exhausted, and without any possibility for technological innovation, society essentially collapsed. Humanity died, and its loss was not mourned by anyone.");
		}
		else
		{
			console.log("KEY EVENT - RATIONING. The global leadership decided that the only way to stop Peak Coal from destroying society was to limit the amount of Coal that any person can ever use. They implemented a strict rationing system, only giving the highest rations to the elites. Those who violate the rationing system would be executed on the spot, with their bodies force-converted into coal. It is a rather despotic and austere era, but civilization still prospered. That's a good thing.");
		}

	};

	var Savage_TechnologicalProgress = function () {
		if (Metrics.TechnologicalProgress > 60)
		{
			console.log("KEY EVENT - THE ERA OF TECHNO-BARBARISM. The various fiefdoms of the old order soon began to consolidate themselves into 'tribes' who fought endless 'blood feuds' against one another. These 'tribes' began to realize however that there was not enough Coal on the planet to sustain their constant conflicts. Rather than seeing this as an opportunity to end their savage ways, the tribes began migrating away from our world over to other planets throughout the galaxy. The chance that mankind would ever again reach a semi-civilized status is minimal.");
		}
		else if (Metrics.TechnologicalProgress < 40)
		{
			console.log("KEY EVENT - EXTINICTION. The various fiefdoms of the old order focused on mass-murdering their enemies, without regard for petty concerns like survival. When the fiefdoms did end up winning, they only decided to murder each other in useless power struggles. Coal was exhausted, and without any possibility for technological innovation, the fiefdoms essentially collapsed. Humanity died, and its loss was not mourned by anyone.");
		}
		else
		{
			console.log("KEY EVENT - RITUALIZED BLOOD FEUDS. The various fiefdoms of the old order soon began to consolidate themselves into 'tribes' who fought endless 'blood feuds' against one another. However, the savages were at semi-intelligent enough to realize that their wars were wasteful and costing valuable Coal. The tribes agreed to a ritualized form of combat that would resolve disputes efficiently. Still, the chance that mankind would ever again reach a semi-civilized status is minimal.");
		}
	};
	WorldWarTrigger();
};

var Timeline = []

var PlayerHand = [ChildSpybots, Vaundermause]

var SetOriginalTimeline = function() {
	Timeline[0] = CityFiveBuilt;
	Timeline[1] = TheOrder;
	Timeline[2] = Zepplins;
	Timeline[3] = ClockInvented;
}

//This function is called everytime a new Timeline is implemented, and show all the
//events and the final results of those events. GameRating.timelines keep track of how
//many 'timelines' had existed.
var RunTimeline = function() {
	ResetMetrics()
	GameRating.Timelines += 1
	Timeline[0].call()
	Timeline[1].call()
	Timeline[2].call()
	Timeline[3].call()
	Results();
	DecideScore();
}

//An EmptyEvent exist if you delete an event from the Timeline. It is created
//so that I don't have to worry about calling "undefined" events.
var EmptyEvent = function () {
}

console.log(Timeline.length)

//IndexOf will return a -1 if the event does not exist in the Timeline,
//otherwise, it will return the Index where the Timeline is located, so we
//can then delete it. Array.splice only works on "modern" browsers and will
//break on IE7-8. There is code on StackOveflow that could be used to implement
//'IndexOf' in non-modern browsers, as but this game isn't even playable on
//any web browser (modern or not), the functionality isn't needed.

//I have placed an error message if you try to delete more than one Event without adding an Event into the timeline. If players were allowed to delete more than one Event, it will likely cause an error as an 'undefined' event is called, and trying to fix that bug would be much more pain than it's worth. 
function DeleteEvent(history_event) {
	if (Timeline[3] === EmptyEvent)
	{
		console.log("You cannot delete any more events from the Timeline, for fear of causing permanent damage to the timeline.")
	}
	else if (Timeline.indexOf(history_event) != -1)
	{
		PlayerHand.push(history_event)
		Timeline.splice(Timeline.indexOf(history_event), 1);
		Timeline[3] = EmptyEvent;
		console.log("The event has been deleted from the Timeline and added to your hand.");
	}
	else
	{
		console.log("That event does not exist! You can't delete events that does not exist!");
	}
};

function AddEvent(history_event) {
	if (PlayerHand.indexOf(history_event) === -1)
	{
		console.log("This event is not in your Hand! You cannot add events that are already in the Timeline.")
	} 
	else if (Timeline[3] === EmptyEvent)
	{
		Timeline[3] = history_event;
		PlayerHand.splice(PlayerHand.indexOf(history_event), 1);
		console.log("The event has been added into the Timeline and deleted from your hand.")
	}
	else
	{
		console.log("The timeline is full! A cliff can only hold four balls, and a timeline can only hold four events! Delete an event if you want to continue!")
	}
};

function DecideScore() {
	function WorldWarPoints() {
		if (Metrics.WorldWar > 60) {
			GameRating.Score += 2;
		}
		else if (Metrics.WorldWar > 40) {
			GameRating.Score += 1;
		}
		else
		{
			GameRating.Score -= 1;
		}
	}
	function SocialStabilityPoints() {
		if (Metrics.SocialStability > 60)
		{
			GameRating.Score += 2;
		}
		else if (Metrics.SocialStability > 40)
		{
			GameRating.Score += 1;
		}
		else
		{
			GameRating.Score -= 1;
		}		
	}
	function TechnologicalProgressPoints () {
		if (Metrics.TechnologicalProgress > 60)
		{
			GameRating.Score += 2;
		}
		else if (Metrics.TechnologicalProgress > 40)
		{
			GameRating.Score += 1;
		}
		else
		{
			GameRating.Score -= 1;
		}
	}
	WorldWarPoints();
	SocialStabilityPoints();
	TechnologicalProgressPoints();
}

function DestroyClock() {
	console.log("The Clock has been destroyed. The timeline is now permanent. History is now fixed. I hope you're happy.")
	BlankLine();
	console.log("You have created "+GameRating.Timelines+" timelines.")
	console.log("Your score is "+GameRating.Score+" points.")
	BlankLine();
	if (GameRating.Score >= 6)
	{
		console.log("You are an excellent time traveller!")
	}
	else if (GameRating.Score >= 3)
	{
		console.log("You are an okay time traveller!")
	}
	else
	{
		console.log("Go back to Time Travel School!")
	}
};

//DRIVER TESTS

//This sets up the game and runs the original timeline.
SetOriginalTimeline();
RunTimeline();

//Console.log("Metrics") is meant as a debugging tool to help me know what are the current status of the metrics; players are not "supposed" to see them. However, this is the MVP stage, and it may be necessary in future versions to expose these Metrics to help increase player enjoyment and encourage mini-maxing. 
console.log(Metrics);

//Check to see if I can delete an event. Then run the timeline.
DeleteEvent(TheOrder);
RunTimeline();

//Try to delete another event (should fail).
DeleteEvent(TheOrder);

//Add a new event, and then run the timeline.
AddEvent(ChildSpybots);
RunTimeline();

//Try to add more events (should fail!)
AddEvent(ChildSpybots);

//Try to delete an Event that is not in the system (should fail)
DeleteEvent(Vaundermause);

//These commands are me actually playing the game and seeing if I can get a decent result. Not doing so well though on that front.
DeleteEvent(Zepplins);
RunTimeline();

AddEvent(Vaundermause);
RunTimeline();

DeleteEvent(Vaundermause);
RunTimeline();

AddEvent(TheOrder);
RunTimeline();

DeleteEvent(CityFiveBuilt);
RunTimeline();
console.log(Metrics);
//This was the best outcome I got in this game: The World War ends in a stalemate, the Treaty of Overture
//was signed, and rationing is implemented. All metrics were at 50, so it was
//as if there were no events at all in the timeline! A pretty boring result, but I'll take it.

//PlayerHand does not show the name of the functions in it, making it utterly useless as a Hand! I will
//not really add in functionality to see the name of those functions though. First, I don't know
//if it is even possible. Second, it's not necessary at this time, as every function that is not in the
//Timeline is in your Hand.
PlayerHand;


//Clock is destroyed and the game tells you your score and how many timelines you have "created" while
//playing this game. This mechanic does rely on the Honor System though, and theoretically, a player
//can keep on playing even though the clock was 'destroyed'.
DestroyClock();

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