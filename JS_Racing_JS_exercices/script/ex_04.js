

var data = "";

var result = [];



function display() {

    window.addEventListener('keydown', function (e) {data = e.key});

    result.push(data);

    document.getElementById('whiteBox').innerHTML = result.join("").slice(-42);

}