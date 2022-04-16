$(window).scroll(function() {
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var floaterHeight = $('#cashOffer').outerHeight(true);
    var fromBottom = 400;
    var top = winScrollTop + winHeight - floaterHeight - fromBottom;
  $('#cashOffer').css({'top': top + 'px'});
  });