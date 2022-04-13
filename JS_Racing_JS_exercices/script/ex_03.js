var footer = document.getElementsByTagName("footer")[0];
var div = footer.getElementsByTagName("div")[0];
var button = div;

button.onclick = function question() {

	var person = window.prompt("What is your name ?");
	if (person) {
		var confirm = window.confirm("Are you sure that "+person+" is your name ?");
		if (confirm) {
			alert("Hello "+person+" !");
			div.innerHTML = "Hello "+person+" !";
		}
	}
};
var button = div;





