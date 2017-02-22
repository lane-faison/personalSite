$(document).ready(function () {
  $('.col-md-4').on('mouseover', function () {
    $(this).addClass('moveUp');
  })
  $('.col-md-4').on('mouseleave', function () {
    $(this).removeClass('moveUp');
  })
})
