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
// js
var count1 = 0;

function AddNumber1() {
  count1++;
  console.log("I'm clicked");
  console.log(count1);

  // Update the content of elements with class "ONE1"
  var element = document.querySelector(".ONE1");
    element.innerHTML = count1;

}
var count1 = 0;
var count2 = 0;
var count3 = 0;
var total=0;
function AddNumber1() {
  count1++;
  console.log("I'm clicked");
  console.log(count1);
  total=total+1900;
  console.log(total);

  // Update the content of elements with class "ONE1"
  var element = document.querySelector(".ONE1");
    element.innerHTML = count1;
    // Update the content of elements with class ".prrr"
    var element = document.querySelector(".prrr");
    element.innerHTML = "$ " + total;

}

function AddNumber2() {
  count2++;
  total=total+1900;
  console.log(total);
  console.log("I'm clicked");
  console.log(count2);


  // Update the content of elements with class "ONE2"
  var element = document.querySelector(".ONE2");
    element.innerHTML = count2;
    // Update the content of elements with class ".prrr"
    var element = document.querySelector(".prrr");
    element.innerHTML = "$ " + total;

}
function AddNumber3() {
  count3++;
  console.log("I'm clicked");
  console.log(count3);
  total=total+1900;
  console.log(total);

  // Update the content of elements with class "ONE2"
  var element = document.querySelector(".ONE3");
    element.innerHTML = count3;

     // Update the content of elements with class ".prrr"
     var element = document.querySelector(".prrr");
    element.innerHTML = "$ " + total;
}


