
// let $promise = new Promise((resolve, reject) => {
//     console.log("start exec");
//     setTimeout(() => {
//         reject('done')
//     }, 1 * 1000);
// }).catch(err => {
//     console.error('promise catch', err)
//     return Promise.resolve
// });

// // setTimeout(() => {
// //     console.log("delay exec")
// //     $promise.then((res) => {
// //         console.log(res)
// //     }).catch((err) => {
// //         console.error(err)
// //     })
// // }, 3 * 1000)
// // console.log("immediate")
// $promise.then((res) => {
//     console.log('$promise', res)
// }).catch(err => {
//     console.error('catch:', err)
// }).finally(res => {
//     console.info('finally:', res)
// })


const p1 = new Promise(function (resolve, reject) {
    resolve('ddd')
    // setTimeout(() => resolve(new Error('fail')), 3000)
  })
  
  const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
  })
  
  p2
    .then(result => console.log('info',result))
    .then(res => {
        console.log('2', res)
    })
    .then(res => {
        console.log('3', res)
    })
    .then(res => {
        console.log('4', res)
    })
    .catch(error => console.log('err', error))