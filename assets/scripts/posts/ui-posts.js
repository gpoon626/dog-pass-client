'use strict'

const showPostsTemplate = require('../templates/post-listing.handlebars')
const store = require('./../store')

const postCreateSuccess = function (response) {
  console.log(response, 'new post!')
  $('form').trigger('reset')
  // store.movie = response.movie
}

const postCreateFail = function () {
  console.log('Failed')
}

const viewPostsSuccess = function (data) {
  console.log('viewPostsSuccess', data)
  store.posts = data.posts

  const showPostsHtml = showPostsTemplate({posts: data.posts})

  $('.content').append(showPostsHtml)
}

const clearPosts = () => {
  $('.content').empty()
}

const viewPostsFail = function () {
  console.log('Failed')
}

const showPostsSuccess = function (data) {
  console.log(data)
}

const showPostsFail = function () {
  console.log('Failed')
}

const updatePostSuccess = function (response) {
  console.log(response, 'updated post!')
  $('form').trigger('reset')
}

const updatePostFail = function () {
  console.log('Failed')
}

const deletePostSuccess = function (response) {
  console.log(response, 'post deleted!')
  $('form').trigger('reset')
}

const deletePostFail = function () {
  console.log('Failed')
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
