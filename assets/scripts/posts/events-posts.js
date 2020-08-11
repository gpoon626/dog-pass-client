'use strict'

const api = require('./api-posts')
const ui = require('./ui-posts')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

// create
const onPostCreate = function (event) {
  event.preventDefault()
  // where form info comes in
  const form = event.target
  const data = getFormFields(form)

  api.postCreate(data)

    .then(ui.postCreateSuccess)
    .catch(ui.postCreateFail)
}

// index
const onViewPosts = function () {
  event.preventDefault()
  api.viewPosts()

    .then(res => ui.viewPostsSuccess(res))
    // .then(ui.viewPostsSuccess)
    .catch(ui.viewPostsFail)
}

const onClearPosts = (event) => {
  event.preventDefault()
  ui.clearPosts()
}

// show
const onShowPosts = function (event) {
  event.preventDefault()
  // where form info comes in
  const form = event.target
  const data = getFormFields(form)

  api.showPosts(data)

    .then(ui.showPostsSuccess)
    .catch(ui.showPostsFail)
}

// Update
const onUpdatePost = function (event) {
  event.preventDefault()
  // form info comes in
  const form = event.target
  const data = getFormFields(form)

  api.updatePost(data)

    .then(ui.updatePostSuccess)
    .catch(ui.updatePostFail)
}

// DELETE
const onDeletePost = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.deletePost(data)

    .then(ui.deletePostSuccess)
    .catch(ui.deletePostFail)
}

// handlers
const addHandlers = () => {
  $('#viewPosts').on('click', onViewPosts)
  $('#clearPostsButton').on('click', onClearPosts)
}

module.exports = {
  addHandlers,
  onPostCreate,
  onViewPosts,
  onClearPosts,
  onShowPosts,
  onUpdatePost,
  onDeletePost
}
