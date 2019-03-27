console.log("main js called");

objectSet = [];


var myT = new Point(200,100,50,colArray[0][7],colArray[0][4],canvas);
var myT2 = new Point(600,300,50,colArray[0][7],colArray[0][3],canvas);
objectSet.push(myT, myT2);


function animate(){
    ctx.clearRect(0,0,width,height);

    for(var i=0; i<this.objectSet.length; i++){
        this.objectSet[i].update();
    }

    
    window.requestAnimationFrame(animate);
}
animate();
