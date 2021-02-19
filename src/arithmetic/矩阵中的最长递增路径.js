/**
 * 给定一个整数矩阵，找出最长递增路径的长度。
 * 对于每个单元格，你可以往上，下，左，右四个方向移动。 你不能在对角线方向上移动或移动到边界外（即不允许环绕）。
 * 输入:
 * [
 *    [9,9,4],
 *    [6,6,8],
 *    [2,1,1]
 * ]
 * 输出: 4，[1,2,3]
 * 解释: 最长递增路径为 [1, 2, 6, 9]。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/longest-increasing-path-in-a-matrix/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function(matrix) {
    let yLen = matrix.length;
    let xLen = matrix[0].length;
    const getMaxLocations = (x, y) => {
        let list = [
            { x: x - 1, y: y}, { x: x + 1, y: y},
            { x: x, y: y - 1}, { x: x, y: y + 1}
        ];
        return list.filter(i =>
            i.x >= 0 && i.x < xLen && i.y >= 0 && i.y < yLen &&  matrix[i.y][i.x] > matrix[y][x]
        ).map(i => ({ ...i, value:  matrix[i.y][i.x] }));
    };

    const getPathList = (list) => {
        let newPathList = [];
        let hasNextPath = false;
        for(let i=0; i<list.length; i++){
            let cutPath = list[i];
            let lastPoint = cutPath[cutPath.length - 1];
            let lastPointPathPoints = getMaxLocations(lastPoint.x, lastPoint.y);
            hasNextPath = hasNextPath || lastPointPathPoints.length > 0;
            if(lastPointPathPoints.length > 0) {
                lastPointPathPoints.forEach((NewPoint) => {
                    newPathList.push([...cutPath, NewPoint]);
                });
            } else {
                newPathList.push([...cutPath]);
            }
        }
        if(hasNextPath) {
            return getPathList(newPathList)
        } else {
            return newPathList;
        }
    }

    let pathList = [];
    for(let y = 0; y < yLen; y++) {
        for(let x = 0; x < xLen; x++) {
            let lastPointPathPoints = getMaxLocations(x, y);
            lastPointPathPoints.forEach(point => {
                let nextPathList = getPathList([[{...point}]]);
                nextPathList.forEach(list => {
                    pathList.push([{x, y, value: matrix[y][x] }, ...list]);
                })
            })
        }
    }
    pathList.sort((a, b) => {
        return b.length - a.length
    })
    return {
        value: pathList[0].length,
        pathList: pathList[0]
    };
};

let matrix = [
    [9,9,4],
    [6,6,8],
    [2,1,1]
];

console.log(
    longestIncreasingPath(matrix)
)

