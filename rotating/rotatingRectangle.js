console.log("rotatingRectangle js called");

class RotatingRectangle{
    constructor(xS, yS, xM, yM, w, h, c1){
        //Finding the xcentre and ycentre co-ords
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;

        this.w = w
        this.h = h
        //Inital rotating value 
        this.degrees = 0;
        this.fill = c1;
    }

    update(){
        //Speed of rotation
        this.degrees +=1;
        this.draw();
    }

    draw(){
        //Rotating rectangle function 
        ctx.save();
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.degrees*Math.PI/180);
        ctx.beginPath();
        ctx.rect(-this.w/2 ,-this.h/2, this.w, this.h);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
    }
}
