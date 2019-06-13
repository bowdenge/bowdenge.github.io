console.log("brush js called");

class Brush{
    constructor(xM, yM, r, c1){
    //Making these the centres will mean that it will make a circle at exactly that point
        this.xC = xM; //Centre x
        this.yC = yM; //Centre y
        this.r = r;
        this.fill = c1;
    }

    update(){
        // drawing brush
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
