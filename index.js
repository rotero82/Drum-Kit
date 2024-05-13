
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");
var snare = new Audio("sounds/snare.mp3");
var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");

//Detecting Button press
for(var i = 0; i < document.querySelectorAll(".drum").length ; i++ ){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
  }
function handleClick(){
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}
//Detecting Keyboard press

document.addEventListener("keydown", handlePress);
function handlePress(e){
  makeSound(e.key);
  buttonAnimation(e.key);
}

function makeSound(key){
  switch (key) {
    case "W":
    case "w":
      tom1.play();
      break;
    case "A":
    case "a":
      tom2.play();
      break;
    case "S":
    case "s":
      tom3.play();
      break;
    case "D":
    case "d":
      tom4.play();
      break;
    case "J":
    case "j":
      snare.play();
      break;
    case "K":
    case "k":
      crash.play();
      break;
    case "L":
    case "l":
      kick.play();
      break;
    default:
    console.log(key);
  }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey)
    activeButton.classList.add("pressed");
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
}
