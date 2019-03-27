console.log("function js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

// function rectangle 
function drawRectangle( x, y, w, h, fCol,sCol,lw){
    ctx.fillStyle = fCol;
    ctx.strokeStyle = sCol;
    ctx.lineWidth = lw;
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = scol;
    ctx.beginPath();
    ctx.arc(x+w/2, y+h/2, h/2, 0, 2*Math.PI);
    ctx.fill();
}

// function circle
function drawCircle( x, y, R, fillC, strokeCol, lWidth, fill, stroke){
    ctx.beginPath()
    ctx.arc(x, y, R, 0, 2*Math.PI);
    if(fill == true){
        ctx.fillStyle = fillC;
        ctx.fill();
    }

    if(stroke == true){
        ctx.strokeStyle = strokeCol;
        ctx.lineWidth = lWidth;
        ctx.stroke();
    }

}

// function line
function drawLine(x1, y1, x2, y2, sCol, lW){
    ctx.strokeStyle = sCol;
    ctx.lineWidth = lW;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

drawCircle( 100, 200, 50, "rgb(255,102,102)", "rgb(255,255,153)", 5, true, true);
drawRectangle( 50, 50, 50, 50, "rgb(255,102,102)", "rgb(255,255,153)", 10);
drawLine(0, 250, 750, 250, "rgb(255,102,102)", 0.5);