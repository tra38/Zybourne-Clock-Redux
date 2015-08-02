var SetOriginalTimeline = function() {
  Timeline[0] = CityFiveBuilt;
  Timeline[1] = TheOrder;
  Timeline[2] = Zepplins;
  Timeline[3] = ClockInvented;
}

var purgeTimeline = function() {
  $("#hand").html("")
  $("#stats").html("")
  $("#timeline").html("")
  $("#results").html("")
}


$(document).ready(function() {
  SetOriginalTimeline()
  RunTimeline();
});
