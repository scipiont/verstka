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
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
          //  console.log(blockOffset);
       $("html, body").animate({
            scrollTop: blockOffset
       }, 500);
     });

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