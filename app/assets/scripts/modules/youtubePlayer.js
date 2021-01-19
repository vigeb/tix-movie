$(".modal-youtube-player").each(function() {
  $(this).on("hidden.bs.modal", function() {
    $(this).find("iframe").first().attr("src", $(this).find("iframe").first().attr("src"))
  })
})