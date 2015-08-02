console.log("Timeline Stats required!")

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
  purgeTimeline();
}

var BlankLine = function()
{
  return "<br>";
};

//This function is called everytime a new Timeline is implemented, and show all the
//events and the final results of those events. GameRating.timelines keep track of how
//many 'timelines' had existed.
var RunTimeline = function() {
  ResetMetrics()
  GameRating.Timelines += 1
  console.log(PlayerHand.length)
  Timeline.forEach(displayEvent)
  Results();
  DecideScore();
  $("#stats").append( "<p>Score: "+GameRating.Score+"</p>")
  $("#stats").append( "<p>Timelines Created: "+GameRating.Timelines+"</p>")
  $("#hand").append("Your Events: ")
  PlayerHand.forEach(addEventToHand)
  setUpButtons();
}

var addEventToHand = function(event) {
  $("#hand").append("<button class='addEvent' id='"+event.Title+"'>"+event.Title+"</button> &nbsp;")
}

var displayEvent = function(event) {
  $("#timeline").append(event.call() )
}

var setUpButtons = function() {
  $(".deleteEvent").click(function(event) {
    event.preventDefault();
    DeleteEvent(window[$(this).attr("id")]);
    RunTimeline();
  });
  $(".addEvent").click(function(event) {
    event.preventDefault();
    AddEvent(window[$(this).attr("id")]);
    RunTimeline();
    console.log(PlayerHand);
  });
}
