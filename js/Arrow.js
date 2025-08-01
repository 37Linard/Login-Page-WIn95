var cursor = svg.createSVGPoint();
var arrows = document.querySelector(".arrows");
let target = {x:100, y:249.5};
let pivot = {x:100, y:250};
aim({clientX: 320, clientY: 300});
window.addEventListener("mousedown", draw);

function draw(e) {
  let randomAngle = Math.random() * Math.PI * 0.03 - 0.015;
  TweenMax.to(".arrow-angle use", 0.3, {opacity:1});
  window.addEventListener("mousemove", aim);
  window.addEventListener("mouseup", loose);
  aim(e);
}

// Certifique-se de definir as funções aim e loose em outro lugar do seu código.
// function aim(e) { ... }
// function loose(e) { ... }



