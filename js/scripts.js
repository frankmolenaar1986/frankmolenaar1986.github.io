$(document).ready(function() {
  var scrollable = true;

  $(".krux-page").each(function(){
    $(this).css( "height", $(window).innerHeight() + "px" );
  });

  $(window).on("resize", function(){    
    $(".krux-page").each(function(){
      $(this).css( "height", $(window).innerHeight() + "px" );
      $(".active:first-child").trigger("click");
    });
  });

  bindMouseWheel();

  $('.stretch').attr('draggable', false);
  
  $(".residents").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    adaptiveHeight: true      
  });

  $(".facilities").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    adaptiveHeight: true      
  });

  $(".projects").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    adaptiveHeight: true      
  });

  $(".infos").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    adaptiveHeight: true      
  });

  $(".residents-list a").on("click", function (e) {
    e.preventDefault();
    for(var i = 0; i < $(this).attr("data-page"); i++) {
      $(".slick-slider").slick("slickGoTo", $(this).attr("data-page"));
    }
  });

  $(".menu-button").on("click", function (e) {
    e.preventDefault();
    $(".slick-slider").slick("slickGoTo", 0, false);
  });  

  $(".slick-prev, .slick-next").hide();

  $(".fp-prev").on("click", function(){
    $(".slick-prev").trigger("click");
  });

  $(".fp-next").on("click", function(){
    $(".slick-next").trigger("click");
  });  

  $(".menu-button").click(function(e) {
    if (scrollable) {   
      scrollable = false;   
      $(document).off("mousewheel");
      $(document).bind("mousewheel", function(e) {
        e.preventDefault();
        return false;
      });

      e.preventDefault();       
      
      $("li").removeClass("active");

      $(this).parent("li").addClass("active");

      var page = $(this).attr("data-page");

      $('html, body').animate({
        scrollTop: $("." + page).offset().top          
      }, 500);

      setTimeout(function(){ 
        scrollable = true;
      }, 750); 

      setTimeout(function(){ 
        bindMouseWheel();
      }, 500);             
    }         
  });

  $(".resident-image").on("click", function(){
    $(".fp-next").trigger("click");
  });

  $(document).keydown(function(e) {
    switch(e.which) {
        case 33: // up
        previousMenuItem();
        break;

        case 34: // up
        nextMenuItem();
        break;

        case 37: // left
          $(".fp-prev").trigger("click");
        break;

        case 38: // up
        previousMenuItem();
        break;

        case 39: // right
          $(".fp-next").trigger("click");
        break;

        case 40: // down
        nextMenuItem();
        break;

        default: return; 
    }
    e.preventDefault(); 
  });              
}); 

var bindMouseWheel = function () {
  $(document).off("mousewheel");
  $(document).bind("mousewheel", function(e) {
    e.preventDefault();
    return false;
  });

  $(document).bind("mousewheel", function(e){
    if(e.originalEvent.wheelDelta < 0) {
      nextMenuItem();
    } else if (e.originalEvent.wheelDelta > 0)  {     
      previousMenuItem();
    }
    return false;
  }); 
}

var nextMenuItem = function () {
  var current = $("li.active");
  var next = current.next($("li"));
  next.find("a").trigger("click");
}   

var previousMenuItem = function () {
  var current = $("li.active");
  var previous = current.prev($("li"));
  previous.find("a").trigger("click");
}