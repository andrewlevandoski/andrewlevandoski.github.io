
jQuery(document).ready(function($){
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

  //Art Page Handling
  $("#2015-art-wrapper").hide();
  $("#2014-art-wrapper").hide();

  $("#2016-art").click(function() {
    $("#2016-art-wrapper").show();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").hide();

    $('#2016-art').css("color", "#B0BEC5");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#607D8B");
  });

  $("#2015-art").click(function() {
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").show();
    $("#2014-art-wrapper").hide();

    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#B0BEC5");
    $('#2014-art').css("color", "#607D8B");
  });

  $("#2014-art").click(function() {
    $("#2016-art-wrapper").hide();
    $("#2015-art-wrapper").hide();
    $("#2014-art-wrapper").show();

    $('#2016-art').css("color", "#607D8B");
    $('#2015-art').css("color", "#607D8B");
    $('#2014-art').css("color", "#B0BEC5");
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

    $('#experience-button').css("color", "607D8B");
    $('#education-button').css("color", "#607D8B");
    $('#extracurricular-button').css("color", "#B0BEC5");
  });

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
