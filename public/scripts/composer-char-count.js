$(() => {
  console.log('hello');

  // Keeping track of counter

  const $tweetText = $('#tweet-text');

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
  let clicks = 0;
  $heart.on('click', function () {
    clicks++;
    if (clicks % 2 === 0) {
      $heart.addClass('clicked');
    } else {
      $heart.removeClass('clicked');
    }
  });
});
// attributes.style.value
