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
