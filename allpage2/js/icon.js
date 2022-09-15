$(function () {
  $(".icon_list > li")
    .mouseenter(function () {
      $(".address").stop().show();
      $(".address").eq($(this).index()).stop().show();
    })
    .mouseleave(function () {
      $(".address").stop().hide();
      $(".address").eq($(this).index).stop().hide();
    });
});
