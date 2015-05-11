
/*var main = function(){
 $('.glyphicon glyphicon-chevron-right').click(function(){
 var currentSlide =$('.active-slide');
 var nextSlide = currentSlide.next();
 
 currentSlide.fadeOut(600).removeClass('active-slide');
 nextSlide.fadeIn(600).addClass('active-slide');
 });
 
 $('.glyphicon glyphicon-chevron-left').click(function(){
  var currentSlide =$('.active-slide');
 var nextSlide = currentSlide.prev();
 
 currentSlide.fadeOut(600).removeClass('active-slide');
 nextSlide.fadeIn(600).addClass('active-slide');	
 });
}*/

var main = function(){
 $('.arrow-next').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();
    }
    
    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');
  });

 $('.arrow-prev').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    if(prevSlide.length === 0) {
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();
    }
      currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');
  });
};

$(document).ready(main);
