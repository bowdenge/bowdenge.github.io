console.log("main js called");

var objectSet = [];

//Buttons 
var DragOne = new Button("Hello World", 200, 120, 200, 100, colArray[0][0], colArray[0][1], colArray[0][2], colArray[0][3], colArray[0][4], canvas);
var DragTwo = new Button("Hello", 200, 250, 200, 100, colArray[0][0], colArray[0][1], colArray[0][2], colArray[0][3], colArray[0][4], canvas);
var DragThree = new Button("Hello Again", 200, 380, 200, 100, colArray[0][0], colArray[0][1], colArray[0][2], colArray[0][3], colArray[0][4], canvas);
//Putting in list
objectSet.push(DragOne);
objectSet.push(DragTwo);
objectSet.push(DragThree);

function animate(){
    ctx.clearRect(0 , 0, width, height);
    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }
    

    window.requestAnimationFrame(animate);
}
animate();