
const container = document.querySelector('.container');
const rotate_div = document.querySelector('.rotate-div');
const imgs = rotate_div.getElementsByTagName('img');
let arr = [...imgs]; 
let radius = 280; 
let autoRotate = true; 
let rotateSpeed = -60;      
 

const ground = document.getElementById('surface-area');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].style.transform = "rotateY(" + (i * (360 / arr.length)) + "deg) translateZ(" + radius + "px)";
    arr[i].style.transition = "transform 1s";
    arr[i].style.transitionDelay = delayTime || (arr.length - i) / 2 + "s";
  }
}
setTimeout(init, 1000); 

if (autoRotate) {
  const animationName = (rotateSpeed > 0 ? 'rotate' : 'rotateRevert');
  rotate_div.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}


