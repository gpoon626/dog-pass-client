'use strict'

const commentCreateSuccess = function (response) {
  console.log(response, 'comment created!')
  $('form').trigger('reset')
  $
}

const commentCreateFail = function () {
  console.log('Failed')
}

module.exports = {
  commentCreateSuccess,
  commentCreateFail
}
