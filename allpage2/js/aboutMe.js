// random img

$(function () {
  let randomNumber = Math.floor(Math.random() * 2) + 1;

  $(".randomImg")
    .children("img")
    .attr("src", "img/random_img" + randomNumber + ".png");
});

// right text fade in-out

$(function () {
  $(window).scroll(function () {
    $(".aboutMeEtc").each(function (i) {
      const bottom_of_element = $(this).offset().top + $(this).outerHeight();
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).stop().animate({ opacity: "1", "margin-left": "0px" }, 1000);
      } else {
        $(this).stop().animate({ opacity: "0", "margin-left": "100px" }, 100);
      }
    });
  });
});
