$(document).ready(function () {
  $(document).on('click', '.js--btn__social', showSocialMobile)
  $(document).on('click', '.js--overlay__social', hideSocialMobile)
})

function showSocialMobile() {
  $('.js--social').addClass('active')
  $('.js--overlay__social').addClass('active')
}

function hideSocialMobile() {
  $('.js--social').removeClass('active')
  $(this).removeClass('active')
}