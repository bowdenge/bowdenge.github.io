console.log("main js called");

objectSet = [];

var BBOne = new BouncingBall(300,200,190,270, colArray[0][8], 10, 2, -2);
var BBTwo = new BouncingBall(300, 200, 190, 270, colArray[0][7], 10, -3, 1);
var BBThree = new BouncingBall(300, 200, 190, 270, colArray[0][3], 10, 5, 2);

objectSet.push(BBOne, BBTwo, BBThree);


function animate(){
    ctx.clearRect(0,0, width, height);
    //BBOne.update();

    for(var i=0; i<objectSet.length; i++){
        objectSet[i].update();

    }

    
    window.requestAnimationFrame(animate);
}
animate();
