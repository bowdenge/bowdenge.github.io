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
      ["rgb(255,0,0)", "rgba(255,102,102, 0.8)", "rgba(255, 153, 153, 0.5)"],
  //Oranges 
      ["rgb(255, 125, 0)", "rgba(255, 178, 102, 0.8)", "rgba(255, 204, 153, 0.5)"],
  //Yellows 
      ["rgb(255, 255, 0)", "rgba(255, 255, 102,0.8)", "rgba(255, 255, 153, 0.5)"],
  //Greens
      ["rgb(0, 153, 0)", "rgba(0, 204, 102, 0.8)", "rgba(153, 255, 153, 0.5)"],
  //Blues
      ["rgb(0, 102, 204)", "rgba(51, 153, 255, 0.8)", "rgba(153, 204, 255, 0.5)"],
  //Purples
      ["rgb(127, 0, 255)", "rgba(178, 102, 255, 0.8)", "rgba(204, 153, 255, 0.5)"],
  //Blacks
      ["rgb(0, 0, 0)", "rgb(96, 96, 96)", "rgb(192, 192, 192)"],
  //White
      ["rgb(255, 255, 255)"]

]