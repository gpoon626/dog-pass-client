'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userAction = require('./auth/events')
const postAction = require('./posts/events-posts')
const commentAction = require('./comments/events-comments')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#signup-form').on('submit', userAction.onSignUp)
  $('#sign-in-form').on('submit', userAction.onSignIn)
  $('#change-password-form').on('submit', userAction.onChangePassword)
  $('#sign-out').on('click', userAction.onSignOut)

  $('#change-password').hide()
  $('#create-post').hide()
  $('#show-post').hide()
  $('#update-post').hide()
  $('#delete-post').hide()
  $('#view-posts').hide()
  $('#clearPostsButton').hide()
  $('#create-comment').hide()
  $('#comment').hide()

  $('#view-posts').on('click', postAction.onViewPosts)
  $('#create-post-form').on('submit', postAction.onPostCreate)
  $('#show-post-form').on('submit', postAction.onShowPosts)
  $('#update-post-form').on('submit', postAction.onUpdatePost)
  $('#delete-post-form').on('submit', postAction.onDeletePost)

  $('#create-comment-form').on('submit', commentAction.onCreateComment)

  postAction.addHandlers()
})
