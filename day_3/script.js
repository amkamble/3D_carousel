
const container = document.querySelector('.container');
const rotate_div = document.querySelector('.rotate-div');
const imgs = rotate_div.getElementsByTagName('img');
let arr = [...imgs]; 

let radius = 240; 
let imgWidth = 120;     
let imgHeight = 170;
let autoRotate = true; 
let rotateSpeed = -60;      

setTimeout(init, 1000);

rotate_div.style.width = imgWidth + "px";
rotate_div.style.height = imgHeight + "px";


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

if (autoRotate) {
  const animationName = (rotateSpeed > 0 ? 'rotate' : 'rotateRevert');
  rotate_div.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}


let sX, sY, nX, nY, desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;
  // setup events
  document.onpointerdown = function (e) {
    clearInterval(container.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY
    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
          nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(container);
      sX = nX;
      sY = nY;
    }
    this.onpointerup = function (e) {
      container.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(container);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(container.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    }
    return false;
  }
  document.onmousewheel = function(e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  }





























/* let sX, sY, nX, nY, desX = 0,
desY = 0,
tX = 0,
tY = 10;
// setup events
document.onpointerdown = function (e) {
clearInterval(container.timer);
e = e || window.event;
var sX = e.clientX,
  sY = e.clientY
this.onpointermove = function (e) {
e = e || window.event;
var nX = e.clientX,
    nY = e.clientY;
desX = nX - sX;
desY = nY - sY;
tX += desX * 0.1;
tY += desY * 0.1;
applyTranform(container);
sX = nX;
sY = nY;
}
this.onpointerup = function (e) {
container.timer = setInterval(function () {
  desX *= 0.95;
  desY *= 0.95;
  tX += desX * 0.1;
  tY += desY * 0.1;
  applyTranform(container);
  playSpin(false);
  if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
    clearInterval(container.timer);
    playSpin(true);
  }
}, 17);
this.onpointermove = this.onpointerup = null;
}
return false;
}
document.onmousewheel = function(e) {
e = e || window.event;
var d = e.wheelDelta / 20 || -e.detail;
radius += d;
init(1);
} */