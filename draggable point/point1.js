console.log("point js called");

class Point{
    constructor(x,y,R,c1,c2,canvas){
       

        this.x = x;
        this.y = y;
        this.R = R;
        this.c1 = c1;
        this.c2 = c2;
        this.col = c1;
        this.xMouse = 0;
        this.yMouse = 0;

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
        if(this.circularBound){
            this.dragging = true;
        }
 

   
        console.log("mouse down event");

    }

    move(e){
        this.circularBound = this.circularBoundCheck(this.x, this.y, this.xMouse, this.yMouse, this.R);
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
    }

    up(e){
        this.mouseDown = false;
        this.dragging = false;
        console.log("mouse up event");

    }

    update(){


        if(this.dragging == true){
            this.col = this.c2;
            this.x = this.xMouse;
            this.y = this.yMouse; 
        }
        else{
            this.col = this.c1;
        }

        this.draw();


    
    }
    draw(){
        this.drawCircle(this.x, this.y, this.R, this.col);

    }


    drawCircle(x,y,R,col){
        ctx.beginPath();
        ctx.arc(x,y,R,0, 2*Math.PI);
        ctx.fillStyle = col;
        ctx.fill();
    }

    circularBoundCheck(x1,y1,x2,y2,r){
        var D = Math.sqrt(Math.pow(x2-x1,2)+Math.pow(y2-y1,2));
        
        if(D<r){
            console.log("true");
            return true;
        }
        else{
            return false;
        }


    }


}