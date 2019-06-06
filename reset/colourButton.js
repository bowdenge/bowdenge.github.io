console.log("colour button js called");

class Colour{
    constructor( x, y, w, h, stroke, colour, canvas, target){
        //Removing text variables as these buttons will be swatches
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.colour = colour;
        this.over = colArray[6][0];
        this.target = target;
        //mouse location = 0
        this.xMouse = 0;
        this.yMouse = 0;

        //Within button boundaries variables
        this.rectBound = false;
        this.rectBoundDown = false;

        this.element = canvas;

        //Listeners 
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }


    mDown(e){     
        //Checking if its within button boundary
        if (this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h)){
            this.rectBoundDown = true;
  
            Colour.selectedColour = this;
            this.target.setColour(this.colour);

        }
        else{
            this.rectBoundDown = false;
        }

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mUp(e){
        console.log("button up");
    }

    update(){
        //Drawing button
        this.drawRect();

    }

    drawRect(){
        //Once clicked the button changes the stroke colour to white to show its selected
        if( Colour.selectedColour == this){
            ctx.strokeStyle = this.stroke;
            ctx.strokeStyle = colArray[7][0];
        }
        else{
            ctx.strokeStyle = colArray[6][0];
        }
      
        ctx.beginPath();
        ctx.fillStyle = this.colour;
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.lineWidth = 5;
        ctx.stroke();
        ctx.fill();
    }


    boundsCheck(xMouse,yMouse,x,y,w,h){
        //Boundary check to see if its within the button
        if(xMouse>x && xMouse<x+w && yMouse>y && yMouse<y+h){
            return true;
        }
        else{
            return false;
        }


    }
    

}
//

Colour.selectedColour = ""
