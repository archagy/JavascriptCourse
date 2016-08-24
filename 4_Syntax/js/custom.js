// Variables x, y, z
function sumNum () {
	var x = 5;
	var y = 6;
	var z = x + y;
	document.getElementById("demo1").innerHTML = z;
}

// Whith/Without decimal
function decNum () {
	document.getElementById("demo2").innerHTML = 10.50;
}

// Double/Single quotes
function dsQuo () {
	document.getElementById("demo3").innerHTML = 'John Doe';
}

// Assigned Value
function asVal () {
	var x;
	x = 6;
	document.getElementById("demo4").innerHTML = x;
}

// Operators Assigning Value
function opAsig () {
	var x = 5;
	var y = 6;
	document.getElementById("demo5").innerHTML = x + y;
}

// Operators
function opVal () {
	document.getElementById("demo6").innerHTML = (5 + 6) * 10;
}

// Expressions
function expNum () {
	var x = 5;
	document.getElementById("demo7").innerHTML = x * 10;
}

function expStr () {
	document.getElementById("demo7").innerHTML = "John" + " " + "Doe";
}

// Keywords
function varKey () {
	var x = 5 + 6;
	var y = x * 10;
	document.getElementById("demo8").innerHTML = y;
}

// Case Sensitive
function casSen () {
	var lastName = "Doe";
	var lastname = "Peterson";
	document.getElementById("demo9").innerHTML = lastName;
}