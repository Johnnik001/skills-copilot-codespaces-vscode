// create new browser window
const { BrowserWindow } = require('electron').remote
const path = require('path')
const url = require('url')
const ipc = require('electron').ipcRenderer

const submitBtn = document.getElementById('submitBtn')
const commentList = document.getElementById('commentList')
const commentField = document.getElementById('commentField')

submitBtn.addEventListener('click', function (event) {
  const comment = commentField.value
  commentField.value = ''
  ipc.send('addComment', comment)
})

ipc.on('newComment', function (event, arg) {
  const li = document.createElement('li')
  const text = document.createTextNode(arg)
  li.appendChild(text)
  commentList.appendChild(li)
})