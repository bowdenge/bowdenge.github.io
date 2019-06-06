console.log("init js file has been called");
// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
// Get the device pixel ratio, falling back to 1.
var dpr = window.devicePixelRatio || 1;
myScale=dpr;
// Get the size of the canvas in CSS pixels.
var rect = canvas.getBoundingClientRect();
console.log(rect.width);
console.log(rect.height);
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
var ctx = canvas.getContext('2d');
// Scale all drawing operations by the dpr, so you
// don't have to worry about the difference.
ctx.scale(dpr, dpr);
return ctx;
}
// basic drawing on the canvas with no functions


// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;

//New colour palette 
var colArray=[
  //Reds 
      ["rgb(255,0,0)", "rgb(255,102,102)", "rgb(255, 153, 153)"],
  //Oranges 
      ["rgb(255, 125, 0)", "rgb(255, 178, 102)", "rgb(255, 204, 153)"],
  //Yellows 
      ["rgb(255, 255, 0)", "rgb(255, 255, 102)", "rgb(255, 255, 153)"],
  //Greens
      ["rgb(0, 153, 0)", "rgb(0, 204, 102)", "rgb(153, 255, 153)"],
  //Blues
      ["rgb(0, 102, 204)", "rgb(51, 153, 255)", "rgb(153, 204, 255)"],
  //Purples
      ["rgb(127, 0, 255)", "rgb(178, 102, 255)", "rgb(204, 153, 255)"],
  //Blacks
      ["rgb(0, 0, 0)", "rgb(96, 96, 96)", "rgb(192, 192, 192)"],
  //White
      ["rgb(255, 255, 255)"]

]