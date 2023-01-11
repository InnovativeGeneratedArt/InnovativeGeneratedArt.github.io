var folder = "./img/Julia1/";

$.ajax({
  url: folder,
  success: function (data) {
    $(data)
      .find("a")
      .attr("href", function (i, val) {
        if (val.match(/\.(jpe?g|png|gif)$/)) {
          $("body").append("<h1>" + val + "'</h1>");
          $("body").append("<img src='" + folder + val + "'>");
          $("body").append("<br>");
        }
      });
  },
});
