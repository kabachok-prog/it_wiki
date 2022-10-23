$(document).ready(function() {
  $(window).on("scroll", function() {
    console.log($(this).scrollTop())
    if($(this).scrollTop() >= 1){
      // set to new image
      $(".brand-logo img").attr("src","../images/about_images/biblio.jpg");
    } else {
      //back to default
      $(".brand-logo img").attr("src","../images/about_images/1.jpg");
    }
  })
})