/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const $tweetContainer = $('.main-tweet-container');
  const $tweetText = $('#tweet-text');

  const $renderTweets = function (tweets) {
    $tweetContainer.empty();
    for (const tweet of tweets) {
      const userTweet = $createTweetElement(tweet);
      $('.main-tweet-container').prepend(userTweet);
    }
  };

  const $createTweetElement = function (tweetData) {
    const userInfo = tweetData.user;
    const time = timeago.format(tweetData.created_at);

    const $newTweet = `
    <article class="tweet">
    <header class="tweet-header">
    <span class="user-avatar">
    <img src="${userInfo.avatars}" class="tweet-user-avatar"></img> ${userInfo.name}
    </span>
    <span class="at-user"> ${userInfo.handle}</span>
    </header>
    
    <p class="tweet-content">${tweetData.content.text}</p>
    
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

  // $renderTweets(data);

  $('#submit-tweet').submit(function (event) {
    event.preventDefault();
    // console.log($(this));
    // console.log($(this).serialize());

    const data = $(this).serialize();
    const dataLength = data.slice(5).length;
    console.log(data);

    if (dataLength > 140 || data === 'text=') {
      alert('input empty or to long');
      event.preventDefault();
    } else {
      $.ajax({
        url: '/tweets',
        data: data,
        method: 'POST',
        success: (tweets) => {
          $loadTweets();
          $tweetText.val('');

          console.log('successful post');
        },
        error: (error) => {
          console.log('error on post');
        },
      });
    }
  });

  const $loadTweets = function () {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      data: 'json',
      success: (tweets) => {
        $renderTweets(tweets);
        console.log('success in load tweets');
      },
      error: (error) => {
        console.log('did not work in load tweets', error);
      },
    });
  };
  $loadTweets();
});

// //create tweet container article class-tweet
// const $article = $('.tweet');

// //group one

// //create header class tweet-header
// const $header = $('.tweet-header');
// //create span class user-avatar
// const $avatarSpan = $('.user-avatar');
// //create span class at-user
// const $userSpan = $('.at-user');
// //create i tag
// const $iAvatar = $('<i>');

// //group two

// //create p class tweet-content
// const $para = $('<p>').text(tweetData.content.text);

// //group three

// // create footer class tweet-footer
// const $footer = $('.tweet-footer');
// //create span - for days ago
// const $daysAgo = $('<span>');
// //create div class tweet actions
// const $actionsDiv = $('.tweet-actions');
// // add three spans with icons
// const $flag = $('<span>');
// const $retweet = $('<span>');
// const $heart = $('<span>');

//tags

// make element tags
// const $articleTag = $('<article>').addClass('.tweet');
// const $headerTag = $('<header>').addClass('.tweet-header');
// const $spanTag = $('<span>');
// const $iTag = $('<i>');
// const $pTag = $('<article>').addClass('.tweet-content');
// const $footerTag = $('footer>').addClass('.tweet-footer');
// const $divTag = $('<div>').addClass('.tweet-actions');

// const $insideHeader = $headerTag.append($spanTag);
