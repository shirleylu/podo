var pomo = "<input type='text' placeholder='watch covert affairs' id='goal' value='watch covert affairs'><br><button id='go' onclick='pomogo()'>pomoGO</button>";
//
//var currPomo = "<h2>Current Pomogranate</h2><div id='currGoal'></div><div id='currTimer'></div><div id='ratePomo'></div><button onclick='newPomo()' id='newpom' hidden>New Pomogranate</button>";
//
$( document ).ready(function() {
  $('#pomo').html(pomo);
});

function pomogo () {
  var pomogoal = $('#goal').val();
  $('#goal').remove();
  $('#pomo').html("<div id='pomogoal'>"+pomogoal+"</div><div id='pomoct'>25:00</div>");
  pomocount();
}

function pomono () {
  var pomodone = "<div id='pomodone'><p>Finish your pomogranate?</p><div id='yn'><div class='fin' id='yes' onclick='pomorate()'>YES</div><div class='fin' id='no' onclick='pomoagain()'>NO</div></div><div id='repomo'></div></div>";
  $('#pomo').append(pomodone);
}

function pomorate () {
  var ratepomo = "<div id='ratepomo'><p>How was your pomogranate?</p><span id='seed1' onClick='pomonom(1)'><img class='seed' src='media/seed0.png'/></span><span id='seed2' onClick='pomonom(2)'><img class='seed' src='media/seed0.png'/></span><span id='seed3' onClick='pomonom(3)'><img class='seed' src='media/seed0.png'/></span><span id='seed4' onClick='pomonom(4)'><img class='seed' src='media/seed0.png'/></span><span id='seed5' onClick='pomonom(5)'><img class='seed' src='media/seed0.png'/></span><span id='seeded' hidden>0</span></div>";
  $('#repomo').html(ratepomo);
  var pomonew = "<button id='pomonew' onclick='pomonew(true)'>Another Pomogranate</button>";
  $('#repomo').append(pomonew);
}

function pomoagain () {
  var pomonew = "<button id='pomonew' onclick='pomonew(false)'>Another Pomogranate</button>";
  $('#repomo').html(pomonew);
}

function pomonew (tf) {
  compomo(tf);
  $('#pomo').html(pomo);
}

function pomonom (which) {
  $('#seeded').html(which);
  for (var i =1; i<=5; i++) {
    if(i<=which) {
      var tag="#seed"+i;
      $(tag).html("<img class='seed' src='media/seed"+i+".png' />");
    } else{
      var tag="#seed"+i;
      $(tag).html("<img class='seed' src='media/seed0.png' />");
    }
  }
};  

function compomo (yn) {
  var sucs = ["<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed3.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed3.png'/><img class='seed' src='media/seed4.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed3.png'/><img class='seed' src='media/seed4.png'/><img class='seed' src='media/seed5.png'/>","<img class='seed' src='media/badseed.png'/><img class='seed' src='media/badseed.png'/><img class='seed' src='media/badseed.png'/><img class='seed' src='media/badseed.png'/><img class='seed' src='media/badseed.png'/>"];
  var goal = $('#pomogoal').html();
  if (yn) {
    var poms = $('#seeded').html();
    $('#pomos').append("<div class='pomo'>"+sucs[poms-1]+" "+goal+" <span class='date'>("+new Date()+")</span>"+"</div>");
  } else {
    $('#pomos').append("<div class='pomo'>"+sucs[5]+" "+goal+" <span class='date'>("+new Date()+")</span>"+"</div>");
  }
}

function pomocount () {
  var time = 1499000;
  var timeLeft = time;
  var timer = setInterval(function() {
    if (timeLeft == 0){
      clearInterval(timer);
      pomono();
    }
    var secs = timeLeft / 1000;
    var sec = "0"+(secs % 60);
    var min = "0"+(Math.floor(secs / 60));
    $('#pomoct').html(min.slice(-2)+":"+sec.slice(-2));
    timeLeft -= 1000;
  },1000);
}

//function addCompPomo(goal,success) {
//  var sucs = ["<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed3.png'/><img class='seed' src='media/seed0.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed3.png'/><img class='seed' src='media/seed4.png'/><img class='seed' src='media/seed0.png'/>","<img class='seed' src='media/seed1.png'/><img class='seed' src='media/seed2.png'/><img class='seed' src='media/seed3.png'/><img class='seed' src='media/seed4.png'/><img class='seed' src='media/seed5.png'/>"];
//  $('#pomos').append("<div class='pomo'>"+goal+sucs[success-1]+"</div>");
//}