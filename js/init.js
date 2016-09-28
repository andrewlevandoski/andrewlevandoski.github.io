(function($){
  $(function(){

      $('.button-collapse').sideNav();

      // RESUME PAGE HANDLING
      $("#education-container").hide();

      $("#education-button").click(function() {
        $("#education-button").css('color', '#607D8B');

        $("#experience-container").hide();
      });

      $("#dynamic-header").hide();

      $(function(){
      $(window).scroll(function() {
          var scroll = $(window).scrollTop(); // how many pixels you've scrolled
          var os = $('#header').offset().top; // pixels to the top of div1
          var ht = $('#header').height(); // height of div1 in pixels
          // if you've scrolled further than the top of div1 plus it's height
          // change the color. either by adding a class or setting a css property
          if(scroll > os + ht + 75){
              $("#dynamic-header").show();
          }
          else {
            $("#dynamic-header").hide();
          }
      });
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
