console.log("main js called");
var buttonSet = [];
//Calling Dragging class
var myT = new Dragging( colArray[7][0], canvas);

//Shape Buttons 
var DragOne = new Shape("Ellipse", 10, 50, 180, 90, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
var DragTwo = new Shape("Rectangle", 10, 150, 180, 90, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragOne);
buttonSet.push(DragTwo);
var DragThree = new Shape("Line", 10, 250, 180, 90, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragThree);
var DragFour = new Shape("Circle", 10, 350, 180, 90, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragFour);

//Reset/Undo Buttons
var R1 = new Shape("Reset", 150, 450, 90, 50, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
var U1 = new Shape("Undo", 150, 520, 90, 50, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(R1, U1);

//Colour button loops
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

