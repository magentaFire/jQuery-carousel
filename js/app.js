$(document).ready(function(){
  $('[id^="imgToggle"]').css("display","none");
  $("#imgToggle01").css("display","flex");

// función para botones estrella
  $('[id^="star"]').click(function(){
    if (this.id == "star01") {
      $("#imgToggle01").css("display","flex")
      $("#imgToggle02").css("display","none")
      $("#imgToggle03").css("display","none")
      $("#imgToggle04").css("display","none")
      $("#imgToggle05").css("display","none")
    }
    else if (this.id == "star02") {
      $("#imgToggle01").css("display","none")
      $("#imgToggle02").css("display","flex")
      $("#imgToggle03").css("display","none")
      $("#imgToggle04").css("display","none")
      $("#imgToggle05").css("display","none")
    }
    else if (this.id == "star03") {
      $("#imgToggle01").css("display","none")
      $("#imgToggle02").css("display","none")
      $("#imgToggle03").css("display","flex")
      $("#imgToggle04").css("display","none")
      $("#imgToggle05").css("display","none")
    }
    else if (this.id == "star04") {
      $("#imgToggle01").css("display","none")
      $("#imgToggle02").css("display","none")
      $("#imgToggle03").css("display","none")
      $("#imgToggle04").css("display","flex")
      $("#imgToggle05").css("display","none")
    }
    else if (this.id == "star05") {
      $("#imgToggle01").css("display","none")
      $("#imgToggle02").css("display","none")
      $("#imgToggle03").css("display","none")
      $("#imgToggle04").css("display","none")
      $("#imgToggle05").css("display","flex")
    }
  });
});
