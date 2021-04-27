
let $promise = new Promise((resolve, reject) => {
    console.log("start exec");
    setTimeout(() => {
        resolve('done')
    }, 2 * 1000);
});

setTimeout(() => {
    console.log("delay exec")
    $promise.then((res) => {
        console.log(res)
    })
}, 3 * 1000)
console.log("immediate")
$promise.then((res) => {
    console.log(res)
})