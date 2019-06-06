console.log("rectangle js called");


class Ellipse{
    constructor(xS, yS, xM, yM, c1){
        //Calculating the xCentre and the yCentre points
        this.xC = (xS + xM)/2;
        this.yC = (yS + yM)/2;
        //Calculating the x and y radius'
        this.radiusX = Math.abs((xM - xS)/2);
        this.radiusY = Math.abs((yM - yS)/2);
        //Hard coding of the rotation and angles
        this.rotation = 0;
        this.startAngle = 0;
        this.endAngle = 2*Math.PI;
        this.fill = c1;
    }


    update(){
        this.draw();
    }

    draw(){
        //Ellipse function
        ctx.beginPath();
        ctx.ellipse(this.xC, this.yC, this.radiusX, this.radiusY, this.rotation, 
                this.startAngle, this.endAngle);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}
