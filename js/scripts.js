$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#doge").prepend("<li>Woof!</li>");
    $("ul#doge").children("li").first().click(function() {
      $(this).remove();
    });

  });
  $("button#wow").click(function() {
    $("ul#doge").prepend("<li>Wow!</li>");
    $("ul#doge").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#cat").prepend("<li>Please kill me...</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
