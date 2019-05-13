console.log("button js called");

class Colour{
    constructor(text, x, y, w, h, stroke, fill, col2, textC, over, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.fill = fill;
        this.col2 = col2;
        this.textC = textC;
        this.text = text;
        this.over = over;

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
            //
            Colour.selected = this;
            //Colour.selectedShape = this.text;

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
        this.writeText();

    }

    drawRect(){
        //If mouse is over the button it changes colour (highlighted)
        //Once clicked the button changes colour to show its selected
        if(this.rectBound){
            ctx.fillStyle = this.over;
        }else if( Colour.selected == this){
            ctx.fillStyle = this.col2;
        }
        else{
            ctx.fillStyle = this.fill;
        }
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.stroke();
        ctx.fill();
    }

    writeText(){
        //Function for writing the text within the button
        ctx.fillStyle = this.textC;
        ctx.font = "30px black";
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
Colour.selected = ""
//Colour.selectedShape = ""
