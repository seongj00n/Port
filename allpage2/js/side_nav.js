/*사이드 네비 클릭시 해당 페이지로 이동*/
/*윈도우사양에 따라 다를 수 있음...해결하기 학원컴 window7*/

$(function () {
  $(".side_nav li:eq(0)").css({ background: "#353f67" });
  $(".side_nav li a:eq(0)").css({ color: "#fff" });

  $(".side_nav li:eq(0)").click(function () {
    $(".side_nav li").css({ background: "#fff" });
    $(".side_nav li a").css({ color: "#000" });
    $(".side_nav li:eq(0)").css({ background: "#353f67" });
    $(".side_nav li a:eq(0)").css({ color: "#fff" });
  });

  $(".side_nav li:eq(1)").click(function () {
    $(".side_nav li").css({ background: "#fff" });
    $(".side_nav li a").css({ color: "#000" });
    $(".side_nav li:eq(1)").css({ background: "#353f67" });
    $(".side_nav li a:eq(1)").css({ color: "#fff" });
  });

  $(".side_nav li:eq(2)").click(function () {
    $(".side_nav li").css({ background: "#fff" });
    $(".side_nav li a").css({ color: "#000" });
    $(".side_nav li:eq(2)").css({ background: "#353f67" });
    $(".side_nav li a:eq(2)").css({ color: "#fff" });
  });

  $(".side_nav li:eq(3)").click(function () {
    $(".side_nav li").css({ background: "#fff" });
    $(".side_nav li a").css({ color: "#000" });
    $(".side_nav li:eq(3)").css({ background: "#353f67" });
    $(".side_nav li a:eq(3)").css({ color: "#fff" });
  });

  $(".side_nav li:eq(4)").click(function () {
    $(".side_nav li").css({ background: "#fff" });
    $(".side_nav li a").css({ color: "#000" });
    $(".side_nav li:eq(4)").css({ background: "#353f67" });
    $(".side_nav li a:eq(4)").css({ color: "#fff" });
  });

  $(".side_nav li:eq(5)").click(function () {
    $(".side_nav li").css({ background: "#fff" });
    $(".side_nav li a").css({ color: "#000" });
    $(".side_nav li:eq(5)").css({ background: "#353f67" });
    $(".side_nav li a:eq(5)").css({ color: "#fff" });
  });
});
