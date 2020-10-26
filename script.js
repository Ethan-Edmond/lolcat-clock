var time = new Date().getHours();
var messageText;
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;
var oneSecond = 1000;
var wakeUpSelector = document.getElementById("wakeUpTimeSelector");
var lunchSelector = document.getElementById("lunchTimeSelector");
var napSelector = document.getElementById("napTimeSelector");
var timeEventJS = document.getElementById("timeEvent");
var lolcatJS = document.getElementById("lolcat");
var partyTimeButton = document.getElementById("partyTimeButton");

var imageNmessageUpdate = function () {
    if (time == partyTime){
        messageText = "IZ PARTEE TIME!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    } else if (time == napTime) {
        messageText = "IZ NAP TIME…";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    } else if (time == lunchTime) {
        messageText = "IZ NOM NOM NOM TIME!!";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    } else if (time == wakeupTime) {
        messageText = "IZ TIME TO GETTUP.";
	      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    } else if (time < noon) {
        messageText = "Good morning!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    } else if (time > evening) {
        messageText = "Good Evening!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    } else {
        messageText = "Good afternoon!";
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    }
    timeEventJS.innerText = messageText;
    lolcatJS.src = image;
};

var showCurrentTime = function() {
	  var clock = document.getElementById("clock");
	  var clockTime = new Date();
	  var hours = clockTime.getHours();
	  var meridian = " AM";
	  if (hours >= 12) {
		    meridian = " PM";
	  }
	  if (hours > 12) {
		    hours = hours - 12;
	  }
	  var minutes = clockTime.getMinutes();
	  if (minutes < 10) {
		    minutes = "0" + minutes;
	  }
	  minutes = ":" + minutes;
	  var seconds = clockTime.getSeconds();
	  if (seconds < 10) {
		    seconds = "0" + seconds;
	  }
	  seconds = ":" + seconds;
	  clock.innerText = hours + minutes + seconds + meridian + "!";
};

var partyClick = function () {
	  isPartyTime = !isPartyTime;
	  if (isPartyTime) {
		    time = partyTime;
		    partyTimeButton.innerText = "PARTY TIME!";
		    partyTimeButton.style.backgroundColor = "#0a8dab";
	  } else {
		    time = new Date().getHours();
		    partyTimeButton.innerText = "Party Over";
		    partyTimeButton.style.backgroundColor = "#222";
	  }
    imageNmessageUpdate();
};

var wakeUpEvent = function () {
	  wakeupTime = wakeUpSelector.value;
    imageNmessageUpdate();
};

var lunchEvent = function () {
    lunchTime = lunchSelector.value;
    imageNmessageUpdate();
};

var napEvent = function () {
    napTime = napSelector.value;
    imageNmessageUpdate();
};

imageNmessageUpdate();

wakeUpSelector.addEventListener("change", wakeUpEvent);
lunchSelector.addEventListener("change", lunchEvent);
napSelector.addEventListener("change", napEvent);
partyTimeButton.addEventListener("click", partyClick);
setInterval(showCurrentTime, oneSecond);
