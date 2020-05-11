let comment = function(name, email) {
    if (!name || !email) {
      alert("Please enter your name.");
    }else {
      alert(name + "We have received your message.Thanks for reaching out to us.");
    }
  }
  $(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var userName = $("#name").val();
      var email = $("#email").val();
      comment(userName, email);
    });
  });
  $(document).ready(function(){
    $(".details1").click(function(){
      $("#design").toggle();
      $(".toggleDesignLogo").toggle();
    })
    $(".details2").click(function(){
      $("#development").toggle();
      $(".toggleDevLogo").toggle();
    })
    $(".details3").click(function(){
      $("#product").toggle();
      $(".toggleProductLogo").toggle();
    });
  });
  $(document).ready(function(){
    $(".workLogo1").hover(function(){
      $(".text1").fadeToggle();
    });
    $(".workLogo2").hover(function(){
      $(".text2").fadeToggle();
    });
    $(".workLogo3").hover(function(){
      $(".text3").fadeToggle();
    });
    $(".workLogo4").hover(function(){
      $(".text4").fadeToggle();
    });
    $(".workLogo5").hover(function(){
      $(".text5").fadeToggle();
    });
    $(".workLogo6").hover(function(){
      $(".text6").fadeToggle();
    });
    $(".workLogo7").hover(function(){
      $(".text7").fadeToggle();
    });
    $(".workLogo8").hover(function(){
      $(".text8").fadeToggle();
    });
  });