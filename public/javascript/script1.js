$(document).ready(() => {
  $('#up').on('click', () => {
    $('.card').addClass('flipped');
  });

  $('#in').on('click', () => {
    $('.card').removeClass('flipped');
  });
});