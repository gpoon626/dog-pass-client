'use strict'
const store = require('./../store')

const addSuccess = function (response) {
  // console.log(response)
  $('#message').text('Welcome!')
  $('form').trigger('reset')
}

const addFailure = function (response) {
  // console.log(response)
  $('#message').text('Try again')
  $('form').trigger('reset')
}

const signUserInSuccess = function (response) {
  // console.log(response)
  $('#message').text('Welcome!')
  $('form').trigger('reset')
  store.user = response.user

  $('#change-password').show()
  $('#create-post').show()
  $('#show-post').show()
  $('#update-post').show()
  $('#delete-post').show()
  $('#create-comment').show()
  // $('#content').show()

  $('#view-posts').show()
  $('#clearPostsButton').show()

  $('#signup').hide()
  $('#sign-in').hide()
  $('#sign-in-message').hide()
  $('#sign-up-message').hide()
}

const signUserInFailure = function (response) {
  // console.log(response)
  $('#message').text('Try again')
  $('form').trigger('reset')
}

const changePasswordSuccess = function (response) {
  // console.log(response)
  $('#message').text('Password Changed!')
  $('form').trigger('reset')
}

const changePasswordFailure = function (response) {
  // console.log(response)
  $('#message').text('Try again')
  $('form').trigger('reset')
}

const signOutSuccess = function (response) {
  // console.log(response)
  $('#message').text('Signed Out!')
  $('form').trigger('reset')

  $('#change-password').hide()
  $('#create-post').hide()
  $('#show-post').hide()
  $('#update-post').hide()
  $('#delete-post').hide()
  $('#create-comment').hide()
  $('.posts').hide()
  $('#create-message').hide()
  $('#update-message').hide()
  $('#delete-message').hide()
  $('#post-comment').hide()

  $('#view-posts').hide()
  $('#clearPostsButton').hide()

  $('#sign-in').show()
  $('#sign-up-message').show()
  $('#signup').show()
}

const signOutFailure = function (response) {
  // console.log(response)
  $('#message').text('Try again')
  $('#form').trigger('reset')
}

module.exports = {
  addSuccess,
  addFailure,
  signUserInSuccess,
  signUserInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  store,
  signOutSuccess,
  signOutFailure
}
