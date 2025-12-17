const fs = require("fs");
const nums = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

const n = nums[0];
const scores = nums.slice(1); // 길이 n
/** 
* 1. 최대 점수 찾기 => maxScore
* 2. 모든 요소에 *80/100 => score
* 3. totalScore += score
* 4. totalScore / cnt
*/

let max = 0
let totalScore = 0
for (const s of scores){ if(max < s) max = s}

const cal = (num, max) => (num / max) * 100;

for (let s of scores) {
    totalScore += cal(s, max);
}

console.log(totalScore / n)