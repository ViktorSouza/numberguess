var interval;
var startTime;
var elapsedTime;
var chance;
var spanTens = document.getElementById("tens");
var CronoInterval;
var buttonStop = document.getElementById("color");
var timeOutStart;
var spanBest = document.getElementById("best");
var spanWorst = document.getElementById("worst");
var spanMedia = document.getElementById("media");

var dateNow;

//function-------------
Array.max = function (array) {
  return Math.max.apply(Math, array);
};

Array.min = function (array) {
  return Math.min.apply(Math, array);
};

Array.average = function (array) {
  var total = 0;
  var count = 0;

  array.forEach(function (item, _index) {
    total += item;
    count++;
  });
  return total / count;
};

var best = Array.min(mediaClick);
var worst = Array.max(mediaClick);
var media = Math.floor(Array.average(mediaClick));
console.log("Best ", best, worst, media);

function updateInfos() {
  best = Array.min(mediaClick);
  worst = Array.max(mediaClick);
  media = Math.floor(Array.average(mediaClick));
  console.log("--------Update", "Best ", best, worst, media);
}

//function---------------
function start1() {
  console.log('Start')
  dateNow = Date.now();
  document.getElementById('tens').innerText = "000";
  document.getElementById('ms').innerText = "ms";
    document.getElementById("color").style = "background: red;";
    document.getElementById("colorsecond").style = "background: red;";
    document.getElementById("startbutton").removeEventListener("click", start1);
    document.getElementById("stopbutton").addEventListener("click", stop);
    buttonStop.removeEventListener("click", start1);
  buttonStop.addEventListener("click", buttonClick);
  buttonStop.classList.remove("shake")
  interval = setInterval(chanceRandom, 100);
}

function stop() {
  clearTimeout(timeOutStart);
  clearInterval(CronoInterval);
  clearInterval(interval);
  document.getElementById("startbutton").addEventListener("click", start1);
  buttonStop.removeEventListener("click", buttonClick);
  document.getElementById("stopbutton").removeEventListener("click", start1);
  document.getElementById("color").style = "background: auto;";
  document.getElementById("colorsecond").style = "background: auto;";
  document.getElementById("startbutton").value = "RESTART";
  document.getElementById("tens").innerHTML = "000";
  document.getElementById("ms").innerHTML = "ms";
  console.log("stop");
}
//function-------------
function chanceRandom() {

  chance = dateNow + random(1000, 5000);
  if (chance < Date.now()) {
    console.log(chance - dateNow);
    document.getElementById("color").style = "background: #00ff4c;";
    document.getElementById("colorsecond").style = "background: #00ff4c;";
    clearInterval(interval);
    startTime = Date.now();
    startCronometer();
  }

}
//function  ------------
function startCronometer() {
  CronoInterval = setInterval(startTimer, 0);
}
//function-------------
function buttonClick() {
  if (chance < Date.now()) {
    console.log("First Option", chance);
    document.getElementById("color").style = "background: red;";
    document.getElementById("colorsecond").style = "background: red;";
    mediaClick.push(elapsedTime);
    createMediaReaction();
    localStorage.setItem("MediaReaction", JSON.stringify(mediaClick));
    localStorage.setItem("CountReaction", JSON.stringify(mediaCount));
    updateInfos();
    spanBest.innerHTML = best;
    spanWorst.innerHTML = worst;
    spanMedia.innerHTML = media;
    myChart.update();
    clearInterval(CronoInterval);
    clearInterval(interval);
    buttonStop.removeEventListener("click", buttonClick);
    buttonStop.addEventListener("click", start1);
  } else {
    console.log("Second Option", chance);
    stop();
    clearInterval(CronoInterval);
    clearInterval(interval);
    document.getElementById('tens').innerText = "Click only on the green box!";
    document.getElementById('ms').innerText = "";
    document.getElementById("color").style = "background: red;";
    document.getElementById("colorsecond").style = "background: red;";
    buttonStop.classList.add("shake")
    buttonStop.removeEventListener("click", buttonClick);
    buttonStop.addEventListener("click", start1);
  }
}

function startTimer() {
  //This function is used to start the timer
  elapsedTime = Date.now() - startTime;
  spanTens.innerHTML = elapsedTime;
}



function random(min, max) {
  return Math.random() * (max - min) + min;
}


//function  ------------
function resetStorage() {
  //This function is used to reset the local storage
  localStorage.setItem("CountReaction", "[]");
  localStorage.setItem("MediaReaction", "[]");
  mediaClick = JSON.parse(localStorage.getItem("MediaReaction"));
  mediaCount = JSON.parse(localStorage.getItem("CountReaction"));
  spanBest.innerHTML = 0;
  spanWorst.innerHTML = 0;
  spanMedia.innerHTML = 0;
  myChart.update();
}
if (localStorage.getItem("MediaReaction") === "[]") {
  spanBest.innerHTML = 0;
  spanWorst.innerHTML = 0;
  spanMedia.innerHTML = 0;
} else {
  spanBest.innerHTML = best;
  spanWorst.innerHTML = worst;
  spanMedia.innerHTML = media;
}

document.getElementById("startbutton").addEventListener("click", function () {
  buttonStop.addEventListener("click", buttonClick);
  timeOutStart = setTimeout(start1, 1000);
  document.getElementById("color").style = "background: red;";
  document.getElementById("colorsecond").style = "background: red;";
  document.getElementById("startbutton").removeEventListener("click", start1);
  document.getElementById("stopbutton").addEventListener("click", stop);
});



