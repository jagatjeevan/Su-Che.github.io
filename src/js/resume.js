define(['jquery'], 
function($){
  return{
    $(".page-section").each(function(){
      $(this).addClass('cover-full-screen');
    });
  };
});
