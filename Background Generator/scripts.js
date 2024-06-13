var css = document.querySelector("h3");
var color1 = document.querySelector(".c1");
var color2 = document.querySelector(".c2");
var body = document.getElementById("gradient")

function alterGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", alterGradient)

color2.addEventListener("input", alterGradient)