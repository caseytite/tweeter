$(() => {
  //shows make tweet container

  let showTweetCount = 0;
  $('.new-tweet-arrows').on('click', () => {
    if (showTweetCount % 2 === 0) {
      showTweetCount++;
      $('.new-tweet').slideDown();
      $('#tweet-text').focus();
    } else if (showTweetCount % 2 === 1) {
      $('.new-tweet').slideUp();
      showTweetCount++;
    }
  });
  $('.footer-link').on('click', () => {
    $('.new-tweet').slideDown();
    showTweetCount = 1;
    setTimeout(() => {
      $('#tweet-text').focus();
    }, 50);
  });

  //auto opens the tweet window if the page gets too small
  // note the focus in here appears not to work when the screen slides, but i think its because when the screen is getting dragged the focus isnt on the window and when you click back into the window you can see the caret flash in the input area and then go away because we click on another part of the screen, so I think it does actually work. Ive messed around with this one for the better part of an hour so I would love your feedback on it if you have any suggestions!

  $(window).on('resize', () => {
    if ($(window).width() < 500) {
      $('.new-tweet').slideDown();
      setTimeout(() => {
        $('#tweet-text').focus();
      }, 150);
      showTweetCount = 1;
    } else {
      $('.new-tweet').slideUp();
      showTweetCount = 0;
    }
  });
});
