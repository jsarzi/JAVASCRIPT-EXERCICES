let timeout;
$(function(){
    $(".test").click(function(){
      $(this).hide();
      
      timeout = setTimeout(alertFunc, 200);
    
      
      
      });
      
      function alertFunc(){
          alert("The paragraph is now hidden");
      }
    });
     

    
