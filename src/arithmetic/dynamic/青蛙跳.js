// https://juejin.cn/post/6951922898638471181?share_token=e142da87-3d3a-472c-9f9e-c6795ebe722c
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 10 级的台阶总共有多少种跳法。
const map = {};
function methods(n) {
    if(n === 0) {
        return 0;
    }
    if(n === 1) {
        return 1;
    }
    if(n === 2) {
        return 2;
    }
    // return methods(n - 1) + methods(n - 2);
    if(!map[n]) {
        map[n] = methods(n - 1) + methods(n - 2);
    }
    return map[n];
}

var n = 11;
var num = methods(n);
console.log(num)


function methods2(n) {
    let a = 1;
    let b = 2;
    let _tem = 0;
    for(let i = 3; i <= n; i++) {
        _tem = b;
        b = a + b;
        a =  _tem;
    }
    return b;
}

var num2 = methods2(n);
console.log(num2)
