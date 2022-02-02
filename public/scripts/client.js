/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  user: {
    name: 'Newton',
    avatars: 'https://i.imgur.com/73hZDYK.png',
    handle: '@SirIsaac',
  },
  content: {
    text: 'If I have seen further it is by standing on the shoulders of giants',
  },
  created_at: 1461116232227,
};

const createTweetElement = function (tweetData) {
  const tweet = {};
  let user = tweetData.user;

  //create tweet container article class-tweet
  const $article = $('.tweet');

  //group one

  //create header class tweet-header
  const $header = $('.tweet-header');
  //create span class user-avatar
  const $avatarSpan = $('.user-avatar');
  //create span class at-user
  const $userSpan = $('.at-user');
  //create i tag
  const $iAvatar = $('<i>');

  //group two

  //create p class tweet-content
  const $para = $('<p>').text(tweetData.content.text);

  //group three

  // create footer class tweet-footer
  const $footer = $('.tweet-footer');
  //create span - for days ago
  const $daysAgo = $('<span>');
  //create div class tweet actions
  const $actionsDiv = $('.tweet-actions');
  // add three spans with icons
  const $flag = $('<span>');
  const $retweet = $('<span>');
  const $heart = $('<span>');
  return tweet;
};

const $tweet = createTweetElement(tweetData);

$('#tweets-container').append($tweet);
