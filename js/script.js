
// carasoul 
$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 6,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });
 
});

  // loadmore button 
  $( document ).ready(function () {
    $(".moreBox").slice(0, 2).show();
    if ($(".blogBox:hidden").length != 0) {
            $("#loadMore").show();
    }               
    $("#loadMore").on('click', function (e) {
            e.preventDefault();
            $(".moreBox:hidden").slice(0, 6).slideDown();
            if ($(".moreBox:hidden").length == 0) {
                    $("#loadMore").fadeOut('slow');
            }
    });
});   

$(document).ready(function() {

  var owl = $("#owl-demo1");

  owl.owlCarousel({

      items: 3, //10 items above 1000px browser width
      itemsDesktop: [1000, 3], //5 items between 1000px and 901px
      itemsDesktopSmall: [900, 2], // 3 items betweem 900px and 601px
      itemsTablet: [600, 1], //2 items between 600 and 0;
      itemsMobile: [360, 1] // itemsMobile disabled - inherit from itemsTablet option

  });

  // Custom Navigation Events
  $(".next").click(function() {
      owl.trigger('owl.next');
  })
  $(".prev").click(function() {
      owl.trigger('owl.prev');
  })
  $(".play").click(function() {
      owl.trigger('owl.play', 1000);
  })
  $(".stop").click(function() {
      owl.trigger('owl.stop');
  })

});

  
  // counter 
  $("#counter1").countMe(100,110);
  $("#counter2").countMe(10,180);
  $("#counter3").countMe(160,60);
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:6, 
      // items change number for slider display on desktop
      
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
  
 

