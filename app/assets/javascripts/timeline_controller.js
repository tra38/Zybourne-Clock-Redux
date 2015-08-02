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
    alert("You cannot delete any more events from the Timeline, for fear of causing permanent damage to the timeline.")
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
    alert("This event is not in your Hand! You cannot add events that are already in the Timeline.")
  }
  else if (Timeline[3] === EmptyEvent)
  {
    Timeline[3] = history_event;
    PlayerHand.splice(PlayerHand.indexOf(history_event), 1);
    console.log("The event has been added into the Timeline and deleted from your hand.")
  }
  else
  {
    alert("The timeline is full! A cliff can only hold four balls, and a timeline can only hold four events! Delete an event if you want to continue!")
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
