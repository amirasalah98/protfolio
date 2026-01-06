$('.offcanvas-start').on('shown.bs.offcanvas', function () {
  $('.main-content')
    .removeClass('full-width')
    .addClass('half-width');
});

$('.offcanvas-start').on('hidden.bs.offcanvas', function () {
  $('.main-content')
    .removeClass('half-width')
    .addClass('full-width');
});

