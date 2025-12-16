const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trimEnd();
const lines = data.split("\n");
const testNum = Number(lines[0]);

for (let i = 1; i <= testNum; i++) {
    const testStr = lines[i].trim();
    let totalScore = 0
    let score = 0;
  for (let str of testStr) {
      if(str === "O"){
          score += 1
          totalScore += score
      }else{
          score = 0
      }
  }
    console.log(totalScore)
}