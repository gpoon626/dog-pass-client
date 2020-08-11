'use strict'

const store = require('./../store')
const config = require('./../config')

// Create
const postCreate = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      post: {
        date: data.post.date,
        match: data.post.match,
        odds: data.post.odds
      }
    }
  })
}

// Index
const viewPosts = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {}
  })
}

// // Show
// const showPosts = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/posts',
//     method: 'GET',
//     headers: {
//       Authorization: 'Bearer ' + store.user.token
//     },
//     data: {
//       movie: {
//         title: data.movie.title
//       }
//     }
//   })
// }

// Update
const updatePost = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/posts/' + data.post.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      post: {
        date: data.post.date,
        match: data.post.match,
        odds: data.post.odds
      }
    }
  })
}

// Delete
const deletePost = function (data) {
  return $.ajax({
    url: config.apiUrl + '/posts/' + data.post.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  postCreate,
  viewPosts,
  // showPosts,
  updatePost,
  deletePost
}
