
jQuery(document).ready(function($){
  $('.button-collapse').sideNav();

  // RESUME PAGE HANDLING
  $("#education-container").hide();

  $("#education-button").click(function() {
    $("#education-button").css('color', '#607D8B');

    $("#experience-container").hide();
  });

  $("#dynamic-header").hide();


  // Window resize handling
  var $window = $(window);

  function checkWidth() {
    var windowsize = $window.width();
    var marginSize = windowsize/5;

    if (windowsize > 1150) {
      $("#dynamic-name-logo").css("margin-left", "20%");
      $("#dynamic-tab-container").css("margin-right", "20%");
      $("hr").css("margin-left", "20%");
      $("hr").css("margin-right", "20%");

      $(".art-container").css("width", "60%");
      $(".art-container").css("margin-left", marginSize);

      $(".text-container").css("width", "60%");
      $(".text-container").css("margin-left", marginSize);
      $(".skills-double-container").css("width", "60%");
      $(".skills-double-container").css("margin-left", marginSize);
      $(".skills-inner-container").css("width", "60%");
      $(".skills-inner-container").css("margin-left", marginSize);

      $(".title-container").css("width", "60%");
      $(".title-container").css("margin-left", marginSize);
      $(".form-container").css("width", "60%");
      $(".form-container").css("margin-left", marginSize);
    } else {
      $("#dynamic-name-logo").css("margin-left", 25);
      $("#dynamic-tab-container").css("margin-right", 20);
      $("hr").css("margin-left", 10);
      $("hr").css("margin-right", 10);

      $(".art-container").css("width", "98%");
      $(".art-container").css("margin-left", 10);

      $(".text-container").css("width", "98%");
      $(".text-container").css("margin-left", 10);
      $(".skills-double-container").css("width", "98%");
      $(".skills-double-container").css("margin-left", 10);
      $(".skills-inner-container").css("width", "98%");
      $(".skills-inner-container").css("margin-left", 10);

      $(".title-container").css("width", "98%");
      $(".title-container").css("margin-left", 10);
      $(".form-container").css("width", "98%");
      $(".form-container").css("margin-left", 10);
    }
  }

  checkWidth();
  //changeMargins();

  $(window).resize(checkWidth);
  //$(window).resize(changeMargins);


  $(function(){
  $(window).scroll(function() {
      var scroll = $(window).scrollTop(); // how many pixels you've scrolled
      var os = $('#header').offset().top; // pixels to the top of div1
      var ht = $('#header').height();
      if(scroll > os + ht + 75){
          $("#dynamic-header").fadeIn();
      }
      else {
        $("#dynamic-header").hide();
      }
  });
});

  // Projects Page Handling
  $(".skills-container").hide();

  $("#skills-button").click(function() {
    $(".skills-container").show();
    $(".projects-container").hide();

    $('#skills-button').css("color", "#B0BEC5");
    $('#projects-button').css("color", "#607D8B");
  });

  $("#projects-button").click(function() {
    $(".skills-container").hide();
    $(".projects-container").show();

    $("#skills-button").css("color", "#607D8B");
    $("#projects-button").css("color", "#B0BEC5");
  });


  //Art Page Handling
  $("#Photos-art-wrapper").hide();
  $("#2015-art-wrapper").hide();
  $("#2014-art-wrapper").hide();
  $("#2013-art-wrapper").hide();
  $("#2012-art-wrapper").hide();

  $("#Photos-art").click(function() {
    $("#Photos-art-wrapper").show();
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").hide();
    $("#2013-art-wrapper").hide();
    $("#2012-art-wrapper").hide();

    $('#Photos-art').css("color", "#B0BEC5");
    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#607D8B");
    $('#2013-art').css("color", "#607D8B");
    $('#2012-art').css("color", "#607D8B");
  });

  $("#2016-art").click(function() {
    $("#Photos-art-wrapper").hide();
    $("#2016-art-wrapper").show();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").hide();
    $("#2013-art-wrapper").hide();
    $("#2012-art-wrapper").hide();

    $('#Photos-art').css("color", "#607D8B");
    $('#2016-art').css("color", "#B0BEC5");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#607D8B");
    $('#2013-art').css("color", "#607D8B");
    $('#2012-art').css("color", "#607D8B");
  });

  $("#2015-art").click(function() {
    $("#Photos-art-wrapper").hide();
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").show();
    $("#2014-art-wrapper").hide();
    $("#2013-art-wrapper").hide();
    $("#2012-art-wrapper").hide();

    $('#Photos-art').css("color", "#607D8B");
    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#B0BEC5");
    $('#2014-art').css("color", "#607D8B");
    $('#2013-art').css("color", "#607D8B");
    $('#2012-art').css("color", "#607D8B");
  });

  $("#2014-art").click(function() {
    $("#Photos-art-wrapper").hide();
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").show();
    $("#2013-art-wrapper").hide();
    $("#2012-art-wrapper").hide();

    $('#Photos-art').css("color", "#607D8B");
    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#B0BEC5");
    $('#2013-art').css("color", "#607D8B");
    $('#2012-art').css("color", "#607D8B");
  });

  $("#2013-art").click(function() {
    $("#Photos-art-wrapper").hide();
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").hide();
    $("#2013-art-wrapper").show();
    $("#2012-art-wrapper").hide();

    $('#Photos-art').css("color", "#607D8B");
    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#607D8B");
    $('#2013-art').css("color", "#B0BEC5");
    $('#2012-art').css("color", "#607D8B");
  });

  $("#2012-art").click(function() {
    $("#Photos-art-wrapper").hide();
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").hide();
    $("#2013-art-wrapper").hide();
    $("#2012-art-wrapper").show();

    $('#Photos-art').css("color", "#607D8B");
    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#607D8B");
    $('#2013-art').css("color", "#607D8B");
    $('#2012-art').css("color", "#B0BEC5");
  });

  //Resume Page Handling
  $("#education-container").hide();
  $("#extracurricular-container").hide();

  $("#experience-button").click(function() {
    $("#experience-container").show();
    $("#education-container").hide();
    $("#extracurricular-container").hide();

    $('#experience-button').css("color", "#B0BEC5");
    $('#education-button').css("color", "#607D8B");
    $('#extracurricular-button').css("color", "#607D8B");
  });

  $("#education-button").click(function() {
    $("#experience-container").hide();
    $("#education-container").show();
    $("#extracurricular-container").hide();

    $('#experience-button').css("color", "#607D8B");
    $('#education-button').css("color", "#B0BEC5");
    $('#extracurricular-button').css("color", "#607D8B");
  });

  $("#extracurricular-button").click(function() {
    $("#experience-container").hide();
    $("#education-container").hide();
    $("#extracurricular-container").show();

    $('#experience-button').css("color", "#607D8B");
    $('#education-button').css("color", "#607D8B");
    $('#extracurricular-button').css("color", "#B0BEC5");
  });

  // Photo Stream Handling

  // Form Handling
  $("#submit-message").hide();
  $("#error-message").hide();
  $("#error-text-1").hide();
  $("#error-text-2").hide();
  $("#error-text-3").hide();
  $("#error-text-4").hide();

  $(".submit-button").click(function(){
    if(checkForm() == true) {
      $(".title-container").hide();
      $("#form").hide();
      $("#error-message").hide();
      $(".submit-button").hide();
      $("#submit-message").show();
    } else {
      $("#error-message").show();
    }
  });

  function checkForm() {
    $("#error-text-1").hide();
    $("#error-text-2").hide();
    $("#error-text-3").hide();
    $("#error-text-4").hide();

    var ret = true;

    var myName = document.forms["form-name"]["name"].value;
    var myEmail = document.forms["form-email"]["email"].value;
    var myMessage = document.forms["form-message"]["fmessage"].value;

    if(myName == null || myName == "") {
      $("#error-text-1").show();
      ret = false;
    }

    if(myEmail.indexOf('@') == -1) {
      $("#error-text-4").show();
      ret = false;
    }

    if(myEmail == null || myEmail == "") {
      $("#error-text-2").show();
      ret = false;
    }

    if(myMessage == null || myMessage == "") {
      $("#error-text-3").show();
      ret = false;
    }

    return ret;
  }
});
