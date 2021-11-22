$(document).ready(function () {
  $(".fig1").click(function () {
    $(this).hide();
    $("#description1").show();
  });
  $("#description1").click(function () {
    $(this).hide();
    $(".fig1").show();
  });
  $(".fig2").click(function () {
    $(this).hide();
    $("#description2").show();
  });
  $("#description2").click(function () {
    $(this).hide();
    $(".fig2").show();
  });
  $(".fig3").click(function () {
    $(this).hide();
    $("#description3").show();
  });
  $("#description3").click(function () {
    $(this).hide();
    $(".fig3").show();
  });
  $(".card").mouseover(function () {
    $(this).children(".imgs").show();
  });
  $(".card").mouseout(function () {
    $(this).children(".imgs").hide();
  });
  $(".button").click(function () {
    var name = $("#nameInput").val();
    var email = $("#emailInput").val();
    var comment = $("#floatingTextarea").val();
    var key = "0c2201a636373bc7e4643d2229e05e12-us1";
    alert(
      "Hi " +
        name +
        ", we have received your message. Thank you for reaching out to us."
    );
  });
  $(".button").on("click", function () {
    $("form").each(function () {
      this.reset();
    });
  });
});
