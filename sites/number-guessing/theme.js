
function background(){
    var inputcolor = document.getElementById("color").checked
    var h = 226
    var s = 9
    var l;
    
    console.log(l)
    if (!inputcolor){
        l = 100
        document.getElementById('box').style.color = `hsl(${h}, ${s}%, ${10}%)`
        console.log("tá entre eles")
        document.getElementById('box').style.background = `hsl(${h}, ${s}%, ${l}%)`
        document.getElementById('start1').style.color = `hsl(${h}, ${s}%, ${l}%)`
        document.getElementById('answer').style.color = `hsl(${h}, ${s}%, ${l}%)`
        document.getElementById('box').style.boxShadow = `0 0 10px hsl(${h}, ${s}%, ${l}%)`
    }
    else{
        document.getElementById('box').style.color = `hsl(${189}, ${72}%, ${48}%)`
        console.log("não está entre eles :(")
        document.getElementById('start1').style.color = `hsl(${h}, ${s}%, ${10}%)`
        document.getElementById('answer').style.color = `hsl(${h}, ${s}%, ${10}%)`
        document.getElementById('box').style.background = `hsl(${h}, ${s}%, ${10}%)`
        document.getElementById('box').style.boxShadow = `0 0 10px hsl(${h}, ${s}%, ${10}%)`
    }
}