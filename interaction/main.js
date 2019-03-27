console.log("main js called");


var myT = new TestObject(canvas);


function animate(){
    ctx.clearRect(0,0, width, height);

    
    window.requestAnimationFrame(animate);
}
animate();
