// Task: Implement a class named 'RangeList'
// A pair of integers define a range, for example: [1, 5). This range includes integers: 1, 2, 3, and 4.
// A range list is an aggregate of these ranges: [1, 5), [10, 11), [100, 201)
/** *
 * NOTE: Feel free to add any extra member variables/functions you like.
 */
class RangeList {
  constructor() {
    this.ranges = [];
  }
  /**
   *
   * Adds a range to the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  add(range) {
    this.ranges.push(range);

    // rangeList sort and merge
    this.ranges.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < this.ranges.length - 1; i++) {
      if (this.ranges[i][1] >= this.ranges[i + 1][0]) {
        this.ranges[i][1] = Math.max(this.ranges[i][1], this.ranges[i + 1][1]);
        this.ranges.splice(i + 1, 1);
        i--;
      }
    }
  }
  /** *
   * Removes a range from the list
   * @param {Array<number>} range - Array of two integers that specify beginning and end of range.
   */
  remove(range) {
    let [start, end] = range;

    this.ranges = this.ranges.reduce((acc, [rStart, rEnd]) => {
      if (end <= rStart || start >= rEnd) {
        acc.push([rStart, rEnd]);
      } else {
        if (start > rStart) {
          acc.push([rStart, start]);
        }
        if (end < rEnd) {
          acc.push([end, rEnd]);
        }
      }
      return acc;
    }, []);
  }
  /** *
   * Convert the list of ranges in the range list to a string
   * @returns A string representation of the range list
   */
  toString() {
    return this.ranges.map((range) => `[${range.join(", ")})`).join(" ");
  }
}

const rl = new RangeList();
console.log(rl.toString());

rl.add([1, 5]);
console.log(rl.toString());

rl.add([10, 20]);
console.log(rl.toString());

rl.add([20, 20]);
console.log(rl.toString());

rl.add([20, 21]);
console.log(rl.toString());

rl.add([2, 4]);
console.log(rl.toString());

rl.add([3, 8]);
console.log(rl.toString());

rl.remove([10, 10]);
console.log(rl.toString());

rl.remove([10, 11]);
console.log(rl.toString());

rl.remove([15, 17]);
console.log(rl.toString());

rl.remove([3, 19]);
console.log(rl.toString());
