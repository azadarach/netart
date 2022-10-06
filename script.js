document.body.style.margin   = 0
document.body.style.overflow = `hidden`

const cnv  = document.createElement ('canvas')
cnv.width  = window.innerWidth
cnv.height = window.innerHeight
document.body.appendChild (cnv)

const ctx = cnv.getContext ('2d')

// Set line width
ctx.lineWidth = 8;

// Wall
ctx.strokeRect(75, 140, 200, 160);

// Door
ctx.strokeRect(110, 190, 70, 110);

ctx.strokeRect(150, 115, 40, 25);


// Roof
ctx.beginPath();
ctx.moveTo(40, 140);
ctx.lineTo(170, 30);
ctx.lineTo(300, 140);
ctx.closePath();
ctx.stroke();

