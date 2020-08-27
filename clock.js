
var Player1Time = new Date();
var Player2Time = new Date();

// Set up a callback function for every 1000ms
var TimerVar = setInterval(TimerCallback, 1000);

Reset();

// To indicate who should be timed.
var ActivePlayer = 0;

function TimerCallback()
{
  if(ActivePlayer == 1)
  {
    Player1Time.setSeconds(Player1Time.getSeconds() - 1);
    if(Player1Time.getSeconds() == 0)
    {
      alert("Player 1 is out of time.");
      Reset();
    }
  }
  else if(ActivePlayer == 2)
  {
    Player2Time.setSeconds(Player2Time.getSeconds() - 1);
    if(Player2Time.getSeconds() == 0)
    {
      alert("Player 2 is out of time.");
      Reset();
    }
  }

  document.getElementById("Player1").innerHTML = Player1Time.toLocaleTimeString();
  document.getElementById("Player2").innerHTML = Player2Time.toLocaleTimeString();

}

function Reset()
{
  // Disable counting
  ActivePlayer = 0;

  // Reset colours.
  document.getElementById("Player1").style.backgroundColor = '#800';
  document.getElementById("Player2").style.backgroundColor = '#800';

  // Initialise times
  Player1Time.setTime(0);
  Player1Time.setHours(0);
  Player1Time.setMinutes(0);
  Player1Time.setSeconds(10);

  Player2Time.setTime(0);
  Player2Time.setHours(0);
  Player2Time.setMinutes(0);
  Player2Time.setSeconds(10);
}

function LeftPress()
{
  console.log("Player1!");
  ActivePlayer = 2;
  document.getElementById("Player1").style.backgroundColor = '#800';
  document.getElementById("Player2").style.backgroundColor = '#080';
}

function RightPress()
{
  console.log("Player2!");
  ActivePlayer = 1;
  document.getElementById("Player1").style.backgroundColor = '#080';
  document.getElementById("Player2").style.backgroundColor = '#800';
}
