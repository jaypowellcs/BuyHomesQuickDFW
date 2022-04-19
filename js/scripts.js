$(window).scroll(function() {
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var floaterHeight = $('#cashOffer').outerHeight(true);
    var fromBottom = 400;
    var top = winScrollTop + winHeight - floaterHeight - fromBottom;
  $('#cashOffer').css({'top': top + 'px'});
  });

  function sendmail() {
    let params = {
      firstName: document.getElementById("inputFirstName").value, 
      lastName: document.getElementById("inputLastName").value, 
      email: document.getElementById("inputEmail").value, 
    }
    emailjs.send("service_0ufhb2t", "template_hpoostp", params).then(function(res) {
       console.log("Success " + res.status);
    })
  };