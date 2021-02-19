/**
 * 硬币。给定数量不限的硬币，币值为25分、10分、5分和1分，编写代码计算n分有几种表示法。(结果可能会很大，你需要将结果模上1000000007)
 *
 *  输入: n = 10
 *  输出：4
 *  解释: 有四种方式可以凑成总金额:
 * 10=10
 * 10=5+5
 * 10=5+1+1+1+1+1
 * 10=1+1+1+1+1+1+1+1+1+1
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/coin-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

 /**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let defaultCoinMap = [
        { type: 15, count: 0 },
        { type: 10, count: 0 },
        { type: 5, count: 0 },
        { type: 1, count: 0 }
    ];
    let coinMap = JSON.parse(JSON.stringify(defaultCoinMap));
    for(let i = 0; i < coinMap.length; i++) {
        let coinData = coinMap[i];
        let dividor = Math.floor(n / coinData.type);
        coinData.count = dividor;
    }


    const getCurCoinList = (options) => {
        console.log(options)
        let { preCoinMap, coin, index, total } = options;
        let list = [];
        for(let i = coin.count; i >=0; i--) {

        }
        return list;
    }


    let result = [];
    let len = coinMap.length;
    let start = coinMap.findIndex(coin => coin.count > 0);
    let
    console.log(start)
    for(let i = start; i < len; i++) {
        let coin = coinMap[i];
        let newResult = [];
        if(i > start) {
            // for(let j = 0; j < result.length; j++) {
            //     let preCoinMap = result[j];
            //     let list = getCurCoinList({ preCoinMap, coin, index: i, total: n});
            //     newResult.push(...list);
            // }
        } else {
            let preCoinMap = JSON.parse(JSON.stringify(defaultCoinMap));
            let list = getCurCoinList({ preCoinMap, coin, index: i, total: n});
            newResult.push(...list);
        }
        result = newResult;
    }

    console.log(coinMap)
    console.log(result.length)
};

waysToChange(10)