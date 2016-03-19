// require.config({
//   paths: {
//     'jquery': 'vendor/jquery',
//     'resume': 'resume'
//   }
// });

// require('resume.js');

var resume = {};
resume.setFullScreenOfSection = function(){
  console.log("window is resized");
  $('.project-section').each(function(){
    $(this).css({
      'min-height': parseInt(window.innerHeight)+"px"
    });
  });
};

$(window).load(function(){
  resume.setFullScreenOfSection();
});


// Window resize function
var windowWidth = parseInt(window.innerWidth);
var windowHeight = parseInt(window.innerHeight);

var isResizedStopped = function(){
  var resizedWindowWidth = parseInt(window.innerWidth);
  var resizedWindowHeight = parseInt(window.innerHeight);
  if(resizedWindowWidth == windowWidth && resizedWindowHeight == windowHeight){
    resume.setFullScreenOfSection();
  }else{
    windowWidth = resizedWindowWidth;
    windowHeight = resizedWindowHeight;
  }
};

$(window).resize(function(){
  setTimeout(isResizedStopped, 50);
});
