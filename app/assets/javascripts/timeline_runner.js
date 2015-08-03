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
       $("#results").append(CITY_FIVE_WAR);
    }
    else
    {
      $("#results").append(COAL_WAR);
    }
    BlankLine();
    WorldWarEnd();
  };
  var WorldWarEnd = function () {
    if (Metrics.WorldWar < 40)
    {
      $("#results").append(JOHNNY_WINS);
      BlankLine();
      JohnnyReign();
    }
    else if (Metrics.WorldWar > 60)
    {
      $("#results").append(JOHNNY_LOSES);
      BlankLine();
      CapitalOccupied();
    }
    else
    {
      $("#results").append(STALEMATE);
      BlankLine();
      OngoingWar();
    }
  };

  var JohnnyReign = function () {
    if (Metrics.SocialStability > 60)
    {
      $("#results").append(THE_MADNESS_PART_ONE);
      BlankLine();
      $("#results").append(THE_MADNESS_PART_TWO);
    }
    else if (Metrics.SocialStability < 40 )
    {
      $("#results").append(SYNDICALIST_REVOLUTION_PART_ONE);
      BlankLine();
      $("#results").append(SYNDICALIST_REVOLUTION_PART_TWO);
    }
    else
    {
      $("#results").append(JOHNNY_CLONES_PART_ONE);
      BlankLine();
      $("#results").append(JOHNNY_CLONES_PART_TWO);
    }
    BlankLine();
    Savage_TechnologicalProgress();
  };

  var CapitalOccupied = function() {
    if (Metrics.SocialStability > 60)
    {
      $("#results").append(ERA_OF_PEACE);
      BlankLine();
      Civilized_TechnologicalProgress();
    }
    else if (Metrics.SocialStability < 40)
    {
      $("#results").append(SECOND_CAPITAL_WAR_PART_ONE);
      BlankLine();
      $("#results").append(SECOND_CAPITAL_WAR_PART_TWO);
      BlankLine();
      Savage_TechnologicalProgress();
    }
    else {
      $("#results").append(CAPITAL_PROTESTS_PART_ONE);
      BlankLine();
      $("#results").append(CAPITAL_PROTESTS_PART_TWO);
      BlankLine();
      Civilized_TechnologicalProgress();
    }
  };

  var OngoingWar = function() {
    if (Metrics.SocialStability > 60)
    {
      $("#results").append(TECHNOCRACY_PART_ONE);
      BlankLine();
      $("#results").append(TECHNOCRACY_PART_TWO);
      BlankLine();
      Civilized_TechnologicalProgress();
    }
    else if (Metrics.SocialStability < 40)
    {
      $("#results").append(JOHNNY_DISAPPERANCE_PART_ONE);
      BlankLine();
      $("#results").append(JOHNNY_DISAPPERANCE_PART_TWO);
      BlankLine();
      Savage_TechnologicalProgress();
    }
    else
    {
      $("#results").append(TREATY_OF_OVERTURE_PART_ONE);
      BlankLine();
      $("#results").append(TREATY_OF_OVERTURE_PART_TWO);
      BlankLine();
      Civilized_TechnologicalProgress();
    }
  };

  var Civilized_TechnologicalProgress = function() {
    if (Metrics.TechnologicalProgress > 60)
    {
      $("#results").append(EXDOUS);
    }
    else if (Metrics.TechnologicalProgress < 40)
    {
      $("#results").append(CIVILIZED_EXTINICTION);
    }
    else
    {
      $("#results").append(RATIONING);
    }

  };

  var Savage_TechnologicalProgress = function () {
    if (Metrics.TechnologicalProgress > 60)
    {
      $("#results").append(TECHNO_BARBARISM);
    }
    else if (Metrics.TechnologicalProgress < 40)
    {
      $("#results").append(SAVAGE_EXTINICTION);
    }
    else
    {
      $("#results").append(RITUALIZED_BLOOD_FEUDS);
    }
  };
  $("#results").append("<h5 class='center-align'>The Outcome</h5>")
  WorldWarTrigger();
};
