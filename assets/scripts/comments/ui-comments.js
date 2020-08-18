'use strict'

const commentCreateSuccess = function (response) {
  console.log(response, 'comment created!')
  $('#post-comment').text('Comment Created!')
  $('form').trigger('reset')
}

const commentCreateFail = function () {
  console.log('Failed')
}

module.exports = {
  commentCreateSuccess,
  commentCreateFail
}
