console.log("loops js called");

canvas = document.querySelector('#myCanvas');
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

drawLine(0, 250, 750, 250, colArray[2], 0.5);
drawCircle( 100, 200, 50, colArray[4], colArray[2], 5, true, true);
drawRectangle( 50, 50, 50, 50, colArray[3], colArray[4], 10);

var i = 0;
drawCircle( 100 +70*i, 200, 50, colArray[4], colArray[2], 15, true, true);
i=1;
drawCircle( 100 +70*i, 200, 50, colArray[4], colArray[2], 15, true, true);
i=2;
drawCircle( 100 +70*i, 200, 50, colArray[4], colArray[2], 15, true, true);

for(var i = 0 ; i<4; i++){
    console.log(i);
    drawCircle( 100 +70*i, 400, 10, colArray[4], colArray[2], 15, true, true);

}

for(var j = 0 ; j<10; j++){
    console.log(j);
    drawCircle( 500, 400+j*30, 10, colArray[4], colArray[2], 15, true, true);

}

for (var i = 0; i<5 ; i++){

    for(var j = 0; j<5 ; j++){
        drawCircle( 10 + 30*i, 10+j*30, 10, colArray[4], colArray[2], 1, true, true);


    }
}