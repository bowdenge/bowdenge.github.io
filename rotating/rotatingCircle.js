console.log("rotatingCircle js called");

class RotatingCircle{
    constructor(xS, yS, xM, yM, c1){
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;

        this.degrees = 0;
        //Math.abs used to make the values always positive
        this.radiusX = Math.abs((xM - xS)/2); 
        this.radiusY = Math.abs((yM - yS)/2);
        this.r = 0;
        //Making it a perfect circle as the radius on both sides will be equal
        if(this.radiusX < this.radiusY){
            this.r = this.radiusX;
        }
        else{
            this.r = this.radiusY
            };
                
        this.fill = c1;
    }

    update(){
        //Speed of rotation
        this.degrees +=1;
        this.draw();
    }

    draw(){
        //Rotating circle function 
        ctx.save();
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.degrees*Math.PI/180);
        ctx.beginPath();
        ctx.arc(this.r/2, 0, this.r/2, 0, 2*Math.PI);
        ctx.fillStyle=this.fill;
        ctx.fill();
        ctx.restore();
    }


}
