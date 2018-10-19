
var ch;
var select;
var nodos [];
// var coinImage = new Image();
// coinImage.src = "img/coin-sprite-animation.png";

// function sprite (options) {
				
//     var that = {};
					
//     that.context = options.context;
//     that.width = options.width;
//     that.height = options.height;
//     that.image = options.image;

//     return that;
// }

function preparar() {
	ch = document.getElementsByTagName("li")
}

function crear() {
	var rama = document.crea teElement("li");
	var contenido = document.createTextNode("rama" );
	rama.appendChild(contenido);
	
	rama = document.getElementById("tronco").appendChild(rama);
	// hoja.insertLater(contenido,rama);

	preparar();
}
function eliminar() {
	// var del.getElementById("li").remove();
}
function selector(){

	select = document.getElementsByTagName("li")[0];
}

// $('button').on('click', function (e) {
//     e.crear();