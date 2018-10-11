var ch;

function preparar() {
	ch = document.getElementsByTagName("p")
}

function crear() {
	var hijo = document.createElement("p");
	var text = document.createTextNode("Hijo" + (ch.length + 1));
	hijo.appendChild(text);
	document.getElementById("tronco").appendChild(hijo);
	preparar();
}