console.log("main js called");
var buttonSet = [];
//Calling Dragging class
var myT = new Dragging(colArray[0][5], colArray[0][4], canvas);

//Calling to draw a ellipse
//var ellipseOne = new Ellipse(0, 0, 50, 50, colArray[0][2]);

//Buttons 
var DragOne = new Shape("Ellipse", 10, 100, 180, 90, colArray[0][0], colArray[0][1], colArray[0][2], colArray[0][3], colArray[0][4], canvas);
var DragTwo = new Shape("Rectangle", 10, 200, 180, 90, colArray[0][0], colArray[0][1], colArray[0][2], colArray[0][3], colArray[0][4], canvas);
buttonSet.push(DragOne);
buttonSet.push(DragTwo);

function animate(){
    ctx.clearRect(0,0, width, height);

    for(var i=0; i<buttonSet.length; i++){
        buttonSet[i].update();

    }
    
    myT.update();
    //ellipseOne.update();

    
    window.requestAnimationFrame(animate);
}
animate();

