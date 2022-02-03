$(() => {
  //shows make tweet container

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
  $('.footer-link').on('click', () => {
    $('.new-tweet').slideDown();
    showTweetCount = 1;
  });
});
