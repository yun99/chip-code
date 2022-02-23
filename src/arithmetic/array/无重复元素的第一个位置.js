

firstNotRepeatingChar(str) {
    let newMap = {};
    let index = 0;
    for(let i = 0; i<str.length; i++) {
        if(!map[str[i]]) {
            map[str[i]] = true;
            index = i;
        }
    }
    return index;
}

let str = "google";
console.log(
    firstNotRepeatingChar('str')
)