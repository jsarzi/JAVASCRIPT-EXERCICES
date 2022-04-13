function range(start, end, step) {
    var array= [];
    
    var counter = step || 1;

    
            if (step == undefined){
                step = 1;
            }
            else {
            counter = step;
            }
            
            if (step>0){
            for (var i=start; i<=end; i += step){
                array.push (i)}

             }  else {
        
             for (var i=start; i>=end; i +=step){
                array.push (i)}
               
            }
          
        
          return array;
        }
    
