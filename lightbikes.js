var canvas = document.getElementById('screen');
var context = canvas.getContext('2d');
var speed = 1/16/1000

var x = 0;
var y = 0;

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

function loop()
{
	if(input.up) y -= 1;
	if(input.down) y += 1;
	if(input.right) x += 1;
	if(input.left) x -= 1;	
	context.fillStyle = "red";
	context.fillRect(x, y, 5, 5);
	setTimeout(loop, speed);
}
loop();