 var buttonColors = ["red","blue", "green", "yellow","purle","white","pink","orange"];
var gamePattern = [];
var userClickedPattern = [];
var start=true;
var level=-1;
var score=0;



$(document).keypress(function()                                                 //when game starts........
{
if(start===true)
{
  nextSequence();
  start=false;
}
}
);


function nextSequence()                                                          //when computer starts the game ......
{

  userClickedPattern=[];
  level++;

  if(level<5)
  {
  $("div.row3").hide();
  $("div.row4").hide();
  var rnum = Math.floor(Math.random() * 4);
  var randomChooseColor = buttonColors[rnum];
  gamePattern.push(randomChooseColor);
  $("h1#level-title").text("Level "+level);
  $("#" + randomChooseColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChooseColor)
    $("h1#difficulty").text("Difficulty-Level   Easy");
  }
  else if(level>=5)
    { $("div.row3").show();
      $("div.row4").hide();
      var rnum = Math.floor(Math.random() * 6);
      var randomChooseColor = buttonColors[rnum];
      gamePattern.push(randomChooseColor);
      $("h1#level-title").text("Level "+level);
      $("#" + randomChooseColor).fadeOut(75).fadeIn(75).fadeOut(75).fadeIn(75);
      playSound(randomChooseColor)
      $("h1#difficulty").text("Difficulty-Level   Medium");

  }
  else
    {
      var rnum = Math.floor(Math.random() * 8);
         var randomChooseColor = buttonColors[rnum];
         gamePattern.push(randomChooseColor);
         $("h1#level-title").text("Level "+level);
         $("#" + randomChooseColor).fadeOut(50).fadeIn(50).fadeOut(50).fadeIn(50);
         playSound(randomChooseColor)
      $("h1#difficulty").text("Difficulty-Level   Hard");
    }
}


$(".btn").click(function()                                                       //when button gets clicked by user.....
{
  var userChosenColor = $(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length-1);
}
);


function checkAnswer(currentLevel)                                                //checks answer......
{
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
    if(userClickedPattern.length===gamePattern.length)
   {
     if(level<5)
     {
         setTimeout(function(){nextSequence();},1000);
     }
     if(level>=5)
     {
         setTimeout(function(){nextSequence();},500);
     }
    score=score+1;
    $("h1#score").text("Score "+score);
   }
  }
else                                                                             //if game is over.....
 {
  playSound("wrong");
  $("body").addClass("game-over");
   $("h1#level-title").text("Game over");
   $("h1#gammeover").text("Refresh to start new game");
   $("h1#difficulty").text("");
     setTimeout(function(){$("body").removeClass("game-over");},200);

  }
}



function playSound(name)                                                         //adding sounds.....
{
  var audio = new Audio(name + ".mp3");
  audio.play();
}


function animatePress(currentColor)                                               //adding animations to the selected button......
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){$("#"+currentColor).removeClass("pressed")},100);
}
