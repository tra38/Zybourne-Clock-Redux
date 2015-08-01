var SetOriginalTimeline = function() {
  Timeline[0] = CityFiveBuilt;
  Timeline[1] = TheOrder;
  Timeline[2] = Zepplins;
  Timeline[3] = ClockInvented;
}

var purgeTimeline = function() {
  $("#stats").html("")
  $("#timeline").html("")
  $("#results").html("")
}


$(document).ready(function() {
  SetOriginalTimeline()
  RunTimeline();
  console.log(Timeline.length)

  +
  +//Check to see if I can delete an event. Then run the timeline.
  +DeleteEvent(TheOrder);
  +RunTimeline();
  +
  +//Try to delete another event (should fail).
  +DeleteEvent(TheOrder);
  +
  +//Add a new event, and then run the timeline.
  +AddEvent(ChildSpybots);
  +RunTimeline();
  +
  +//Try to add more events (should fail!)
  +AddEvent(ChildSpybots);
  +
  +//Try to delete an Event that is not in the system (should fail)
  +DeleteEvent(Vaundermause);
  +
  +//These commands are me actually playing the game and seeing if I can get a decent result. Not doing so well though on that front.
  +DeleteEvent(Zepplins);
  +RunTimeline();
  +
  +AddEvent(Vaundermause);
  +RunTimeline();
  +
  +DeleteEvent(Vaundermause);
  +RunTimeline();
  +
  +AddEvent(TheOrder);
  +RunTimeline();
  +
  +DeleteEvent(CityFiveBuilt);
  +RunTimeline();
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
});
