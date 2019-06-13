console.log("main js called");
//Button list
var buttonSet = [];
//Calling Dragging class
var myT = new Dragging( colArray[7][0], canvas);

//Shape Buttons 
var DragOne = new Shape("Ellipse", 40, 30, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragOne);
var DragTwo = new Shape("Rectangle", 40, 85, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragTwo);
var DragThree = new Shape("Line", 40, 140, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragThree);
var DragFour = new Shape("Circle", 40, 195, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragFour);
var DragFive = new Shape("Rotating Rectangle", 40, 250, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragFive);
var DragSix = new Shape("Rotating Circle", 40, 305, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragSix);
var DragSeven = new Shape("Rectangle Pattern", 40, 360, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragSeven);
var DragEight = new Shape("Brush", 40, 415, 160, 48, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragEight);

//width button for the size of brush
var r1 = new Width("XS", 15, 490, 30, 30, 0, 2, colArray[6][2], colArray[6][2], colArray[6][0], colArray[7][0], canvas);
var r2 = new Width("S", 60, 490, 30, 30, 0, 5, colArray[6][2], colArray[6][2], colArray[6][0], colArray[7][0], canvas);
var r3 = new Width("M", 105, 490, 30, 30, 0, 10, colArray[6][2], colArray[6][2], colArray[6][0], colArray[7][0], canvas);
var r4 = new Width("L", 150, 490, 30, 30, 0, 15, colArray[6][2], colArray[6][2], colArray[6][0], colArray[7][0], canvas);
var r5 = new Width("XL", 195, 490, 30, 30, 0, 20, colArray[6][2], colArray[6][2], colArray[6][0], colArray[7][0], canvas);
buttonSet.push(r1, r2, r3, r4, r5);

//Reset/Undo Buttons
var R1 = new Shape("Reset", 120, 550, 70, 40, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
var U1 = new Shape("Undo", 40, 550, 70, 40, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(R1, U1);

//Colour button loops
    //For when j is less than 6 and i is less than 3, the loop will keep running adding a number on each time to 
    //  produce all the colours.
for(var j = 0; j < 6; j++){
    for(var i =0; i<3 ; i++){
        var temp = new Colour(250+90*j, 445 + i*52, 80, 45, colArray[0][0], colArray[j][i], canvas, myT);
        buttonSet.push(temp);
    }

}

function animate(){
    ctx.clearRect(0,0, width, height);

    for(var i=0; i<buttonSet.length; i++){
        buttonSet[i].update();

    }
     
    myT.update();

    
    window.requestAnimationFrame(animate);
}
animate();

