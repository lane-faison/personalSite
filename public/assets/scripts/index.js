$(document).ready(function () {

  $('.tech-logos').on('mouseover',showInfo);
  $('.tech-logos').on('mouseleave',hideInfo);

})

function showInfo() {
  var title = $(this).attr("title");
  var name = $(this).attr("name");
  var $title = '<p class="tool-name">' + title + '</p>';

  if (name === "fav") $('.hovered-fav-tool').append($title);
  if (name === "eager") $('.hovered-eager-tool').append($title);
}

function hideInfo() {
 $('.tool-name').remove();
}
