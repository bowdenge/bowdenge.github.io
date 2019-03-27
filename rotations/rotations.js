console.log("rotations js called");


// function rectangle 
function drawRectangle( x, y, w, h, fCol,sCol,lw, fill, stroke){
    ctx.beginPath();
    ctx.rect(x,y,w,h);
    if(fill== true){
        ctx.fillstyle = fCol;
        ctx.fill();
    }
    if(stroke == true){
        ctx.lineWidth = lw;
        ctx.strokeStyle = sCol;
        ctx.stroke();
    }


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

ctx.save();
ctx.translate(300,200);
ctx.rotate(30*Math.PI/180);
drawCircle(0,0, 20, "", colArray[1][6], 2, false, true);
drawRectangle(0,0, 100,200, colArray[0][4], colArray[1][5], 5, true, true);
ctx.restore();

ctx.save();
ctx.translate(500,200);
for(var i=0; i<360 ; i+=15){
    ctx.rotate(15*Math.PI/180);
    drawRectangle(0,0, 50,50, colArray[2][6], colArray[1][5], 1, true, true);
}
ctx.restore();