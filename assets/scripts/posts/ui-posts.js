'use strict'

const showPostsTemplate = require('../templates/post-listing.handlebars')
const store = require('./../store')

const postCreateSuccess = function (response) {
  // console.log(response, 'new post!')
  $('#create-message').text('Post Created! Click View Posts')
  $('form').trigger('reset')
  // store.movie = response.movie
}

const postCreateFail = function () {
  // console.log('Failed')
}

const viewPostsSuccess = function (data) {
  // console.log('viewPostsSuccess', data)
  store.posts = data.posts

  const showPostsHtml = showPostsTemplate({posts: data.posts})
  $('.posts').show()
  $('.content').html(showPostsHtml)
}

const clearPosts = () => {
  $('.content').empty()
}

const viewPostsFail = function () {
  // console.log('Failed')
}

const showPostsSuccess = function (data) {
  // console.log(data)
}

const showPostsFail = function () {
  // console.log('Failed')
}

const updatePostSuccess = function (response) {
  // console.log(response, 'updated post!')
  $('#update-message').text('Post Updated! Click View Post')
  $('form').trigger('reset')
}

const updatePostFail = function () {
  // console.log('Failed')
  $('#update-error').text('Sorry, this post does not belong to you')
}

const deletePostSuccess = function (response) {
  // console.log(response, 'post deleted!')
  $('#delete-message').text('Post Deleted. Click View Post to refresh')
  $('form').trigger('reset')
}

const deletePostFail = function () {
  // console.log('Failed')
  $('#delete-error').text('Sorry, this post does not belong to you')
}

module.exports = {
  postCreateSuccess,
  postCreateFail,
  viewPostsSuccess,
  clearPosts,
  viewPostsFail,
  showPostsSuccess,
  showPostsFail,
  updatePostSuccess,
  updatePostFail,
  deletePostSuccess,
  deletePostFail
}
