function fizzBuzz (){
    var array=[];
    for (var i = 1; i<=20; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
        array.push('FizzBuzz');
     }
     else if (i % 3 === 0) {
        array.push('Fizz');
      }
     
      else if (i % 5 === 0) {
        array.push('Buzz');
       } 
       else {
        array.push(i);
       } 

       
    } 

    console.log(array.join (', '));

   
}
fizzBuzz ();