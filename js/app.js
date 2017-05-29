$(document).ready(function(){
  //Esconde todas las imágenes y luego muestra la primera
  $('[id^="imgToggle"]').hide();
  $("#imgToggle01").show();

  //función para botones flecha
  $('[class^="navButton"]').click(function(){
    if (this.id == "forward") {
      $('[id^="imgToggle"]').hide();
      
    }
    else if (this.id == "backward") {
      console.log("adioli");
    }
  });

  //función temporizador

  // función para botones estrella
  $('[id^="star"]').click(function(){
    if (this.id == "star01") {
      $("#imgToggle01").show()
      $("#imgToggle02").hide()
      $("#imgToggle03").hide()
      $("#imgToggle04").hide()
      $("#imgToggle05").each()
    }
    else if (this.id == "star02") {
      $("#imgToggle01").hide()
      $("#imgToggle02").show()
      $("#imgToggle03").hide()
      $("#imgToggle04").hide()
      $("#imgToggle05").hide()
    }
    else if (this.id == "star03") {
      $("#imgToggle01").hide()
      $("#imgToggle02").hide()
      $("#imgToggle03").show()
      $("#imgToggle04").hide()
      $("#imgToggle05").hide()
    }
    else if (this.id == "star04") {
      $("#imgToggle01").hide()
      $("#imgToggle02").hide()
      $("#imgToggle03").hide()
      $("#imgToggle04").show()
      $("#imgToggle05").hide()
    }
    else if (this.id == "star05") {
      $("#imgToggle01").hide()
      $("#imgToggle02").hide()
      $("#imgToggle03").hide()
      $("#imgToggle04").hide()
      $("#imgToggle05").show()
    }
  });
});
