$('.js-ticket').each(function(index) {
  $(this).on('hidden.bs.dropdown', function () {
    if (index < $('.js-ticket').length - 1) {
      // $('.js-dropdown-btn').eq(index + 1).trigger('click')
      // $('.js-ticket').eq(index + 1).dropdown('toggle')
    }
  })
})