console.log("point js called");

class Point{
    constructor(x,y,R,col,canvas){
        this.objectSet = [];

        this.x = x;
        this.y = y;
        this.R = R;
        this.col = col;
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;

        this.dragging = false;
        this.circularBound = true;

        //Listeners 
        this.element = canvas;
        this.element.addEventListener('mousedown', this.down.bind(this));
        this.element.addEventListener('mousemove', this.move.bind(this));
        this.element.addEventListener('mouseup', this.up.bind(this));
    }

    //functions 

    down(e){
        this.dragging = true;
        console.log(this.circularBoundCheck(this.x, this.y, this.xMouse, this.yMouse));
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        this.mouseDown = true;
        console.log("mouse down event");

    }

    move(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }

    up(e){
        this.mouseDown = false;
        this.dragging = false;
        console.log("mouse up event");

    }

    update(){
        /*if(this.mouseDown){
            console.log("mouse is down");
            this.draw();
        }*/

        if(this.dragging == true){
            this.x = this.xMouse;
            this.y = this.yMouse;
            this.draw();
        }

        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }

    
    }
    draw(){
        this.drawCircle(this.xMouseStart, this.yMouseStart, this.R, this.col);

    }
    drawCircle(x,y,R,col){
        ctx.beginPath();
        ctx.arc(x,y,R,0, 2*Math.PI);
        ctx.fillStyle = col;
        ctx.fill();
    }

    circularBoundCheck(x1,y1,x2,y2,r){
        var D = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
        console.log(D);
        /*if(D<r){
            console.log("true");
            return true;
        }
        else{
            return false;
        }*/


    }


}