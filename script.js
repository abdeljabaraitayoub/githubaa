const button = document.getElementById("button"); 
const boxes = document.getElementsByClassName("boxx");
const buttonPressed = () => {
  for(const boxx of boxes) {
    boxx.classList.toggle("toggle");
  }
}
button.addEventListener("click", buttonPressed);



var maDiv = document.getElementById("margin");
function showTable() {
if(maDiv.style.display === "block"){
    maDiv.style.display = "none";
}
else{
    maDiv.style.display = "block";
    
}}



var aside = document.querySelector("aside");
function showSidebar() {
if(aside.style.display === "block"){
    aside.style.display = "none";
}
else{
    aside.style.display = "block";
    
}}
// js

var count1 = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
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
function removeNumber1() {
  if(count1>0){
    count1=count1-1;
    console.log("I'm clicked");
    console.log(count1);
    total=total-1900;
    console.log(total);
    }
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
function removeNumber2() {
  if(count2>0){
  count2=count2-1;
  console.log("I'm clicked");
  console.log(count2);
  total=total-1900;
  console.log(total);
  }
  // Update the content of elements with class "ONE1"
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
function removeNumber3() {
  if(count3>0){
  count3=count3-1;
  console.log("I'm clicked");
  console.log(count3);
  total=total-1900;
  console.log(total);
  }
  // Update the content of elements with class "ONE1"
  var element = document.querySelector(".ONE3");
    element.innerHTML = count3;
    // Update the content of elements with class ".prrr"
     var element = document.querySelector(".prrr");
    element.innerHTML = "$ " + total;

}

//market counteur
function addnumber4(){
  count4++;
  var market=document.querySelector("#market5");
  market.innerHTML=count4;


}
var cart = document.querySelector(".barmarket");

function cart1() {
  if (cart.style.display == "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
}


