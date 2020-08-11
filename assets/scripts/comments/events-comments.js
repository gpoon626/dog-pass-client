'use strict'

const api = require('./api-comments')
const ui = require('./ui-comments')
const store = require('./../store')
const getFormFields = require('./../../../lib/get-form-fields.js')

// create
const onCreateComment = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)
  console.log(data)

  api.commentCreate(data)

    .then(ui.commentCreateSuccess)
    .catch(ui.commentCreateFail)
}

module.exports = {
  onCreateComment
}
