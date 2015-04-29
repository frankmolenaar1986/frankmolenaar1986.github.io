$(document).ready(function() {
  $(".krux-page").each(function(){
    $(this).css( "height", $(window).innerHeight() + "px" );
  });

  $(window).on("resize", function(){
    $(".krux-page").each(function(){
      $(this).css( "height", $(window).innerHeight() + "px" );
    });
  });
  
  bindMouseWheel();

  $('.stretch').attr('draggable', false);
  
  $(".residents").slick({
    
    slidesToShow: 1,
    adaptiveHeight: false      
  });

  $(".facilities").slick({
    
    slidesToShow: 1,
    adaptiveHeight: false      
  });

  $(".projects").slick({
    
    slidesToShow: 1,
    adaptiveHeight: false      
  });

  $(".infos").slick({
    lazyLoad: 'ondemand',
    slidesToShow: 1,
    adaptiveHeight: false      
  });

  $(".residents-list a").on("click", function (e) {
    e.preventDefault();
    for(var i = 0; i < $(this).attr("data-page"); i++) {
      $(".slick-slider").slick("slickGoTo", $(this).attr("data-page"));
    }
  });

  $(".residents-menu-button").on("click", function (e) {
    e.preventDefault();
    $(".residents.slick-slider").slick("slickGoTo", 0);
  });

  $(".slick-prev, .slick-next").hide();

  $(".fp-prev").on("click", function(){
    $(".slick-prev").trigger("click");
  });

  $(".fp-next").on("click", function(){
    $(".slick-next").trigger("click");
  });  

  $(".menu-button").click(function(e) {
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

    setTimeout(function(){ bindMouseWheel(); }, 520);          
  });

  /***********************************
  /* This is the drag up and down part
  $(".krux-page").each(function(){
    $(this).bind('inview', function(event, isInView, visiblePartX, visiblePartY) {
      var page = $(this).attr("data-page");
      if (isInView) {
        $(".menu-button[data-page='" + page + "']").parent("li").addClass("active");          
      } else {
        $(".menu-button[data-page='" + page + "']").parent("li").removeClass("active"); 
      }
    });
  });
  
  var clicking = false;
  var mouseY = 0;
  var mousemoved = 0;

  $("html:not(.slick-track)").mousedown(function(){
      clicking = true;
      $("html").css({
        "cursor": "move"
      });         
  });

  $("html").mouseup(function(){
      clicking = false;
      mousemoved = 0;
      $("html").css({
        "cursor": "auto"
      }); 
  })

  $("html").mousemove(function(e){
      if(clicking == false) return;
      if (e.pageY < mouseY) {
        mousemoved++;
      } else {
        mousemoved--;
      }
      if (mousemoved > 25) {
        nextMenuItem();
        mousemoved = 0;
      } else if (mousemoved < -25){
        previousMenuItem();
        mousemoved = 0;
      }
      mouseY = e.pageY;  
  });*/                
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
    } else {     
      previousMenuItem();
    }
    return false;
  });

  $(document).bind("DOMMouseScroll", function(e) {
    e.preventDefault();
    return false;
  });
  $(document).bind("DOMMouseScroll", function(e){
    if(e.originalEvent.wheelDelta < 0) {
      nextMenuItem();
    } else {     
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