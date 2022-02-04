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

  //atuo opens the tweet window if the page get too small

  $(window).on('resize', () => {
    if ($(window).width() < 500) {
      $('.new-tweet').slideDown();
      showTweetCount = 1;
    } else {
      $('.new-tweet').slideUp();
      showTweetCount = 0;
    }
  });
});
