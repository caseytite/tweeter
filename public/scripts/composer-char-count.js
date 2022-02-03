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
  let showTweetCount = 0;
  $('.new-tweet-arrows').on('click', () => {
    if (showTweetCount % 2 === 0) {
      showTweetCount++;
      $('.new-tweet').slideDown();
    } else if (showTweetCount % 2 === 1) {
      $('.new-tweet').slideUp();
      showTweetCount++;
    }
  });
});
// attributes.style.value
