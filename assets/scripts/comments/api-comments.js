'use strict'

const store = require('./../store')
const config = require('./../config')

const commentCreate = function (data) {
  console.log(data.movie)
  return $.ajax({
    url: config.apiUrl + '/comments',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      comment: {
        content: data.comment.content,
        user: store.user._id,
        postId: data.post.id
      }
    }
  })
}

module.exports = {
  commentCreate
}
