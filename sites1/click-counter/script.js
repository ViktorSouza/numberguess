var x = 0
document.getElementById("start").addEventListener("click", start)



var final = x;
function start() {
  var seconds = Number(document.getElementById("number").value - 1);
  var timeleft = seconds;
  x = 0;
  document.getElementById("count").addEventListener("click", count)
  document.getElementById("start").style = "    background-color: rgb(31, 197, 209);color: rgb(0, 0, 0);box-shadow: 0px 0px 10px rgba(31, 197, 209, 0.534);transform: scale(1.1);"
  document.getElementById("count1").innerText = "Counter: " + 0
  document.getElementById("media").innerHTML = "Media: "
  document.getElementById("finalnumber").innerHTML = "Your score: " 
  document.getElementById("start").removeEventListener("click", start)
    var downloadTimer = setInterval(function(){
      if (seconds > 200) {
        document.getElementById("finalnumber").innerHTML = "The number is very high";
      }
      else {
      if(timeleft <= 0){
        document.getElementById("finalnumber").innerHTML = "Your score: ";
        clearInterval(downloadTimer);
        document.getElementById("start").style += "background-color: #202022; color: auto; box-shadow: auto; transform: auto"
        document.getElementById("countdowntimer").innerHTML = "Finished";
        document.getElementById("start").addEventListener("click", start)
        document.getElementById("count").removeEventListener("click", count)
        document.getElementById("finalnumber").innerHTML = "Your score: " + final;
        document.getElementById("media").innerHTML = "Average: " +  Math.round((final / (seconds + 1)) * 100) / 100;
        
      

        mediaClick.push((Math.round((final / (seconds + 1)) * 100) / 100));
        createMedia();
      console.log(mediaCount)
        localStorage.setItem('Media', JSON.stringify(mediaClick));
        localStorage.setItem('Contagem', JSON.stringify(mediaCount));
        console.log("Media adicionada");
        console.log(mediaClick);
        console.log(mediaCount);
        myChart.update();
        final = 0
      } else {
        document.getElementById("countdowntimer").innerHTML = timeleft + " seconds";
      }
      timeleft -= 1;
    }}, 1000);
  }


function count() {
    x++
    document.getElementById("count1").innerText = "Counter: " + x;
    final = x
    
    
}