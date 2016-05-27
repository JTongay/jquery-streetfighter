$(document).ready(function () {
  $('.ryu').mouseenter(function () {
      $('.ryu-still').hide();
      $('.ryu-ready').show();
    })
    .mouseleave(function () {
      $('.ryu-ready').hide();
      $('.ryu-still').show();
    })
    .mousedown(function () {
      playHadouken();
      $('.ryu-ready').hide();
      $('.ryu-throwing').show();
      $('.hadouken').finish().show().animate({ 'left': '1020px' },
        500,
        function () {
          $(this).hide();
          $(this).css('left', '520px');
        });
    })
    .mouseup(function () {
      $('.ryu-throwing').hide();
      $('.ryu-ready').show();
    })
  $('html').keypress(function (e) {
      if (e.which === 88) {
        playRyu();
        $('.ryu-cool').show();
        $('.ryu-still').hide();
        $('.ryu-ready').hide();
      }
    })
    .keyup(function () {
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $('.ryu-ready').hide();
    });



});

function playHadouken() {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playRyu() {
  $('#ryu-music')[0].volume = 1;
  $('#ryu-music')[0].load();
  $('#ryu-music')[0].play();

}
