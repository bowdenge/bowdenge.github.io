console.log("circle js called");

class Circle{
    constructor(xS, yS, xM, yM, c1){
        //centre x
        this.xC = (xS + xM)/2;
        //centre y
        this.yC = (yS + yM)/2;
        //Math.abs is to make the values always positive
        this.radiusX = Math.abs( (xM - xS)/2 ); 
        this.radiusY = Math.abs( (yM - yS)/2 );
        this.r = 0;
        //Making sure the this.r (radius) varible only equals one value or else it would become a ellipse
        if(this.radiusX < this.radiusY){
            this.r = this.radiusX;
        }
            else{
                this.r = this.radiusY
            };
        
        this.fill = c1;
    }

    update(){ 
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