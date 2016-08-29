var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var backCanvas = document.createElement('canvas');
backCanvas.width = canvas.width;
backCanvas.height = canvas.height;
var backContext = backCanvas.getContext('2d');

var speed = 1/16/1000;

var x = 0;
var y = 0;

var image = new Image();
image.src = "background.jpg"

var input = 
{
	up: false,
	down: false,
	left: false,
	right: false
}

window.onkeydown = function(event)
{
	switch(event.keyCode)
	{
		//up
		case 38:
		case 87:
			input.up = true;
			event.preventDefault();
			break;
		//down
		case 40:
		case 83:
			input.down = true;
			event.preventDefault();
			break;
		//left
		case 37:
		case 65:
			input.left = true;
			event.preventDefault();
			break;
		//right
		case 39:
		case 68:
			input.right = true;
			event.preventDefault();
			break;
	}
}

window.onkeyup = function(event)
{
	switch(event.keyCode)
	{
		//up
		case 38:
		case 87:
			input.up = false;
			break;
		//down
		case 40:
		case 83:
			input.down = false;
			break;
		//left
		case 37:
		case 65:
			input.left = false;
			break;
		//right
		case 39:
		case 68:
			input.right = false;
			break;
	}
}

function loop(timestamp)
{
	if(input.up) y -= 3;
	if(input.down) y += 3;
	if(input.right) x += 3;
	if(input.left) x -= 3;	
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	
	context.drawImage(image, 0, 30, canvas.width, canvas.height);
	for(i = 0; i < 1000; i++)
	{
		context.fillStyle = "blue";
		context.fillRect(
			(i*20) % 100,
			(i*20) % 100,
			10, 10);
	}
	context.fillStyle = "red";
	context.fillRect(x, y, 5, 5);
	
	//Swap buffers
	//context.drawImage(x,y,5,5);
	requestAnimationFrame(loop);
}
//var intervalId = setInterval(loop, speed);
requestAnimationFrame(loop);
//loop();