let canvas=document.getElementById("clock");
let context= canvas.getContext("2d");
let circle = new Path2D;

circle.arc(150,150,150,0,2*Math.PI);
context.stroke(circle);

let R=300/2, d, angle,pX,pY,qX,qY;
for (d=0;d<60;++d){
    angle=(d/60)*(2*Math.PI);

    pX= Math.cos(angle)*R;
    pY=-Math.sin(angle)*R;

    qX=0.9*pX;
    qY=0.9*pY;
    
    pX +=R; pY +=R;
    qX +=R; qY +=R;

    context.moveTo(pX,pY);
    context.lineTo(qX,qY);
    context.stroke();

}

let date = new Date(),hours,minutes,seconds;
seconds=date.getSeconds();
minutes= date.getMinutes();
hours=date.getHours();

let sX,sY;

lineS= new Path2D();
let secondsAngle=(seconds/60)*(2* Math.PI);
secondsAngle=Math.PI/2-secondsAngle;
sX=Math.cos(secondsAngle)*R*0,85;
sY=-Math.sin(secondsAngle)*R*0,85;
sX+=R; sY+=R;



lineS.moveTo(150,150);
lineS.lineTo(sX,sY);
context.stroke(lineS);