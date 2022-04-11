var x = 0


var final = x
function start() {
  var seconds = Number(document.getElementById("number").value)
  var timeleft = seconds;
  document.getElementById("count").addEventListener("click", count)
    var downloadTimer = setInterval(function(){
      if (seconds > 200) {
        document.getElementById("finalnumber").innerHTML = "The number is very high";
      }
      else {
      if(timeleft <= 0){
        document.getElementById("finalnumber").innerHTML = "Your score: ";
        clearInterval(downloadTimer);
        document.getElementById("countdowntimer").innerHTML = "Finished";
        document.getElementById("finalnumber").innerHTML = "Your score:" + final;
        document.getElementById("media").innerHTML = "Media: " +  Math.round((final / seconds) * 100) / 100;
        
      } else {
        document.getElementById("countdowntimer").innerHTML = timeleft + " seconds";
      }
      timeleft -= 1;
    }}, 1000);
  }


function count() {
    x++
    document.getElementById("count").innerHTML = "Counter: " + x
    console.log("uau")
    final = x
    
    
}