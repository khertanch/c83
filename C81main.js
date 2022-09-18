var mouseevent="";
var lastPositionX, lastPositionY;
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseevent="mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    Xmouse= e.clientX - canvas.offsetLeft; 
    Ymouse= e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=10;
        ctx.moveTo(lastPositionX, lastPositionY);
     ctx.lineTo(Xmouse, Ymouse);
       ctx.stroke();  
    }
    lastPositionX = Xmouse; 
    lastPositionY = Ymouse;
}
var width=screen.width;
var cwidth=screen.width-60;
var cheight=screen.height-270;
if(width<992){
    document.getElementById("myCanvas").width=cwidth;
    document.getElementById("myCanvas").height=cheight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", mytouch);
function mytouch(e){
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", mytouchmove);
function mytouchmove(e){
   touchX= e.touches[0].clientX - canvas.offsetLeft; 
    touchY= e.touches[0].clientY - canvas.offsetTop;
   
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=10;
        ctx.moveTo(lastPositionX, lastPositionY);
     ctx.lineTo(touchX,touchY);
       ctx.stroke();  
    
    lastPositionX = touchX; 
    lastPositionY = touchY;
}