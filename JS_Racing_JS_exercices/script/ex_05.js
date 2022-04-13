//function increaseFontSizeBy100px() {
    //document.getElementById('a').style.fontSize = "10px";
//}
//function changeFontSize(target) {
    //var demo = document.getElementById("demo");
    //var computedStyle = window.getComputedStyle
         // ? getComputedStyle(demo) // Standards
          //: demo.currentStyle;     // Old IE
    //var fontSize;
  
   // if (computedStyle) { // This will be true on nearly all browsers
        //fontSize = parseFloat(computedStyle && computedStyle.fontSize);
  
        //if (target == document.getElementById("button1")) {
         // fontSize += 5;
       // } else if (target == document.getElementById("button2")) {
        //  fontSize -= 5;
       // }
       // demo.style.fontSize = fontSize + "px";
   // }
 // }

 var size = 1;

 function increase() {

    size += 0.25;

   //body = document.getElementById('body');

    document.getElementById('body').style.fontSize= size + "em";

}

function decrease() {

    size -= 0.25;

    //body = document.getElementById('body');

    document.getElementById('body').style.fontSize= size + "em";

}

function changeBG (){
    
        //document.getElementById("body").style.backgroundColor = getElementByValue('change');
        var selectedBGColor = document.getElementById('bgchoice').value;
        document.body.style.backgroundColor = selectedBGColor;
      }

