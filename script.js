const button = document.getElementById("button"); 
const boxes = document.getElementsByClassName("boxx");
const buttonPressed = () => {
  for(const boxx of boxes) {
    boxx.classList.toggle("toggle");
  }
}
button.addEventListener("click", buttonPressed);



var maDiv = document.getElementById("margin");
var BTN = document.getElementById("BTNN1");
function showTable() {
if(maDiv.style.display === "block"){
    maDiv.style.display = "none";
}
else{
    maDiv.style.display = "block";
    
}}


