console.log("shape button js called");

class Shape{
    constructor(text, x, y, w, h, stroke, fill, col2, textC, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.col2 = col2;
        this.textC = textC;
        this.text = text;
        this.over = colArray[7][0];

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
            //If within bounds then the button that it is in bounds of will be the selected shape = this.text
            Shape.selected = this;
            Shape.selectedShape = this.text;

        }
        else{
            this.rectBoundDown = false;
        }

    }

    mMove(e){
        //Finding where the mouse is and running the boundary check
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        //Drawing button and writing the text on it 
        this.drawRect();
        this.writeText();

    }

    drawRect(){
        //If mouse is over the button it changes colour (highlighted)
        //Once clicked the button changes colour to show its selected
        if(this.rectBound){
            ctx.fillStyle = this.over;
        }else if( Shape.selected == this){
            ctx.fillStyle = this.col2;
        }
        else{
            ctx.fillStyle = this.fill;
        }
        //Drawing buttons
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.fill();
    }

    writeText(){
        //Function for writing the text within the button
        ctx.fillStyle = this.textC;
        ctx.font = "1em sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
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
Shape.selected = ""
Shape.selectedShape = ""
