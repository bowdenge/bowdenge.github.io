console.log("circle js called");

class Circle{
    constructor(xS, yS, xM, yM, c1){
        //Centre x
        this.xC = (xS + xM)/2;
        //Centre y
        this.yC = (yS + yM)/2;
        //Math.abs used to make the values always positive so can draw backwards
        this.radiusX = Math.abs((xM - xS)/2); 
        this.radiusY = Math.abs((yM - yS)/2);
        this.r = 0;
        //Will only allow one radius value either radX ir radY so that the radius will be euqal all around the circle (even)
        if(this.radiusX < this.radiusY){
            this.r = this.radiusX;
        }
            else{
                this.r = this.radiusY
            };
        //Calling for the colour selected by the user
        this.fill = c1;
    }

    update(){ 
        //Running the circle function
        this.draw();
    }

    draw(){
        //Circle function
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}