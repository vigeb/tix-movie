
  setTimeout(function() {
    $(".owl-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
          loop: false,
          nav: false,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
        },
        992: {
          items: 1,
          loop: true,
          navText: [
            '<i class="fa fa-chevron-left" aria-hidden="true"></i>',
            '<i class="fa fa-chevron-right" aria-hidden="true"></i>',
          ],
          navClass: ['absolute top-1/2 left-0 transform -translate-y-1/2 text-6xl text-gray-500 -ml-12', 'absolute top-1/2 right-0 transform -translate-y-1/2 text-6xl text-gray-500 -mr-12'],
            },
      },
    });
  }, 3000)
  // $(".owl-carousel").on("changed.owl.carousel", function (event) {
  //   console.log(event);
  // });

