$(document).ready(
  function () {
  $('.next').click(
    function (){
      goNext();
    }
  );
  $('.prev').click(
    function (){
      goBack();
    }
  );
  }
);

// funzione next
function goNext() {
  var activeImg = $('img.active');
  var nextImg = activeImg.next();
  var activeCircle = $('i.active');
  var nextCircle = activeCircle.next();
    if (activeImg.hasClass('last') == true && activeCircle.hasClass('last') == true) {
    activeImg.removeClass('active');
    $('img.first').addClass('active');
    activeCircle.removeClass('active');
    $('i.first').addClass('active');
  }
  activeImg.removeClass('active');
  nextImg.addClass('active');
  activeCircle.removeClass('active');
  nextCircle.addClass('active');
}

// funzione back
function goBack() {
  var activeImg = $('img.active');
  var backImg = activeImg.prev();
  var activeCircle = $('i.active');
  var backCircle = activeCircle.prev();
  if (activeImg.hasClass('first') == true && activeCircle.hasClass('first')) {
    activeImg.removeClass('active');
    $('img.last').addClass('active');
    activeCircle.removeClass('active');
    $('i.last').addClass('active');
  }
  activeImg.removeClass('active');
  backImg.addClass('active');
  activeCircle.removeClass('active');
  backCircle.addClass('active');
}
