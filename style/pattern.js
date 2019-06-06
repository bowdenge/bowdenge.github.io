console.log("pattern js called");

class RectanglePattern{
    constructor(xS, yS, xM, yM, w, h, c1){
        //Calculating xCentre and yCentre
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;
        this.w = w;
        this.h = h;

        this.fill = c1;
    }

    update(){
        //Calling for pattern to be drawn
        this.draw();
    }

    draw(){
        //Drawing the pattern
        ctx.save();
        ctx.translate(this.xC, this.yC);
        //Won't stop making rectangles in a circle until k is k>9 completes exactly 1 * 360 degree circle 
        for(var k=0; k<9; k++){
        ctx.rotate(40*Math.PI / 180);
        drawRectangle(this.w,this.h, true, this.fill);
        }
        ctx.restore();

    }
}
//Drawing a rectangle function
function drawRectangle( w, h, fill, fillCol){
    ctx.beginPath();
    ctx.rect( w/2 , h/2, w, h);
    if(fill == true){
        ctx.fillStyle = fillCol;
        ctx.fill();

    }

}

