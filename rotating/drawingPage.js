console.log("drawing Page js called");

class Dragging{
    constructor(fill, canvas){
        //List
        this.objectSet = [];
        //Colours
        this.col = colArray[6][0];
        this.fill = fill;
        //Mouse Positioning 
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        // set when down in bounds stays true once mouse pressed
        //set false on mouse up
        this.mouseDown = false;

        //Within canvas rectangle
        this.rectBound = false;

        //Hard Coded variables to create the back canvas rectangle 
        this.x = 250;
        this.y = 50;
        this.w = 530;
        this.h = 390;
        
        //Canvas 
        this.element = canvas;

        //Listeners 
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        //Finding where the mouse begins
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if (this.rectBound == true ){
            this.mouseDown = true;
        }
        else{
            this.mouseDown = false;
        }

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mUp(e){
        //Calling Rectangle class
        if(this.mouseDown && this.rectBound){
            //Calling the rectangle function if 'Rectangle' button is selected
           if(Shape.selectedShape == 'Rectangle'){
               var tempRectangle = new Rectangle(this.xMouseStart, this.yMouseStart, this.dx, this.dy, Colour.selectedColour);
               this.objectSet.push(tempRectangle);
           }
            //Calling the ellipse function if 'Ellipse' button is selected
           else if(Shape.selectedShape == 'Ellipse'){
               var tempEllipse = new Ellipse(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Colour.selectedColour);
               this.objectSet.push(tempEllipse);

           }
            //Calling the line function if 'Line' button is selected
            else if(Shape.selectedShape == 'Line'){
                var tempLine = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, Colour.selectedColour);
                this.objectSet.push(tempLine);
         
            }
            //Calling the circle function if 'Circle' button is selected
            else if(Shape.selectedShape == 'Circle'){
                var tempCircle = new Circle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Colour.selectedColour);
                this.objectSet.push(tempCircle);
            }
            //Calling the rotating rectangle function if 'Rotating Rectangle' button is selected
            else if(Shape.selectedShape == 'Rotating Rectangle'){
                var tempRotating = new RotatingRectangle(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, this.dx, this.dy, Colour.selectedColour);
                this.objectSet.push(tempRotating);
            }
            //Calling the rotating circle function if 'Rotating Circle' button is selected
            else if(Shape.selectedShape == 'Rotating Circle'){
                var tempCircleRot = new RotatingCircle(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, Colour.selectedColour);
                this.objectSet.push(tempCircleRot);
            }

        }
        //Calling the reset and undo buttons to be made
        if(Shape.selectedShape == 'Reset'){
            this.objectSet = [];
            Shape.selected = "";
        }
        if(Shape.selectedShape == 'Undo'){
            this.objectSet.pop();
            Shape.selected = "";
            Shape.selectedShape = "";
        }
        this.mouseDown = false;
    }

    update(){
        ctx.save();
        this.drawCanvasRect(this.x, this.y, this.w, this.h, colArray[7][0]);
        ctx.clip();
        //Allowing multiple rectangles to be produced 
        for(var i=0; i<this.objectSet.length; i++){
            this.objectSet[i].update();
        }

        //Calculating the width and the height of the rectangle
        this.dx = this.xMouse - this.xMouseStart;
        this.dy = this.yMouse - this.yMouseStart;
        
        //Allowing the rectangle guide to be drawn
        if(this.mouseDown && this.rectBound){
            this.draw();
        }
        ctx.restore();
    }

    drawCanvasRect(x,y,w,h,col){
        //Drawing the background rectangle function 
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.fillStyle = col;
        ctx.fill();
    }

    draw(){

    //Rectangle guide line
        this.drawRect(this.xMouseStart, this.yMouseStart, this.dx, this.dy, this.fill);

    }

    drawRect(x,y,w,h){
        //Function for rectangle shaped guideline
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 1;
        ctx.strokeStyle = colArray[6][0];
        ctx.stroke();

    }

    boundsCheck(xMouse,yMouse,x,y,w,h){
        //Boundary check to see if its within the background rectangle
        if(xMouse>x && xMouse<x+w && yMouse>y && yMouse<y+h){
            return true;
        }
        else{
            return false;
        }


    }
}