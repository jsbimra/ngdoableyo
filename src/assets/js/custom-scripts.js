
"use strict";
/******************************************************************************************************************************
DoableModule
*******************************************************************************************************************************/
    var DoableModule = (function(){
       
       function resetTopHeaderStyle(){
            //$('#header').css({paddingTop: 0});
            //$('#header h1').css({marginTop: '10px'});
        }

        return {
            resetTopHeaderStyle : resetTopHeaderStyle
        };

    })();
    

/******************************************************************************************************************************
ANIMATIONS
*******************************************************************************************************************************/
(function($, DM) {
    "use strict";


    var isMobile = false;
    if (navigator.userAgent.match(/Android/i) || 
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) || 
        navigator.userAgent.match(/iPad/i)|| 
        navigator.userAgent.match(/iPod/i) || 
        navigator.userAgent.match(/BlackBerry/i)) {                 
        isMobile = true;            
    }
    if (isMobile == true) {
        $('body').removeClass('nomobile');
        $('.animated').removeClass('animated');
    }
    $(function() {
        if (isMobile == false) {
            $('*[data-animated]').addClass('animated');
        }
        function animated_contents() {
            $(".animated:appeared").each(function (i) {
                var $this    = $(this),
                    animated = $(this).data('animated');

                setTimeout(function () {
                    $this.addClass(animated);
                }, 50 * i);
            });
        }
        animated_contents();
        $(window).scroll(function () {
            animated_contents();
        });
    });
    
    $(document).ready(function(){
        
        //cookie close bar
        $(document).on('click', '.jsCloseCookie', function () {
            $(this).parents('.jsCookieNotify').slideUp();
            DM.resetTopHeaderStyle();
        });
        
        //Check if cookie notify element is in dom or not
        if(!$('.jsCloseCookie').length) {
            DM.resetTopHeaderStyle();
        }
    });

    
})(jQuery, DoableModule);

/******************************************************************************************************************************
BOOTSTRAP
*******************************************************************************************************************************/
// (function($) {
//     "use strict";
//         $('[data-rel=tooltip]').tooltip();
//         $(".alert").alert();
        
//         $("a.btn-progress").click(function(){
//         $('#bar-container').slideToggle(); 
//     });
// })(jQuery);
