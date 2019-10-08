$(document).ready(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    //event.stopPropagation();
    $("ul.shopping-list").append(
      '<li>' +
        '<span class="shopping-item">' + $('#shopping-list-entry').val() + '</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>'
    );
  });

  $("ul.shopping-list").on("click", "button.shopping-item-toggle", function(event) {
    $(this).closest("div.shopping-item-controls").prev().toggleClass("shopping-item__checked");
  })
  .on('click', 'li button.shopping-item-delete', function(event) {
    $(this).closest("li").remove();
  });
});
