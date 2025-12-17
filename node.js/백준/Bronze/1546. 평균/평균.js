const fs = require("fs");
const nums = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = nums[0];
const scores = nums.slice(1); // 길이 n
/** 
* 1. 최대 점수 찾기 => maxScore
* 2. 모든 요소에 *80/100 => score
* 3. total += score
* 4. total / cnt
*/

let max = 0;
for (const s of scores) if (s > max) max = s;

let total = 0;
for (const s of scores) total += (s / max) * 100;

console.log(total / n);