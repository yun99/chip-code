// a.js
var moduleB = require('./b.js')

function sayA () {
  console.log('say A')
}
module.exports = {
    sayA
  }
setInterval(() => {
  console.log('setInterval A')
}, 500)

setTimeout(() => {
  console.log('setTimeout moduleA')
  moduleB.sayB()
}, 2000)



