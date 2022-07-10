$("document").ready(function () {
  $(".tab-slider--body").hide();
  $(".tab-slider--body:first").show();
});

$(".tab-slider--nav li").click(function () {
  $(".tab-slider--body").hide();
  var activeTab = $(this).attr("rel");
  $("#" + activeTab).fadeIn();
  if ($(this).attr("rel") == "tab2") {
    $(".tab-slider--tabs").addClass("tab-slider--tabsslide");
  } else {
    $(".tab-slider--tabs").removeClass("tab-slider--tabsslide");
  }
  $(".tab-slider--nav li").removeClass("tab-slider--triggeractive");
  $(this).addClass("tab-slider--triggeractive");
});
