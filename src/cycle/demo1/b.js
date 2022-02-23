// b.js
var moduleA = require('./a.js')

setInterval(() => {
  console.log('setInterval B')
}, 500)

setTimeout(() => {
  console.log('setTimeout moduleB')
  console.log(moduleA)
  moduleA.sayA()
}, 2000)

function sayB () {
  console.log('say B')
}

module.exports = {
  sayB
}