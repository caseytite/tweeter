/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 *
 */

$(() => {
  const $tweetContainer = $('.main-tweet-container');
  const $tweetText = $('#tweet-text');

  //render new tweets to page------------------------------------------

  const $renderTweets = function (tweets) {
    $tweetContainer.empty();
    for (const tweet of tweets) {
      const userTweet = $createTweetElement(tweet);
      $('.main-tweet-container').prepend(userTweet);
    }
  };

  // make flag/heart/retweet stay clicked-------------until page reload anyways

  const clicker = function () {
    const $heart = $('.fa-heart');
    let heartClicks = 1;
    $heart.on('click', function () {
      heartClicks++;
      if (heartClicks % 2 === 0) {
        $(this).addClass('clicked');
      } else {
        $(this).removeClass('clicked');
      }
    });

    const $flag = $('.fa-flag');
    let flagClicks = 1;
    $flag.on('click', function () {
      flagClicks++;
      if (flagClicks % 2 === 0) {
        $(this).addClass('clicked');
      } else {
        $(this).removeClass('clicked');
      }
    });
    const $reTweet = $('.fa-retweet');
    let reClicks = 1;
    $reTweet.on('click', function () {
      reClicks++;

      if (reClicks % 2 === 0) {
        $(this).addClass('retweet');
      } else {
        $(this).removeClass('retweet');
      }
    });
  };

  //creates new tweet----------------------------------------------------

  const $createTweetElement = function (tweetData) {
    const userInfo = tweetData.user;
    const time = timeago.format(tweetData.created_at);

    const escape = function (str) {
      let div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const $newTweet = `
    <article class="tweet">
    <header class="tweet-header">
    <span class="user-avatar">
    <img src="${userInfo.avatars}" class="tweet-user-avatar"></img> ${
      userInfo.name
    }
    </span>
    <span class="at-user"> ${userInfo.handle}</span>
    </header>
    
    <p class="tweet-content">${escape(tweetData.content.text)}</p>
    
    <footer class="tweet-footer">
    <span>${time}</span>
    <div class="tweet-actions">
    <span><i class="fa-solid fa-flag"></i></span>
    <span><i class="fa-solid fa-retweet"></i></span>
    <span><i class="fa-solid fa-heart"></i></span>
    </div>
    </footer>
    </article>`;

    return $newTweet;
  };

  //------- post new tweets---------------------------------------------

  $('#submit-tweet').submit(function (event) {
    event.preventDefault();

    const data = $(this).serialize();
    const dataLength = data.slice(5).length;

    if (dataLength > 140 || data === 'text=') {
      $('.alert').slideDown();
      event.preventDefault();
    } else {
      $.ajax({
        url: '/tweets',
        data: data,
        method: 'POST',
        success: () => {
          $loadTweets();
          $('.counter').val('140');

          $('.alert').slideUp();
          $tweetText.val('');

          console.log('successful post');
        },
        error: (error) => {
          console.log('Post tweets failed with', error.status);
        },
      });
    }
  });

  //load tweets to page-----------------------------------------------

  const $loadTweets = function () {
    const $alert = $('.alert');
    $alert.addClass('hidden');
    $.ajax({
      url: '/tweets',
      method: 'GET',
      data: 'json',
      success: (tweets) => {
        $renderTweets(tweets);
        clicker();
        console.log('success in load tweets');
      },
      error: (error) => {
        console.log('Load tweets failed with', error.status);
      },
    });
  };
  $loadTweets();
});
