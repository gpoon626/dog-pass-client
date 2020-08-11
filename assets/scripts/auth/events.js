'use strict'
const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  console.log(event)

  const form = event.target
  const data = getFormFields(form)

  console.log(data)

  api.addUser(data)
    .then(ui.addSuccess)
    .catch(ui.addFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target);
  const form = event.target
  console.log(data)

  api.signUserIn(data)
    .then(ui.signUserInSuccess)
    .catch(ui.signUserInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target);
  const form = event.target
  console.log(data)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log(event)

  const data = getFormFields(event.target)
  const form = event.target
  console.log(data)

  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
