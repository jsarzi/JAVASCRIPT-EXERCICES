function drawTriangle (height){

    var i = 0;
    var triangle = "";

    if (isNaN(height)){
        console.log('error');
    } else {
    while (i < height) {
        triangle += "$";
        i++;
        console.log(triangle);
    } 

}

}

