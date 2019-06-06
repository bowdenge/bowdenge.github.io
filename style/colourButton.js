console.log("colour button js called");

class Colour{
    constructor( x, y, w, h, stroke, colour, canvas, target){
        //Removing text variables as these buttons will be swatches so no text required
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

    }


    mDown(e){     
        //Checking if its within button boundary
        if (this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h)){
            this.rectBoundDown = true;
            //If within bounds then the colour that it is in bounds of will be the selected colour = this.colour
            Colour.selected = this;
            Colour.selectedColour = this.colour;

        }
        else{
            //Else the mouse is not in the bounds of one of the colour buttons
            this.rectBoundDown = false;
        }

    }

    mMove(e){
        //Calculating where the mouse ends up
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //Running the bounds check 
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        //Drawing button
        this.drawRect();

    }

    drawRect(){
        //Once clicked the button changes the stroke/boarder colour to white to show its selected
        if( Colour.selected == this){
            ctx.strokeStyle = this.stroke;
            ctx.strokeStyle = colArray[7][0];
        }
        else{
        //Else the boarder colour is black
            ctx.strokeStyle = colArray[6][0];
        }
        //Drawing the buttons
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
Colour.selected= "";
Colour.selectedColour = colArray[6][0];
