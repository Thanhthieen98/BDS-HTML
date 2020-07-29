$(document).ready(function () {
  $(document).on('click', '.js--btn__collapse', showMenuMobile)
  $(document).on('click', '.js--overlay__menu', hideMenuMobile)
})

function showMenuMobile() {
  $('.js--menu_navMobile').addClass('active')
  $('.js--overlay__menu').addClass('active')
}

function hideMenuMobile() {
  $('.js--menu_navMobile').removeClass('active')
  $(this).removeClass('active')
}