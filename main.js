$(document).ready(
  function () {
  $('.next').click(
    function () {
      goNext();
    }
  );
  $('.prev').click(
    function () {
      goBack();
    }
  );
  }
);

// funzione next
function goNext() {
  // dichiaro le variabili
  var activeImg = $('img.active');
  var nextImg = activeImg.next();
  var activeCircle = $('i.active');
  var nextCircle = activeCircle.next();
  // faccio una condizione per tornare alla prima immagine quando arrivo all'ultima e lo stesso con il pallino blu
    if (activeImg.hasClass('last') == true && activeCircle.hasClass('last') == true) {
    activeImg.removeClass('active');
    $('img.first').addClass('active');
    activeCircle.removeClass('active');
    $('i.first').addClass('active');
  }
  // per passare all'immagine successiva con il click sul div next rimuovo la classe active dall'immagine visualizzata attuale e la metto all'immagine seguente e lo stesso per il pallino blu
  activeImg.removeClass('active');
  nextImg.addClass('active');
  activeCircle.removeClass('active');
  nextCircle.addClass('active');
}

// funzione back
function goBack() {
  // dichiaro le variabili
  var activeImg = $('img.active');
  var backImg = activeImg.prev();
  var activeCircle = $('i.active');
  var backCircle = activeCircle.prev();
  // faccio una condizione per tornare alla prima immagine quando arrivo all'ultima e lo stesso con il pallino blu
  if (activeImg.hasClass('first') == true && activeCircle.hasClass('first')) {
    activeImg.removeClass('active');
    $('img.last').addClass('active');
    activeCircle.removeClass('active');
    $('i.last').addClass('active');
  }
  // per passare all'immagine precedente con il click sul div prev rimuovo la classe active dall'immagine visualizzata attuale e la metto all'immagine precendente e lo stesso per il pallino blu
  activeImg.removeClass('active');
  backImg.addClass('active');
  activeCircle.removeClass('active');
  backCircle.addClass('active');
}
