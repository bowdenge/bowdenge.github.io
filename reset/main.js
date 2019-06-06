console.log("main js called");
var buttonSet = [];
//Calling Dragging class
var myT = new Dragging(colArray[7][0], colArray[7][0], canvas);

//Shape Buttons 
var DragOne = new Shape("Ellipse", 10, 100, 180, 90, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
var DragTwo = new Shape("Rectangle", 10, 200, 180, 90, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(DragOne);
buttonSet.push(DragTwo);

//Reset/Undo Buttons
var R1 = new Shape("Reset", 150, 450, 90, 50, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
var U1 = new Shape("Undo", 150, 520, 90, 50, colArray[0][0], colArray[6][2], colArray[0][2], colArray[6][0], canvas);
buttonSet.push(R1, U1);

//Colour button loops

    //Reds
for(var i =0; i<3 ; i++){
var temp = new Colour(250, 445 + i*52, 80, 45, colArray[0][0], colArray[0][i], canvas, myT);
buttonSet.push(temp);
}
    //Oranges
for(var i =0; i<3 ; i++){
    var temp = new Colour(340, 445 + i*52, 80, 45, colArray[0][0], colArray[1][i], canvas, myT);
    buttonSet.push(temp);
}
    //Yellows
for(var i =0; i<3 ; i++){
    var temp = new Colour(430, 445 + i*52, 80, 45, colArray[0][0], colArray[2][i], canvas, myT);
    buttonSet.push(temp);
}
    //Greens
for(var i =0; i<3 ; i++){
    var temp = new Colour(520, 445 + i*52, 80, 45, colArray[0][0], colArray[3][i], canvas, myT);
    buttonSet.push(temp);
}
    //Blues
for(var i =0; i<3 ; i++){
    var temp = new Colour(610, 445 + i*52, 80, 45, colArray[0][0], colArray[4][i], canvas, myT);
    buttonSet.push(temp);
}
    //Purples
for(var i =0; i<3 ; i++){
    var temp = new Colour(700, 445 + i*52, 80, 45, colArray[0][0], colArray[5][i], canvas, myT);
    buttonSet.push(temp);
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

