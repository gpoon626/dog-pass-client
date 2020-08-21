'use strict'
// const showPosts = require('../posts/ui-posts.js')

const commentCreateSuccess = function (response) {
  console.log(response, 'comment created!')
  $('#post-comment').text('Comment Created! Click View Post')
  $('form').trigger('reset')

  // showPosts.viewPostsSuccess()
}

const commentCreateFail = function () {
  console.log('Failed')
}

module.exports = {
  commentCreateSuccess,
  commentCreateFail
}
