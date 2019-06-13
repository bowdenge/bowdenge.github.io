console.log("widthButton js is called");

class Width{
    constructor(text, x, y, w, h, width, radius, stroke, fill, textC, over, canvas){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.radius = radius;
        this.width = width;
        this.stroke = stroke;
        this.fill = fill;
        this.textC = textC;
        this.text = text;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;

        this.rectBound = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mDown(e){
        //If within the rectangle (button) allow these variables to equal as so
        if(this.rectBound == true){   
            Width.selected = this;
            Width.selectedWidth = this.width;
            Width.selectedRadius = this.radius;
        }
    }

    mMove(e){
        //Calculating the mouse position 
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        //Boundary check
        this.rectBound = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        //Calling for the rectangle to be drawn and to write text in it
        this.draw();
        this.writeText();
        }

    draw(){
        //Changing stroke and colour depending on if the mouse is within boundaries/clicked 
        if(Width.selected == this ){
            ctx.fillStyle = colArray[7][0];
        }
        else if(this.rectBound){
            ctx.fillStyle = this.over;
           
        }else{
            ctx.fillStyle = this.fill
        }
        //drawing rectangle function
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 5;
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        //Writing text within the button function
        ctx.fillStyle = this.textC;
        ctx.font = "1em sans-serif";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    //Boundary check function
    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

}
Width.selected = "" ; 
Width.selectedWidth = "" ; 
Width.selectedRadius = "" ; 