let canvas = document.getElementById('oscVisualizer');
let ctx = canvas.getContext("2d");

window.onload = () => {
    drawGrid();
};

ctx.lineWidth = 1;

const OSCILLATOR_AMPLITUDE = -100; //Negative to compensate for canvas' reversed coordinate system
const NORM_PERIOD = 1/(2*39.71);

let controlledFreq = 1;
ctx.beginPath();
ctx.strokeStyle = "#ff0000";             
for(let t = 0; t < canvas.width; t++){
    modularFreq = Math.sin(180*t/4);
    console.log(modularFreq);
    y1 = (2*OSCILLATOR_AMPLITUDE)*Math.sin(994*NORM_PERIOD*t);
    ctx.lineTo(t,y1+canvas.height/2);
    ctx.stroke();       
}
ctx.closePath();

function drawGrid(){

    ctx.beginPath()    
    ctx.strokeStyle = "#B0B0B0";  
    ctx.moveTo(0, canvas.height/2);
    ctx.lineTo(canvas.width, canvas.height/2);
    ctx.stroke();
    ctx.moveTo(0,0);
    ctx.closePath();

    ctx.beginPath()
    ctx.strokeStyle = "#000000";   
    for(let i = 0; i < canvas.width; i=i+25){
        ctx.moveTo(i, canvas.height);
        ctx.lineTo(i, canvas.height-10);
        ctx.moveTo(-canvas.width, i);
        ctx.lineTo(10, i)
        ctx.stroke();
    }
    ctx.closePath();

    ctx.moveTo(0,canvas.height/2); 

}