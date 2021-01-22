var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var hexValues = "0123456789ABCDEF";
var hexStringLength = hexValues.length;
var hexLength = 6;
var randomHex = "";

console.log(css);

function setGradient() {
	body.style.background =
		"linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function chooseRandomColor() {
	randomHex = "#";

	for (var i = 0; i < hexLength; i++) {
		randomHex += hexValues.charAt(
			Math.floor(Math.random() * hexStringLength)
		);
	}

	return randomHex;
}

function randomColorSetter() {
	color1.value = chooseRandomColor();
	color2.value = chooseRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

color1.value = "#FF0000";
color2.value = "#FFFF00";

button.addEventListener("click", randomColorSetter);

setGradient();
