console.log("drawing js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// complete drawing of a rectangle 
ctx.strokeStyle = "rgba(255,100,90)";
ctx.fillStyle = 'rgb(50,255,90)';
ctx.lineWidth = 5;
ctx.beginPath();
ctx.rect(100,100, 300, 50);
ctx.stroke();
ctx.fill();

// draw circle 
ctx.fillStyle='rgb(255,204,51)';
ctx.strokeStyle='rgb(51,51,255)';
ctx.lineWidth=10;
ctx.beginPath();
ctx.arc(200,60,50,0,2*Math.PI);
ctx.stroke();
ctx.fill();

// add text
ctx.fillStyle="rgb(0,0,255";
var myFont= "bold 30px monospace";
ctx.font=myFont;
ctx.fillText("Hello World", 300,50);

// draw line 
ctx.strokeStyle="rgb(255,0,0";
ctx.lineWidth=0.5;
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(750,200);
ctx.stroke();

// draew polyline with closure 
ctx.strokeStyle="rgb(255,102,102)";
ctx.fillStyle="rgb(255,255,153)";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(500,250);
ctx.lineTo(800,300);
ctx.lineTo(400,300);
ctx.closePath();
ctx.stroke();
ctx.fill();

