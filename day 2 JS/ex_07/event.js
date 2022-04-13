$(function(){

  $("p").on({
  
  mouseenter: function(){
  
  $(this).css("background",'lightgrey');
  
  }, mouseleave: function(){
  
  $(this).css("background","white");
  
  }, click:function(){
  
  $(this).hide();
  
  },
  
  });
  
  });