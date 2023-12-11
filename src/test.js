var ios = [2684,1239,1827,3903,10017,5116,2709,2721,2952,1767,3330]
var android = [3667,1893,2228,5722,23173,16227,8380,15664,12198,6951,8643]

var rate = ios.map((item, i) => {
    return (android[i]*100/(ios[i] + android[i])).toFixed(2)
})
console.log(rate)

