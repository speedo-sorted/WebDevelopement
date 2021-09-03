const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); // sets context i.e 2d / 3d

// canvas.width = window.innerWidth; //can set width /height from here

/*
//////// rectangle 
// fillstyle color of fill, fillrect(x-pos, ypos, width,height)
ctx.fillStyle = 'red';
ctx.fillRect(20, 20, 150, 50);
ctx.fillStyle = 'blue';
ctx.fillRect(180, 20, 150, 50);

//strokeRect() 
ctx.lineWidth = 5; 
ctx.strokeStyle = 'green';
ctx.strokeRect(40, 90, 100, 60);

//clearRect, erase/clear a rectangular shape
ctx.clearRect(25, 25, 140, 40);

//fillText()
ctx.fillStyle = 'red';
ctx.font = '40px sans-serif';
ctx.fillText('hello there', 200, 50);

// also strokeText()
*/


// // paths
// ctx.beginPath();
// ctx.moveTo(50, 50); 
// ctx.lineTo(150, 50);
// ctx.lineTo(100, 200);
// ctx.lineTo(50, 50);
// // ctx.closePath(); // it closes the path-alter for above line 
// ctx.stroke();       // now draw it 
// // ctx.fill();      // fills if closed figure

// // Rectangle 
// ctx.fillStyle = 'teal';
// ctx.beginPath();
// ctx.rect(100, 230, 80, 100);
// ctx.fill();

// // arc 
// ctx.beginPath(); 
// // ctx.arc(x, y, radius, begin-angle, end-angle,[anticlockwise?1:0])
// ctx.arc(400, 300, 60, 0, Math.PI * 2);
// ctx.stroke();


////////////animation on circle
// create circle object and create animation function
// object will be snake for snake and ladders

const circle = {
    x: 200, 
    y: 200, 
    size: 20, 
    dx: 5,         // deflection in x
    dy: 4          // deflection in y
};

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI*2);
    ctx.fillStyle = 'purple';
    ctx.fill();

    if(circle.x + circle.size >= canvas.width || circle.x - circle.size <= 0)
        circle.dx *= -1;
    if(circle.y + circle.size >= canvas.height || circle.y - circle.size<= 0)
        circle.dy *= -1;

    circle.x += circle.dx;
    circle.y += circle.dy;

    requestAnimationFrame(update); // calls function with frame-rate delay
    
}
update();
