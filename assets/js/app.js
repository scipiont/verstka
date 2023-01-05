 $(function() {
     var header = $("#header"),
         introH = $("#intro").innerHeight(),
         scrollOffset = $(window).scrollTop();
     
     /*Fixed Header*/    
     checkScroll(scrollOffset);

     $(window).on("scroll", function(){

         scrollOffset = $(this).scrollTop();
         checkScroll(scrollOffset);
     });

     function checkScroll(scrollOffset){
        
         if (scrollOffset >= introH) {
             header.addClass("fixed");
         } else {
             header.removeClass("fixed");
       }
     }

     /* Smooth Scroll */
     $("[data-scroll]").on("click",function(event){
        event.preventDefault();
        var $this = $(this),
            blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass("active");
       $this.addClass("active")     
          //  console.log(blockOffset);
       $("html, body").animate({
            scrollTop: blockOffset
       }, 500);
     });
            /* Menu nav toggle */
     $("#nav_toggle").on("click",function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    
    });
            /*Collapse*/
        $("[data-collapse]").on("click", function(event) {
            event.preventDefault();
            var $this = $(this),
                blockId = $(this).data('collapse');
             $this.toggleClass("active");
            $(blockId).slideToggle();   
        });
            /* Slider */
         $("[data-slider]").slick({
            infinite: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1
         })   

 });
           







// $(function(){
//         var header = $("#header");
//         var introH = $("#intro").innerHeight();
//         var scrollOffset = 0;

//         $(window).on("scroll", function() {
            
            
//             scrollOffset = $(this).scrollTop();
//             //console.log(scrollOffset);
//                     if (scrollOffset >= introH) {
//                        header.addClass("fixed");
//                     } else {
//                            header.removeClass("fixed");
//                     }
//         })



// })