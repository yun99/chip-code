// Promise.resolve().then(() => {
//     console.log(0);
//     return Promise.resolve(4);
// }).then((res) => {
//     console.log(res)
// })

// Promise.resolve().then(() => {
//     console.log(1);
// }).then(() => {
//     console.log(2);
// }).then(() => {
//     console.log(3);
// }).then(() => {
//     console.log(5);
// }).then(() =>{
//     console.log(6);
// })


console.log('script start')
setTimeout(function () {
    console.log('settimeout')
})

Promise.resolve().then(() => {
    console.log('promise1')
    return Promise.resolve('promise2');
}).then((res) => {
    console.log(res)
})

new Promise(function (resolve) {
    console.log('promise3')
    resolve()
}).then(function () {
    console.log('promise4')
}).then(function () {
    console.log('promise5')
}).then(function () {
    console.log('promise6')
})
console.log('script end')