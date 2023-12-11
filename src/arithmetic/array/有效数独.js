/**
 * 
 * 作者：GODEYESCAO
 * 链接：https://leetcode-cn.com/leetbook/read/top-interview-questions-easy/x2f9gg/?discussion=WBvBlU
 * 来源：力扣（LeetCode）
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

var isValidSudoku = function(board) {
    let row={}
    let col={}
    let box={}
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            let num=board[i][j]
            if(num!=='.'){
                let boxindex = Math.floor(i/3)*3+Math.floor(j/3);
                if(row[i+''+num] || col[j+''+num] || box[boxindex+''+num] ){
                    return false
                }
                row[i+''+num]=true
                col[j+''+num]=true
                box[boxindex+''+num]=true
            }
        }
    }
    return true;
};

