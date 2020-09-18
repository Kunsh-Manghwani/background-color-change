window.setInterval(function(){
    var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
 
  $("document").ready(function(){
    
    $("#btn").on("click",function(){
      
      $("body").css({
        'background-color': randomColor,
      });
    });
  });
 },2000);
 