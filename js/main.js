var canvas = document.getElementById("myCanvas");
var context= canvas.getContext('2d');


//tomato
context.beginPath();
context.fillStyle="tomato";
context.arc(220,175,50,0,2*Math.PI);
context.arc(175,175,50,0,2*Math.PI);
context.fill();
context.closePath();

//stem
context.beginPath();
context.fillStyle= "#467F30";
context.rect(193, 103, 12, 32);
context.fill();
context.closePath();

//bite
context.beginPath();
context.fillStyle="white";
context.ellipse(125,175,30,30, 45*Math.PI/180, 0, 2*Math.PI);
context.fill();
context.closePath();

//text
context.fillStyle= "black";
context.font= "30px Verdana";
context.fillText("Take a bite!", 110, 350);
