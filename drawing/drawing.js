console.log("drawing js called");

class Drawing{
    constructor(xS, yS, xM, yM, xy, sCol){
        //Variables required for line
        this.mouseDown = xS;
        this.xMouse = yS;
        this.yMouse = xM;
        this.yMouseStart = yM;
        this.xMouseStart = xy;
        this.fill = sCol;
    }
    update(){
        //Calling for line to be drawn
        this.draw()
    }
    draw(){
        //line function
        if(!this.mouseDown) return;
        ctx.lineWidth = 4;
        ctx.lineCap = "round";
        ctx.lineTo(this.xMouseStart, this.yMouseStart)
        ctx.strokeStyle = "blue";
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(this.xMouse, this.yMouse);

    }
}