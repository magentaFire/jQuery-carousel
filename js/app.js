$(document).ready(function(){
  //Esconde todas las imágenes y luego muestra la primera
  $('[id^="imgToggle"]').hide();
  $("#imgToggle01").show();

  //función para botones flecha
  var images = $("img");
  var numbers = 1;

  $('[class^="navButton"]').click(function(){
    images.hide();
    if (this.id == "forward"){
      document.getElementById("imgToggle0" + numbers).style.display = "flex";
      if(numbers >= 5){
        numbers = 0;
      }
      numbers += 1;
    }
    else if (this.id == "backward"){
      document.getElementById("imgToggle0" + numbers).style.display = "flex";
      if(numbers <= 1){
        numbers = 6;
      }
      numbers -= 1;
    }
  });

  //función temporizador
  setInterval(avanzaAuto, 2000);
  function avanzaAuto(){
    images.hide();
    document.getElementById("imgToggle0" + numbers).style.display = "flex";
    if(numbers >= 5){
      numbers = 0;
    }
    numbers += 1;
  }

  // función para botones estrella
  $('[id^="star"]').click(function(){
    if (this.id == "star01") {
      $("#imgToggle01").show()
      $("#imgToggle02").hide()
      $("#imgToggle03").hide()
      $("#imgToggle04").hide()
      $("#imgToggle05").hide()
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
