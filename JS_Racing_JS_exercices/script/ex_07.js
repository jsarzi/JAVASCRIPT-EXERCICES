function dessiner (){ 

var canvas = document.getElementsByTagName ("canvas");
//var buttons = document.gettlementsbylagName( "button");
if (canvas.getContext) {
var ctxt = canvas.getContext("2d") ;

ctxt.beginPath();
ctxt.moveTo(6,6);
ctxt. lineTo(14, 10);
ctxt.lineTo(6,14);
//ctxt.closePath();
ctxt.fill();

}

ctxt. borderWidth = 1;
ctxt. strokeStyle = 'red';
ctxt.stroke();
ctxt.fillStyle = 'red'
ctxt.fill();

var media = new Audio() ;
media.src="triangle.ogg";

canvas. onclick = function() {
console. log ("button: play (canvas)") ;
media.play();
txt. strokeStyle = 'orange';
ctxt.stroke();
txt.fillStyle = 'orange';
ctxt.fill();
}
};
