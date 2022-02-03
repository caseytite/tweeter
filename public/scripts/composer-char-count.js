$(() => {
  // Keeping track of counter

  const $tweetText = $('#tweet-text');
  const $alert = $('.alert');

  $tweetText.on('input', function () {
    const numChars = $(this).val().length;

    $(this)
      .siblings('.button-count')
      .children('.counter')
      .val(140 - numChars);

    const counter = $(this)
      .siblings('.button-count')
      .children('.counter')
      .val();

    if (counter < 0) {
      $('.counter').css({ color: 'red' });
    } else {
      $('.counter').css({ color: '#545149' });
    }
  });

  // Change heart color on clicks

  const $heart = $('.fa-heart');
  let heartClicks = 0;
  // console.log(heartClicks);
  $heart.on('click', function () {
    heartClicks++;
    if (heartClicks % 2 === 0) {
      $(this).addClass('clicked');
    } else {
      $(this).removeClass('clicked');
    }
  });
  const $flag = $('.fa-flag');
  let flagClicks = 0;
  $flag.on('click', function () {
    flagClicks++;
    if (flagClicks % 2 === 0) {
      $(this).addClass('clicked');
    } else {
      $(this).removeClass('clicked');
    }
  });
});
// attributes.style.value
