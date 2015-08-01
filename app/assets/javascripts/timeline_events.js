console.log("Timeline Events required!")

//All Events inherit from this Constructor Function. It stores all our inputs into Object values,
//so that we can later use those values when we 'call' them.
var Event = function Event(Title, WorldWar, SocialStability, TechnologicalProgress, Message, Event_Variable) {
  this.Title = Title;
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
    Metrics.WorldWar += this.WorldWar;
    Metrics.SocialStability += this.SocialStability;
    Metrics.TechnologicalProgress += this.TechnologicalProgress;
    if (this.Event_Variable == "CityFive")
    {
      CityFive = true;
    }
    return (this.Message + "<button id="+this.Title+">Delete</button>")
  }
};


//An EmptyEvent exist if you delete an event from the Timeline. It is created
//so that I don't have to worry about calling "undefined" events.
var EmptyEvent = function () {
}

//At the beginning of the game, the following four events are inserted into the Timeline and are triggered.
//new Event(WorldWar, SocialStability, TechnologicalProgress, Message, optional Event_Varaible)
var CityFiveBuilt = new Event("CityFiveBuilt",-20,0,20, CITY_FIVE_BUILT,"CityFive")

var TheOrder = new Event("TheOrder",0,20,-20, THE_ORDER);

//In the original version of Zybourne Clock, Dr. Zybourne developed his time-travelling Clock after the World War. But I do not want to implement events being dependent on each other until AFTER the MVP.
var ClockInvented = new Event("ClockInvented", -20,0,20, CLOCK_INVENTED);

var Zepplins = new Event("Zepplins",-20,20,0, ZEPPLINS);

//These events are in the Player's hand at the start of Zybourne Clock Redux. This is just a MVP, so I only have two events here for now.
var ChildSpybots = new Event("ChildSpybots",0,-20,0, CHILD_SPYBOTS)

var Vaundermause = new Event("Vaundermause",20,0,-20, VAUNDERMAUSE)

var Timeline = []

var PlayerHand = [ChildSpybots, Vaundermause]
